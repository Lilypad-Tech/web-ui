import { AnchorHTMLAttributes } from "react";
import Image from "next/image";
import IconAtom from "../IconAtom/IconAtom";
import { arrowsArrowUpRight } from "@frontline-hq/untitledui-icons";

interface BlogPostCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	title: string;
	subtitle: string;
	imageSrc: string;
}

const BlogPostCard = ({
	title,
	subtitle,
	imageSrc,
	children,
	...props
}: BlogPostCardProps) => {
	return (
		<a
			{...props}
			href={props.href}
			className="group w-full rounded-uui-2xl border-uui-1 border-uui-border-secondary bg-uui-bg-primary"
		>
			<div className="relative w-full h-[12.5rem] lg:h-[15rem] rounded-uui-2xl overflow-hidden">
				<Image
					className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110 rounded-uui-2xl"
					alt="dummy"
					src={imageSrc}
					fill
				/>
			</div>
			<div className="flex flex-col space-y-uui-lg md:space-y-uui-md p-uui-3xl ">
				{/* title */}
				<div className="flex justify-between w-full items-start">
					{title && (
						<h3 className="font-semibold uui-text-xl md:uui-display-xs text-uui-text-primary-900 antialiased flex-grow">
							{title}
						</h3>
					)}
					<IconAtom
						className="flex-shrink-0 duration-100 transition-transform group-hover:-translate-y-1/4 group-hover:translate-x-1/4"
						iconUrl={arrowsArrowUpRight}
					></IconAtom>
				</div>
				{/* subtitle */}
				{subtitle && (
					<span className="antialiased text-uui-text-tertiary-600 font-regular uui-text-md">
						{subtitle}
					</span>
				)}
			</div>
			{children}
		</a>
	);
};

export default BlogPostCard;
