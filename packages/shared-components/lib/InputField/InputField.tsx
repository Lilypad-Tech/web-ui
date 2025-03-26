import InputWrapper from './InputWrapper'
import InputAtom from './InputAtom'
import InputIconAtom from './InputIconAtom'
import type { InputFieldProps } from './InputFieldTypes'
import InputHintAtom from './InputHintAtom'

const InputField = ({
    value,
    onChange,
    inputSize,
    destructive = false,
    iconUrl,
    children,
    ...props
}: InputFieldProps) => {
    return (
        <div className="w-full">
            <InputWrapper inputSize={inputSize} destructive={destructive}>
                {{
                    leadingInner: iconUrl ? (
                        <InputIconAtom iconUrl={iconUrl} />
                    ) : undefined,
                    input: (
                        <InputAtom
                            {...props}
                            value={value}
                            onChange={onChange}
                        />
                    ),
                }}
            </InputWrapper>
            {children?.hint && (
                <InputHintAtom destructive={destructive}>
                    {children?.hint}
                </InputHintAtom>
            )}
        </div>
    )
}

export default InputField
