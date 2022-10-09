import { FC, ReactNode } from 'react'
import style from './Typography.module.scss'

type P = {
    component?: string
    fontStyle?: string
    children: ReactNode
}

const Typography: FC<P> = ({ component, fontStyle, children }) => {
    if (component === 'h2') {
        return (
            <h2
                className={
                    fontStyle === 'title1'
                        ? style.title1
                        : fontStyle === 'title2'
                        ? style.title2
                        : fontStyle === 'title3'
                        ? style.title3
                        : fontStyle === 'title4'
                        ? style.title4
                        : fontStyle === 'p3'
                        ? style.title3
                        : fontStyle === 'p1'
                        ? style.p1
                        : fontStyle === 'p2'
                        ? style.p2
                        : fontStyle === 'p3'
                        ? style.p3
                        : fontStyle === 'p4'
                        ? style.p4
                        : style.default
                }
            >
                {children}
            </h2>
        )
    } else if (component === 'h3') {
        return (
            <h3
                className={
                    fontStyle === 'title1'
                        ? style.title1
                        : fontStyle === 'title2'
                        ? style.title2
                        : fontStyle === 'title3'
                        ? style.title3
                        : fontStyle === 'title4'
                        ? style.title4
                        : fontStyle === 'p3'
                        ? style.title3
                        : fontStyle === 'p1'
                        ? style.p1
                        : fontStyle === 'p2'
                        ? style.p2
                        : fontStyle === 'p3'
                        ? style.p3
                        : fontStyle === 'p4'
                        ? style.p4
                        : style.default
                }
            >
                {children}
            </h3>
        )
    } else {
        return (
            <p
                className={
                    fontStyle === 'title1'
                        ? style.title1
                        : fontStyle === 'title2'
                        ? style.title2
                        : fontStyle === 'title3'
                        ? style.title3
                        : fontStyle === 'title4'
                        ? style.title4
                        : fontStyle === 'p3'
                        ? style.title3
                        : fontStyle === 'p1'
                        ? style.p1
                        : fontStyle === 'p2'
                        ? style.p2
                        : fontStyle === 'p3'
                        ? style.p3
                        : fontStyle === 'p4'
                        ? style.p4
                        : style.default
                }
            >
                {children}
            </p>
        )
    }
}

export default Typography
