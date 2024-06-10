import { CustomCSSProperties } from "@/types";
import {
  BadgeColor,
  BadgeSize,
  BadgeStyleLayers,
  BadgeType,
} from "./BadgeTypes";

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

  const iconStyle: BadgeStyleLayers = {
    "Pill outline": {
      gray: "bg-uui-utility-gray-600",
      brand: "bg-uui-utility-brand-600",
      warning: "bg-uui-utility-warning-600",
      pink: "bg-uui-utility-pink-600",
    },
  };

  const sizes = {
    sm: "-mx-uui-xxs only:-mx-uui-xs only:py-uui-md",
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
