import { CustomCSSProperties } from "@lilypad/shared-components";
import { HTMLAttributes } from "react";

interface IconAtomProps extends HTMLAttributes<HTMLSpanElement> {
	iconUrl: string;
}

const IconAtom = ({ iconUrl, ...props }: IconAtomProps) => {
	const spanStyle: CustomCSSProperties = {
		"--icon-url": `url(${iconUrl})`,
	};
	return (
		<div
			style={spanStyle}
			className={`${props.className} [mask-position:center] [mask-size:contain] [mask-repeat:no-repeat] [mask-image:var(--icon-url)] w-[1.5rem] h-[1.5rem] bg-uui-featured-icon-light-fg-gray `}
		/>
	);
};

export default IconAtom;
