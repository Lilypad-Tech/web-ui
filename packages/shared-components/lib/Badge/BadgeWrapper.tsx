import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { BadgeColor, BadgeSize, BadgeType } from "./BadgeTypes";

interface BadgeWrapperProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  color: BadgeColor;
  badgeType: BadgeType;
  children: BadgeWrapperChildrenProps;
  size: BadgeSize;
}

interface BadgeWrapperChildrenProps {
  iconLeading?: ReactNode;
  iconTrailing?: ReactNode;
  default?: ReactNode;
}

const BadgeWrapper = ({
  color,
  badgeType,
  size,
  children,
  ...props
}: BadgeWrapperProps) => {
  const layer1 =
    "group w-fit flex justify-center items-center focus-visible:outline-none focus:outline-none whitespace-nowrap";

  const backgroundLayer = {
    "Pill outline": {
      gray: "text-uui-utility-gray-600 ring-uui-utility-gray-700 ring-[0.09375rem] rounded-full",
      brand:
        "text-uui-utility-brand-600 ring-uui-utility-brand-700 ring-[0.09375rem] rounded-full",
      error:
        "text-uui-utility-error-600 ring-uui-utility-error-700 ring-[0.09375rem] rounded-full",
      warning:
        "text-uui-utility-warning-600 ring-uui-utility-warning-700 ring-[0.09375rem] rounded-full",
      success:
        "text-uui-utility-success-600 ring-uui-utility-success-700 ring-[0.09375rem] rounded-full",
      pink: "text-uui-utility-pink-600 ring-uui-utility-pink-700 ring-[0.09375rem] rounded-full",
    },
    "Pill color": {
      gray: "bg-uui-utility-gray-50 text-uui-utility-gray-700 ring-uui-utility-gray-200 ring-[0.063rem] rounded-full",
      brand:
        "bg-uui-utility-brand-50 text-uui-utility-brand-700 ring-uui-utility-brand-200 ring-[0.063rem] rounded-full",
      error:
        "bg-uui-utility-error-50 text-uui-utility-error-700 ring-uui-utility-error-200 ring-[0.063rem] rounded-full",
      warning:
        "bg-uui-utility-warning-50 text-uui-utility-warning-700 ring-uui-utility-warning-200 ring-[0.063rem] rounded-full",
      success:
        "bg-uui-utility-success-50 text-uui-utility-success-700 ring-uui-utility-success-200 ring-[0.063rem] rounded-full",
      "gray-blue":
        "bg-uui-utility-gray-blue-50 text-uui-utility-gray-blue-600 ring-uui-utility-gray-blue-200 ring-[0.063rem] rounded-full",
      "blue-light":
        "bg-uui-utility-blue-light-50 text-uui-utility-blue-light-600 ring-uui-utility-blue-light-200 ring-[0.063rem] rounded-full",

      pink: "bg-uui-utility-pink-50 text-uui-utility-pink-700 ring-uui-utility-pink-200 ring-[0.063rem] rounded-full",
    },
    "Badge modern": {
      gray: "bg-uui-utility-white text-uui-utility-gray-700 ring-uui-border-primary ring-[0.063rem] rounded-lg shadow-uui-utility-xs",
      brand:
        " bg-uui-utility-white text-uui-utility-gray-700 ring-uui-border-primary ring-[0.063rem] rounded-lg shadow-uui-utility-xs",
      error:
        "bg-uui-utility-white text-uui-utility-gray-700 ring-uui-border-primary ring-[0.063rem] rounded-lg shadow-uui-utility-xs",
      warning:
        "bg-uui-utility-white text-uui-utility-gray-700 ring-uui-border-primary ring-[0.063rem] rounded-lg shadow-uui-utility-xs",
      success:
        "bg-uui-utility-white text-uui-utility-gray-700 ring-uui-border-primary ring-[0.063rem] rounded-lg shadow-uui-utility-xs",
      pink: "bg-uui-utility-white text-uui-utility-gray-700 ring-uui-border-primary ring-[0.063rem] rounded-lg shadow-uui-utility-xs",
    },
  };

  const sizes = {
    sm: "px-uui-md py-uui-xxs gap-uui-sm ",
    md: "px-[var(--uui-spacing-2-5)] py-uui-xxs gap-uui-md",
  };

  const onClickClasses = "pointer-events-auto cursor-pointer ";
  const noOnClickClasses = "pointer-events-none cursor-default";

  const classes = `${layer1} ${sizes[size]} ${
    backgroundLayer[badgeType][color]
  } ${props.onClick ? onClickClasses : noOnClickClasses}`;

  return props.onClick ? (
    <button {...props} className={classes + " " + props.className}>
      {children.iconLeading}
      {children.default}
      {children.iconTrailing}
    </button>
  ) : (
    <div className={classes + "  " + props.className}>
      {children.iconLeading}
      {children.default}
      {children.iconTrailing}
    </div>
  );
};

export default BadgeWrapper;
