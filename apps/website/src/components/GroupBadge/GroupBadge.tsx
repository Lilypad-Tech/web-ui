import { ButtonHTMLAttributes } from "react";
import {
	GroupBadgeColor,
	GroupBadgeBadge,
	GroupBadgeIcon,
	GroupBadgeMessage,
	GroupBadgeText,
	GroupBadgeTheme,
	GroupBadgeSizes,
} from "./types";
import GroupBadgeWrapper from "./GroupBadgeWrapper";

interface GroupBadgeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size: GroupBadgeSizes;
	color: GroupBadgeColor;
	theme: GroupBadgeTheme;
	badge: GroupBadgeBadge;
	icon?: GroupBadgeIcon;
	text: GroupBadgeText;
	message: GroupBadgeMessage;
}

const GroupBadge = ({
	size,
	color,
	theme,
	badge,
	icon = undefined,
	text,
	message,
	...props
}: GroupBadgeProps) => {
	return (
		<GroupBadgeWrapper size={size} theme={theme} color={color} {...props}>
			Badge Content
		</GroupBadgeWrapper>
	);
};

export default GroupBadge;
