import { FC, ReactNode, useState } from 'react'
import Overlay from '../atoms/Overlay'
import Typography from '../atoms/Typography'
import style from './Modal.module.scss'

type P = {
    children: ReactNode
    src: string
    title: string
}

const Modal: FC<P> = ({ children, src, title }) => {
    const [isOpen, setIsOpen] = useState(false)
    const modalOpen = () => {
        setIsOpen(true)
    }
    const modalClose = () => {
        setIsOpen(false)
    }

    return (
        <>
            <Overlay modalClose={modalClose} isOpen={isOpen}>
                {children}
            </Overlay>
            <div className={style.container}>
                <Typography component="h3">{title}</Typography>
                <div className={style.button}>
                    <img src={src} alt={title} onClick={modalOpen} />
                </div>
            </div>
        </>
    )
}

export default Modal
