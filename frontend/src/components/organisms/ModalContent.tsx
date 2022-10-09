import { FC, ReactNode } from 'react'
import Typography from '../atoms/Typography'
import style from './ModalContent.module.scss'

type P = {
    title: string
    url: string
    techs: string[]
    overview: ReactNode
    study: ReactNode
    theme: ReactNode
}

const ModalContent: FC<P> = ({ title, techs, url, overview, study, theme }) => {
    return (
        <>
            <a href={url} className={style.url}>
                <Typography fontStyle="title2">{title}</Typography>
            </a>
            <div className={style.techs}>
                <Typography fontStyle="title1">概要</Typography>
                <div className={style.content}>{overview}</div>
                <Typography fontStyle="title1">課題</Typography>
                <div className={style.content}>{theme}</div>
                <Typography fontStyle="title1">主な学び</Typography>
                <div className={style.content}>{study}</div>
                <Typography fontStyle="title1">使用技術など</Typography>
                <div className={style.content}>
                    <Typography>
                        {techs.map(
                            (tech, index) =>
                                `${tech}${
                                    techs.length - 1 === index ? '' : ', '
                                }`
                        )}
                    </Typography>
                </div>
            </div>
        </>
    )
}

export default ModalContent
