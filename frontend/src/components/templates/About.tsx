import { FC } from 'react'
import Typography from '../atoms/Typography'
import style from './About.module.scss'

const About: FC = () => {
    return (
        <section className={style.about} id="about">
            <Typography component="h2" fontStyle="title3">
                私について
            </Typography>
            <Typography>
                高校卒業後、建設大工として修行し、現在は建材を扱う仕事を行っています。
            </Typography>
            <Typography>
                転職と同時に本業の傍らアフィリエイトを開始。IT業界の楽しさを知ります。{' '}
                <br />
                その後、フロントエンドを中心にプログラミング学習をしています。
                <br />
                主にReact、NEXT.js、TypeScriptの学習をしています。
            </Typography>
        </section>
    )
}

export default About
