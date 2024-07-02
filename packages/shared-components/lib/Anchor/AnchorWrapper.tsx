import type { HTMLAttributes } from "react";
import type { color, destructive, hierarchy, size } from "./AnchorTypes";

interface AnchorWrapperProps extends HTMLAttributes<HTMLAnchorElement> {
	size: size;
	destructive: destructive;
	color: color;
	hierarchy: hierarchy;
}

type Coloring = {
	[D in `${destructive}`]: {
		[H in hierarchy]: {
			color: string[];
		};
	};
};

export const AnchorWrapper = ({
	children,
	size,
	destructive,
	color,
	hierarchy,
	...props
}: AnchorWrapperProps) => {
	const layer1 =
		" group flex justify-center items-center [&.disabled]:pointer-events-none uui-focus-all:outline-none [&.disabled]:text-uui-fg-disabled [&.disabled]:pointer-events-none ";
	const shadow = " shadow-uui-xs ";

	const wrapperSizes = {
		md: " p-[var(--uui-spacing-2-5)] gap-uui-xs px-[var(--uui-spacing-3-5)] ",
		xl: " py-uui-lg px-[var(--uui-spacing-4-5)] gap-uui-sm p-[var(--uui-spacing-2-5)] ",
		"2xl": " px-[var(--uui-spacing-5-5)] gap-[var(--uui-spacing-2-5)] p-uui-xl",
	};

	const coloring = {
		false: {
			primary: {
				color: [
					"bg-uui-button-primary-bg",
					"text-uui-button-primary-fg",
					"border-uui-button-primary-bg",
					"border",
					"rounded-uui-3xl",
					"border-solid",
					// hover
					"uui-hover-all:bg-uui-button-primary-bg_hover",
					"uui-hover-all:text-uui-button-primary-fg_hover",
					"uui-hover-all:border-uui-button-primary-border_hover",
					// focus
					"uui-focus-all:uui-ring-brand",
					"uui-focus-all:shadow-uui-xs",
					// disabled
					"[&.disabled]:bg-uui-bg-disabled",
					"[&.disabled]:border-uui-border-disabled_subtle",
				],
			},
		},
		// empty for now, will add in correct styles when needed
		true: {
			primary: {
				color: [],
			},
		},
	};

	const destructiveColoring = destructive.toString() as keyof Coloring;

	return (
		<a
			{...props}
			className={` ${props.className} ${layer1} ${shadow} ${
				wrapperSizes[size]
			} ${coloring[destructiveColoring][hierarchy][color].join(" ")}`}
		>
			{children}
		</a>
	);
};

export default AnchorWrapper;
