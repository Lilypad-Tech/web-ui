import type { ButtonHTMLAttributes } from "react";
import type {
	ButtonColor,
	ButtonDestructive,
	ButtonHierarchy,
	ButtonSize,
} from "./ButtonTypes";
import ButtonWrapper from "./ButtonWrapper";
import ButtonTextAtom from "./ButtonTextAtom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size: ButtonSize;
	destructive: ButtonDestructive;
	color: ButtonColor;
	hierarchy: ButtonHierarchy;
}
const Button = ({
	size,
	destructive,
	color,
	hierarchy,
	...props
}: ButtonProps) => {
	return (
		<ButtonWrapper
			size={size}
			destructive={destructive}
			color={color}
			hierarchy={hierarchy}
			{...props}
			className={`${props.className}`}
		>
			<ButtonTextAtom size={size}>{props.children}</ButtonTextAtom>
		</ButtonWrapper>
	);
};

export default Button;
