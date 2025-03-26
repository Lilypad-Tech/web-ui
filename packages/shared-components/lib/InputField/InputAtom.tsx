import type { ChangeEvent, HTMLProps } from 'react'

interface InputAtomProps extends Omit<HTMLProps<HTMLInputElement>, 'children'> {
    value?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputAtom = ({ value, onChange, ...props }: InputAtomProps) => {
    const { className = '', ...rest } = props

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event)
    }

    return (
        <input
            {...rest}
            disabled={rest.disabled ?? false}
            value={value}
            onChange={handleChange}
            className={`${className} placeholder:text-uui-text-md placeholder:font-regular placeholder:text-uui-text-placeholder uui-text-md w-full appearance-none bg-transparent antialiased outline-none`}
        />
    )
}
export default InputAtom
