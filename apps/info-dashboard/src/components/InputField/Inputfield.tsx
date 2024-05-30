import React from "react";
import InputWrapper from "./InputWrapper";
import InputAtom from "./InputAtom";

interface InputFieldProps extends React.HTMLProps<HTMLInputElement> {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputSize?: "sm";
  destructive?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  size = "sm",
  destructive = false,
  ...props
}) => {

    
  return (
    <InputWrapper destructive={destructive}>
      {{
        leadingInner: "a",
        input: <InputAtom {...props} value={value} onChange={onChange} />,
      }}
    </InputWrapper>
  );
};

export default InputField;
