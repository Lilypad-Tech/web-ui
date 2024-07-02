import type { AnchorHTMLAttributes, HTMLAttributes } from "react";
import type { color, destructive, hierarchy, size } from "./AnchorTypes";
import AnchorWrapper from "./AnchorWrapper";
import AnchorTextAtom from "./AnchorTextAtom";

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	size: size;
	destructive: destructive;
	color: color;
	hierarchy: hierarchy;
}
const Anchor = ({
	size,
	destructive,
	color,
	hierarchy,
	...props
}: AnchorProps) => {
	return (
		<AnchorWrapper
			size={size}
			destructive={destructive}
			color={color}
			hierarchy={hierarchy}
			{...props}
			className={`${props.className}`}
		>
			<AnchorTextAtom size={size}>{props.children}</AnchorTextAtom>
		</AnchorWrapper>
	);
};

export default Anchor;
