import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react'
import style from './TextArea.module.scss'

type P = {
    label: string
    id: string
    value: string
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    isError: boolean
    setErrors: Dispatch<
        SetStateAction<{ name: boolean; email: boolean; content: boolean }>
    >
}

const TextArea: FC<P> = ({
    label,
    id,
    value,
    onChange,
    isError,
    setErrors,
}) => {
    const [isActive, setIsActive] = useState(false)

    const onFocus = () => {
        setIsActive(true)
    }
    const onBlur = () => {
        if (!value) {
            setIsActive(false)
        } else {
            setErrors((prev) => ({ ...prev, content: false }))
        }
    }

    return (
        <div
            className={`${style.textArea}
            ${isActive ? style.active : undefined}
            ${isError ? style.error : undefined}
            `}
        >
            <textarea
                id={id}
                cols={41}
                rows={11}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default TextArea
