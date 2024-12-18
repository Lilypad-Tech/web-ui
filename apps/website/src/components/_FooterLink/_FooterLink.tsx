import { AnchorHTMLAttributes, useEffect } from "react";

interface FooterLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const _FooterLink = ({ title, children, ...props }: FooterLinkProps) => {
	useEffect(() => {
		const hash = window.location.hash.substring(1);
		if (hash) {
		  const section = document.getElementById(hash);
		  if (section) {
			const offset = 100; 
			const elementPosition = section.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.scrollY - offset;
	  
			window.scrollTo({
			  top: offsetPosition,
			  behavior: "smooth",
			});
		  }
		}
	}, []);
	return (
		<li className="">
			<a
				className="uui-text-md w-fit h-fit font-semibold hover:text-uui-button-tertiary-fg_hover text-uui-button-tertiary-fg antialiased"
				href={props.href  || ""}
			>
				{" "}
				{title}
			</a>
		</li>
	);
};

export default _FooterLink;