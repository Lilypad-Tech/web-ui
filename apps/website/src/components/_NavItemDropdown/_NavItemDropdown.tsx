import { HTMLAttributes, HtmlHTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import _NavMenuItem from "../_NavMenuItem/_NavMenuItem";
import IconAtom from "../IconAtom/IconAtom";
import { arrowsChevronDown } from "@frontline-hq/untitledui-icons";

interface _NavItemDropdownProps
	extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
	children?: _NavItemDropdownChildren;
	current?: boolean;
}

interface _NavItemDropdownChildren {
	title?: React.ReactNode;
	dropdownList?: React.ReactNode;
}

export default function _NavItemDropdown({
	children,
	current,
	onClick,
}: _NavItemDropdownProps) {
	return (
		<div
			tabIndex={0}
			className={twMerge(
				"flex items-center relative rounded-uui-sm px-uui-lg py-uui-md gap-uui-md group peer cursor-default  ",
				{
					notCurrent:
						"bg-uui-bg-primary hover:bg-uui-bg-primary_hover",
					current: "bg-uui-bg-active hover:bg-uui-bg-secondary_hover",
				}[current ? "current" : "notCurrent"]
			)}
		>
			<div className="bg-transparent h-[2rem] w-full translate-y-full peer peer-focus:scale-100 peer-focus:opacity-100 focus-within:opacity-100 focus-within:scale-100 group-hover:scale-100 hover:scale-100 group-focus:scale-100 scale-0 top-0 right-0  absolute "></div>

			<span
				className={twMerge(
					"uui-text-md font-semibold hover:text-uui-text-secondary_hover",
					{
						notCurrent:
							"text-uui-text-secondary-700 hover:text-uui-text-secondary_hover",
						current: "text-uui-text-secondary_hover",
					}[current ? "current" : "notCurrent"]
				)}
			>
				{children?.title}
			</span>
			<IconAtom
				className="[&&]:w-[1.25rem] [&&]:h-[1.25rem] bg-uui-fg-quarterary-500"
				iconUrl={arrowsChevronDown}
			></IconAtom>

			<ul
				aria-hidden
				className="overflow-auto min-w-[20rem] max-w-[20rem] translate-x-1/2  gap-uui-xs translate-y-[1rem] rounded-uui-xl  bg-uui-bg-primary p-uui-lg z-10 border-uui-1 peer duration-100 border-uui-border-secondary bg-transparent peer-focus:scale-100 peer-focus:opacity-100 transform transition-all focus-within:opacity-100 focus-within:scale-100 group-hover:scale-100 hover:scale-100 group-focus:scale-100 scale-0 top-full right-1/2 absolute  "
			>
				{children?.dropdownList}
			</ul>
		</div>
	);
}
