import type { HTMLAttributes } from "react";
import type { ButtonSize } from "./ButtonTypes";

interface ButtonTextAtomProps extends HTMLAttributes<HTMLSpanElement> {
	size: ButtonSize;
}

const ButtonTextAtom = ({ size, children, ...props }: ButtonTextAtomProps) => {
	const textSizes = {
		md: " uui-text-sm ",
		xl: " uui-text-md ",
		"2xl": " uui-text-lg ",
	};

	const layer1 =
		" pointer-events-none font-semibold whitespace-nowrap px-uui-xxs ";

	return (
		<span
			{...props}
			className={`${props.className} ${textSizes[size]}  ${layer1}`}
		>
			{children}
		</span>
	);
};

export default ButtonTextAtom;
