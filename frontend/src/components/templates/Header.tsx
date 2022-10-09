import { FC } from 'react'
import HeaderMenu from '../atoms/HeaderMenu'
import Typography from '../atoms/Typography'
import HeaderMenus from '../molecules/HeaderMenus'
import style from './Header.module.scss'

const menus = [
    {
        text: 'トップ',
        href: '/',
    },
    {
        text: '制作物',
        href: '#works',
    },
    {
        text: 'プロフィール',
        href: '#about',
    },
    {
        text: 'お問い合わせ',
        href: '#contact',
    },
]

const Header: FC = () => {
    return (
        <header className={style.header}>
            <nav role="navigation">
                <a href="/" className={style.title}>
                    <Typography fontStyle="title2" component="h1">
                        sendo's portfolio
                    </Typography>
                </a>
                <HeaderMenus>
                    {menus.map(({ text, href }, index) => (
                        <HeaderMenu key={index} text={text} href={href} />
                    ))}
                </HeaderMenus>
            </nav>
        </header>
    )
}

export default Header
