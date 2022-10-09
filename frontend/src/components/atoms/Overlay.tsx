import { FC, ReactNode } from 'react'
import Button from './Button'
import style from './Overlay.module.scss'
import { VscChromeClose } from 'react-icons/vsc'

type P = {
    children: ReactNode
    modalClose: () => void
    isOpen: boolean
}

const Overlay: FC<P> = ({ children, modalClose, isOpen }) => {
    return (
        <>
            <div
                className={`${style.overlay} ${
                    isOpen ? style.open : undefined
                }`}
                onClick={modalClose}
            ></div>

            <div
                className={`${style.child} ${isOpen ? style.open : undefined}`}
            >
                <div className={style.closeButton}>
                    <Button onClick={modalClose} type="button">
                        <VscChromeClose />
                    </Button>
                </div>
                {children}
            </div>
        </>
    )
}

export default Overlay
