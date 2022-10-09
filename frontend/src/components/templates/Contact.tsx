import { FC, useState, ChangeEvent, FormEvent } from 'react'
import Button from '../atoms/Button'
import TextArea from '../atoms/TextArea'
import TextField from '../atoms/TextField'
import Typography from '../atoms/Typography'
import style from './Contact.module.scss'

const Contact: FC = () => {
    const mailPattern =
        /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        content: false,
    })
    const [values, setValues] = useState({
        name: '',
        email: '',
        content: '',
    })
    const [isSended, setIsSended] = useState(false)

    const onChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setValues((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!values.name) {
            setErrors((prev) => ({ ...prev, name: true }))
        }
        if (!mailPattern.test(values.email)) {
            setErrors((prev) => ({ ...prev, email: true }))
        }
        if (!values.content) {
            setErrors((prev) => ({ ...prev, content: true }))
        }
        if (values.name && mailPattern.test(values.email) && values.content) {
            await setIsSended(true)
            await fetch('/api/contact', {
                body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    message: values.content,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            })
        } else {
            console.error('contact message send error')
            alert('入力内容が正しくありません')
        }
    }
    return (
        <section className={style.contact} id="contact">
            <form onSubmit={onSubmit}>
                <Typography fontStyle="title2" component="h3">
                    お問い合わせ
                </Typography>
                <div className={style.message}>
                    <Typography>
                        最後までご覧下さりありがとうございます。
                        <br />
                        ご意見、ご質問などございましたら、こちらからご連絡ください。
                    </Typography>
                </div>
                <TextField
                    label="お名前"
                    id="name"
                    value={values.name}
                    onChange={onChange}
                    isError={errors.name}
                    setErrors={setErrors}
                />
                <TextField
                    label="メールアドレス"
                    id="email"
                    value={values.email}
                    onChange={onChange}
                    isError={errors.email}
                    setErrors={setErrors}
                />
                <TextArea
                    label="お問い合わせ内容"
                    id="content"
                    value={values.content}
                    onChange={onChange}
                    isError={errors.content}
                    setErrors={setErrors}
                />
                <div className={style.button}>
                    <Button isSended={isSended}>送信</Button>
                </div>
            </form>
        </section>
    )
}

export default Contact
