import { FC, ReactNode } from 'react'
import Modal from '../molecules/Modal'

type P = {
    title: string
    src: string
    children: ReactNode
}

const Work: FC<P> = ({ title, src, children }) => {
    return (
        <>
            <Modal src={src} title={title}>
                {children}
            </Modal>
        </>
    )
}

export default Work
