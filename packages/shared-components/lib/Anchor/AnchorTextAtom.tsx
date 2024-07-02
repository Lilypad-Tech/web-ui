import type { HTMLAttributes } from "react";
import type { size } from "./AnchorTypes";

interface AnchorTextAtomProps extends HTMLAttributes<HTMLSpanElement> {
	size: size;
}

const AnchorTextAtom = ({ size, children, ...props }: AnchorTextAtomProps) => {
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

export default AnchorTextAtom;
