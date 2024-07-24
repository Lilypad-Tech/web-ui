import { AnchorHTMLAttributes } from "react";

interface FooterLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const _FooterLink = ({ title, children, ...props }: FooterLinkProps) => {
	return (
		<li className="">
			<a
				className="uui-text-md w-fit h-fit font-semibold hover:text-uui-button-tertiary-fg_hover text-uui-button-tertiary-fg antialiased"
				href={props.href}
			>
				{" "}
				{title}
			</a>
		</li>
	);
};

export default _FooterLink;
