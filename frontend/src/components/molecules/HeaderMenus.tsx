import { FC, memo, ReactNode } from 'react'
import style from './HeaderMenus.module.scss'

type P = {
    children: ReactNode
}

const HeaderMenus: FC<P> = memo(({ children }) => {
    return <ul className={style.menus}>{children}</ul>
})

export default HeaderMenus
