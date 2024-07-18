import type { HTMLAttributes } from "react";
import type {
	Coloring,
	color,
	destructive,
	hierarchy,
	icon,
	size,
} from "./AnchorTypes";
import AnchorIconAtom from "./AnchorIconAtom";
import { generalActivity } from "@frontline-hq/untitledui-icons";

interface AnchorWrapperProps extends HTMLAttributes<HTMLAnchorElement> {
	size: size;
	destructive: destructive;
	color: color;
	hierarchy: hierarchy;
	icon?: icon;
}

export const AnchorWrapper = ({
	children,
	size,
	destructive,
	color,
	hierarchy,
	icon,
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

	const coloring: Coloring = {
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
				gray: [""],
			},
			secondary: {
				gray: [
					"bg-uui-button-secondary-bg",
					"text-uui-button-secondary-fg",
					"border-uui-button-secondary-border",
					"border",
					"rounded-uui-3xl",
					"border-solid",
					// hover
					"uui-hover-all:bg-uui-button-secondary-bg_hover",
					"uui-hover-all:text-uui-button-secondary-fg_hover",
					"uui-hover-all:border-uui-button-secondary-border_hover",
					// focus
					"uui-focus-all:uui-ring-gray",
					"uui-focus-all:shadow-uui-xs",
					// disabled
					"[&.disabled]:border-uui-border-disabled_subtle",
				],
				color: [
					"bg-uui-button-secondary-color-bg",
					"text-uui-button-secondary-color-fg",
					"border-uui-button-secondary-color-border",
					"border",
					"rounded-uui-3xl",
					"border-solid",
					// hover
					"uui-hover-all:bg-uui-button-secondary-color-bg_hover",
					"uui-hover-all:text-uui-button-secondary-color-fg_hover",
					"uui-hover-all:border-uui-button-secondary-color-border_hover",
					// focus
					"uui-focus-all:uui-ring-brand",
					"uui-focus-all:shadow-uui-xs",
					// disabled
					"[&.disabled]:border-uui-border-disabled_subtle",
				],
			},
		},
		true: {
			primary: {
				color: [""],
				gray: [""],
			},
			secondary: {
				color: [""],
				gray: [""],
			},
		},
	};

	const destructiveColoring = destructive.toString() as keyof Coloring;

	return (
		<a
			{...props}
			className={` ${props.className} ${layer1} ${shadow} ${
				wrapperSizes[size]
			} ${wrapperSizes[size]} ${coloring[destructiveColoring][hierarchy][
				color
			].join(" ")}`}
		>
			{icon?.type === "icon" && icon.leading && (
				<AnchorIconAtom
					size={size}
					destructive={destructive}
					color={color}
					hierarchy={hierarchy}
					icon={icon}
				></AnchorIconAtom>
			)}

			<span>{children}</span>
			{icon?.type === "icon" && icon.trailing && (
				<AnchorIconAtom
					size={size}
					destructive={destructive}
					color={color}
					hierarchy={hierarchy}
					icon={icon}
				></AnchorIconAtom>
			)}
		</a>
	);
};

export default AnchorWrapper;
