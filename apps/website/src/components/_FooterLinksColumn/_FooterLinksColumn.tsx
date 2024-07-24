import { HTMLAttributes, LiHTMLAttributes } from "react";

interface _FooterLinksColumnProps extends HTMLAttributes<HTMLUListElement> {}

const _FooterLinksColumn = ({
	children,
	...props
}: _FooterLinksColumnProps) => {
	return (
		<nav {...props}>
			<ul className="flex flex-col space-y-uui-lg ">{children} </ul>{" "}
		</nav>
	);
};

export default _FooterLinksColumn;
