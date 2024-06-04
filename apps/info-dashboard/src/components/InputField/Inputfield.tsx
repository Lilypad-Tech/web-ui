import React, { useContext } from "react";
import InputWrapper from "./InputWrapper";
import InputAtom from "./InputAtom";
import InputIconAtom from "./InputIconAtom";
import { SearchParamsContext } from "../SearchParamsContext/SearchParamsContext";

export interface InputFieldProps extends React.HTMLProps<HTMLInputElement> {
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	inputSize?: "sm";
	destructive?: boolean;
	iconUrl?: string;
}

const InputField: React.FC<InputFieldProps> = ({
	value,
	onChange,
	size = "sm",
	destructive = false,
	iconUrl,
	...props
}) => {
	return (
		<InputWrapper destructive={destructive}>
			{{
				leadingInner: iconUrl ? (
					<InputIconAtom iconUrl={iconUrl} />
				) : undefined,
				input: (
					<InputAtom {...props} value={value} onChange={onChange} />
				),
			}}
		</InputWrapper>
	);
};

export default InputField;
