import { CustomCSSProperties } from "@/types";
import { BadgeColor, BadgeSize, BadgeType } from "./BadgeTypes";

interface BadgeIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  iconUrl: string;
  color: BadgeColor;
  badgeType: BadgeType;
  size: BadgeSize;
}

export let src: string;

const BadgeIconAtom = ({
  iconUrl,
  color,
  badgeType,
  size,
  ...props
}: BadgeIconProps) => {
  const spanStyle: CustomCSSProperties = {
    "--icon-url": `url(${iconUrl})`,
  };

  const layer1 =
    "[mask-position:center] [mask-size:contain] [mask-repeat:no-repeat] [mask-image:var(--icon-url)] h-uui-lg w-uui-lg";

  const iconStyle = {
    "Pill outline": {
      gray: "bg-uui-utility-gray-600",
      brand: "bg-uui-utility-brand-600",
      error: "bg-uui-utility-error-600",
      warning: "bg-uui-utility-warning-600",
      success: "bg-uui-utility-success-600",
      pink: "bg-uui-utility-pink-600",
    },
    "Pill color": {
      gray: "bg-uui-utility-gray-500",
      brand: "bg-uui-utility-brand-500",
      error: "bg-uui-utility-error-500",
      warning: "bg-uui-utility-warning-500",
      success: "bg-uui-utility-success-500",
      pink: "bg-uui-utility-pink-500",
    },
  };

  const sizes = {
    sm: "-mx-uui-xxs only:-mx-uui-xs only:py-uui-md",
    md: "-mx-uui-xxs first-of-type:-mr-uui-xs first-of-type:-ml-uui-xxs last-of-type:-mx-uui-xs only:-mx-uui-xs only:py-[var(--uui-spacing-2-5)]",
  };

  const classes = `${layer1} ${sizes[size]} ${iconStyle[badgeType][color]}`;

  return (
    <span
      {...props}
      style={spanStyle}
      className={`${classes + " " + props.className}  `}
    />
  );
};
export default BadgeIconAtom;
