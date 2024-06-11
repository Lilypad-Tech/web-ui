export type BadgeColor =
  | "gray"
  | "brand"
  | "warning"
  | "pink"
  | "error"
  | "success";

export type BadgeType = "Pill outline" | "Pill color";

export type BadgeSize = "sm" | "md";

export type BadgeIcon = {
  type: "icon";
  leading?: string;
} & React.HTMLAttributes<HTMLSpanElement>;
