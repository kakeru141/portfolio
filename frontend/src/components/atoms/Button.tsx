import { FC, ReactNode } from 'react'
import style from './Button.module.scss'

type P = {
    children: ReactNode
    type?: 'button' | 'submit' | 'reset' | undefined
    onClick?: () => void
    isSended?: boolean
}

const Button: FC<P> = ({ children, type, onClick, isSended }) => {
    return (
        <button
            className={style.button}
            type={type ? type : 'submit'}
            onClick={onClick}
            disabled={isSended}
        >
            {isSended ? <span>送信しました</span> : <span>{children}</span>}
        </button>
    )
}

export default Button
