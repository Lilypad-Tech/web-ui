import { HTMLAttributes } from "react";

export type GroupBadgeSizes = "lg";

export type GroupBadgeColor =
	| "brand"
	| "gray"
	| "error"
	| "warning"
	| "success";

export type GroupBadgeTheme = "modern";

export type GroupBadgeBadge = "leading" | "trailing";

export type GroupBadgeIcon = {
	url?: string;
	ringStyle?: string;
} & HTMLAttributes<HTMLSpanElement>;

export type GroupBadgeText = string;

export type GroupBadgeMessage = string;
