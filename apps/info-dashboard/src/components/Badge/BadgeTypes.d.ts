export type BadgeStyleLayers = {
  "Pill outline": {
    gray: string;
    brand: string;
    warning: string;
    pink: string;
  };
};

export type BadgeColor = "gray" | "brand" | "warning" | "pink";

export type BadgeType = "Pill outline";

export type BadgeSize = "sm";

export type BadgeIcon = {
  type: "icon";
  leading?: string;
} & React.HTMLAttributes<HTMLSpanElement>;
