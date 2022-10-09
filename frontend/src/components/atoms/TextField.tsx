import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react'
import style from './TextField.module.scss'

type P = {
    label: string
    id: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    isError: boolean
    setErrors: Dispatch<
        SetStateAction<{ name: boolean; email: boolean; content: boolean }>
    >
}

const TextField: FC<P> = ({
    label,
    id,
    value,
    onChange,
    isError,
    setErrors,
}) => {
    const mailPattern =
        /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
    const [isActive, setIsActive] = useState(false)
    const onFocus = () => {
        setIsActive(true)
    }
    const onBlur = () => {
        if (id === 'name') {
            if (!value) {
                setIsActive(false)
            } else {
                setErrors((prev) => ({ ...prev, name: false }))
            }
        } else if (id === 'email') {
            if (!value) {
                setIsActive(false)
            }
            if (mailPattern.test(value)) {
                setErrors((prev) => ({ ...prev, email: false }))
            }
        }
    }
    return (
        <div
            className={`${style.textField}
            ${isActive ? style.active : undefined}
            ${isError ? style.error : undefined}
        `}
        >
            <input
                type={id === 'name' ? 'text' : 'email'}
                value={value}
                id={id}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default TextField
