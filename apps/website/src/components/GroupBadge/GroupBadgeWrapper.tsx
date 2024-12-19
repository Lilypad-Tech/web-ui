import { ButtonHTMLAttributes, MouseEventHandler } from "react";
import { GroupBadgeColor, GroupBadgeSizes, GroupBadgeTheme } from "./types";

interface GroupBadgeWrapperProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	size: GroupBadgeSizes;
	theme: GroupBadgeTheme;
	color: GroupBadgeColor;
}

const GroupBadgeWrapper = ({
	size,
	theme,
	children,
	color,
	...props
}: GroupBadgeWrapperProps) => {
	const groupBadgeWrapperStyles = (
		onClick: MouseEventHandler<HTMLButtonElement> | undefined
	) => ({
		modern: {
			brand: {
				outerBadgeStyle: {
					default: `bg-uui-bg-primary text-uui-text-secondary-700 ring-uui-border-primary ${
						onClick ? "uui-hover-all:bg-uui-bg-secondary" : ""
					} ring-[0.063rem] rounded-uui-lg`,
				},
			},
			gray: {
				outerBadgeStyle: {
					default: `bg-uui-bg-primary text-uui-text-secondary-700 ring-uui-border-primary ${
						onClick ? "uui-hover-all:bg-uui-bg-secondary" : ""
					} ring-[0.063rem] rounded-uui-lg`,
				},
			},
			success: {
				outerBadgeStyle: {
					default: `bg-uui-bg-primary text-uui-text-secondary-700 ring-uui-border-primary ${
						onClick ? "uui-hover-all:bg-uui-bg-secondary" : ""
					} ring-[0.063rem] rounded-uui-lg`,
				},
			},
			error: {
				outerBadgeStyle: {
					default: `bg-uui-bg-primary text-uui-text-secondary-700 ring-uui-border-primary ${
						onClick ? "uui-hover-all:bg-uui-bg-secondary" : ""
					} ring-[0.063rem] rounded-uui-lg`,
				},
			},
			warning: {
				outerBadgeStyle: {
					default: `bg-uui-bg-primary text-uui-text-secondary-700 ring-uui-border-primary ${
						onClick ? "uui-hover-all:bg-uui-bg-secondary" : ""
					} ring-[0.063rem] rounded-uui-lg`,
				},
			},
		},
	});

	const sizes = {
		md: "py-uui-xs gap-uui-xs px-uui-lg ",
		lg: "px-[var(--uui-spacing-3-5)] py-uui-xs gap-uui-xs ",
	};

	const layer1 =
		"w-fit group [&>*]:pointer-events-none flex items-center justify-center";

	const styles = groupBadgeWrapperStyles(props.onClick);
	return (
		<button
			{...props}
			onClick={props.onClick}
			className={` ${props.className} ${Object.values(
				styles[theme][color].outerBadgeStyle
			)
				.flatMap((s) => s)
				.join(" ")} ${
				props.onClick
					? "pointer-events-auto"
					: "pointer-events-auto cursor-default"
			} ${sizes[size]}  ${layer1} ${groupBadgeWrapperStyles(
				props.onClick
			)} ${styles} `}
		>
			{children}
		</button>
	);
};

export default GroupBadgeWrapper;
