import type { AnchorHTMLAttributes } from "react";
import type { color, destructive, hierarchy, icon, size } from "./AnchorTypes";
import AnchorWrapper from "./AnchorWrapper";
import AnchorTextAtom from "./AnchorTextAtom";

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	size: size;
	destructive: destructive;
	color: color;
	hierarchy: hierarchy;
	icon?: icon;
}
const Anchor = ({
	size,
	destructive,
	color,
	hierarchy,
	icon,
	...props
}: AnchorProps) => {
	return (
		<AnchorWrapper
			size={size}
			destructive={destructive}
			color={color}
			hierarchy={hierarchy}
			icon={icon}
			{...props}
			className={`${props.className}`}
		>
			<AnchorTextAtom size={size}>{props.children}</AnchorTextAtom>
		</AnchorWrapper>
	);
};

export default Anchor;
