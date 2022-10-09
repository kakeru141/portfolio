import { FC } from 'react'
import Typography from '../atoms/Typography'
import style from './Welcome.module.scss'

const Welcome: FC = () => {
    return (
        <section className={style.welcome}>
            <Typography component="h2" fontStyle="title3">
                ようこそ!
            </Typography>
            <Typography>
                ここはwebエンジニアへの転身を志すsendoのポートフォリオサイトです。{' '}
                <br />
                これまでの制作物などをまとめています。
            </Typography>
        </section>
    )
}

export default Welcome
