export type BadgeColor =
  | "gray"
  | "brand"
  | "warning"
  | "pink"
  | "error"
  | "success";

export type BadgeType = "Pill outline" | "Pill color" | "Badge modern";

export type BadgeSize = "sm" | "md";

export type BadgeIcon = {
  type: "icon" | "dot";
  leading?: string;
} & React.HTMLAttributes<HTMLSpanElement>;
