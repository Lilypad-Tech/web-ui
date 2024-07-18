import type {
	Coloring,
	CustomCSSProperties,
	size,
	color,
	destructive,
	hierarchy,
	icon,
} from "@lilypad/shared-components";

import type { HTMLAttributes } from "react";

interface AnchorIconAtomProps extends HTMLAttributes<HTMLSpanElement> {
	size: size;
	color: color;
	destructive: destructive;
	hierarchy: hierarchy;
	icon?: icon;
}

const AnchorIconAtom = ({
	size,
	color,
	destructive,
	hierarchy,
	icon,
	...props
}: AnchorIconAtomProps) => {
	const spanStyle: CustomCSSProperties = {
		"--icon-url": `url(${icon?.leading ?? icon?.trailing})`,
	};

	const coloring: Coloring = {
		false: {
			primary: {
				gray: [""],
				color: [
					"bg-uui-button-primary-fg",
					"group-hover:text-uui-button-primary-fg_hover",
				],
			},
			secondary: {
				gray: [
					"bg-uui-button-secondary-fg",
					"group-hover:bg-uui-button-secondary-fg",
				],
				color: [
					"bg-uui-button-secondary-color-fg",
					"hover:bg-uui-button-secondary-color-fg_hover",
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

	const layer1 =
		"pointer-events-none [mask-position:center] [mask-size:contain] [mask-repeat:no-repeat] [mask-image:var(--icon-url)] group-[.disabled]:bg-uui-fg-disabled";

	const iconSize =
		size === "2xl" ? "h-[1.5rem] w-[1.5rem]" : "h-[1.25rem] w-[1.25rem]";

	const destructiveColoring = destructive.toString() as keyof Coloring;

	return (
		<div
			style={spanStyle}
			className={`${props.className} ${iconSize} ${layer1} ${coloring[
				destructiveColoring
			][hierarchy][color].join(" ")}  `}
		/>
	);
};

export default AnchorIconAtom;
