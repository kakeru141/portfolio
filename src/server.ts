if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

import express, { Request, Response } from 'express'
import sgMail from '@sendgrid/mail'
import path from 'path'
sgMail.setApiKey(process.env.SG_KEY || '')
const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(express.static(path.join(__dirname, './build')))

app.post('/api/contact', (req: Request, res: Response) => {
    if (req.method === 'POST') {
        const clientMsg = {
            to: req.body.email,
            from: 'support@example.com',
            subject: `${req.body.name}様。お問合せありがとうございました。`,
            text:
                'お問合せを受け付けました。回答をお待ちください。' +
                req.body.message,
            html:
                'お問合せを受け付けました。回答をお待ちください。' +
                req.body.message,
        }
        const managementMsg = {
            to: 'senruttyo@gmail.com',
            from: 'support@example.com',
            subject: `ポートフォリオサイトからお問い合わせ`,
            text: `
            name: ${req.body.name}
            email: ${req.body.email}
            message: ${req.body.content}
          `,
            html:
                'お問合せを受け付けました。回答をお待ちください。' +
                req.body.message,
        }
        ;(async () => {
            try {
                await sgMail.send(clientMsg)
                await sgMail.send(managementMsg)
            } catch (error) {
                console.error(error)
            }
        })()
    }
    res.status(200)
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'))
})

app.listen(port, () => console.log(`server run ${port}`))
