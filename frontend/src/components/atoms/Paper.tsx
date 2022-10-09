import { FC, ReactNode } from 'react'
import style from './Paper.module.scss'

type P = {
    children: ReactNode
}

const Paper: FC<P> = ({ children }) => {
    return <div className={style.paper}>{children}</div>
}

export default Paper
