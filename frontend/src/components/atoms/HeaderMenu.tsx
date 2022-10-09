import { FC } from 'react'
import style from './HeaderMenu.module.scss'
import Typography from './Typography'
type P = {
    text: string
    href: string
}

const HeaderMenu: FC<P> = ({ text, href }) => {
    return (
        <li className={style.menu}>
            <a href={href}>
                <Typography fontStyle="p1">{text}</Typography>
            </a>
        </li>
    )
}

export default HeaderMenu
