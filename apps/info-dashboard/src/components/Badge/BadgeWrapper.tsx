import { BadgeStyleLayers } from "./BadgeTypes";
import type { BadgeColor, BadgeSize, BadgeType } from "./BadgeTypes";

interface BadgeWrapperProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: BadgeColor;
  badgeType: BadgeType;
  children: React.ReactNode;
  size: BadgeSize;
}

const BadgeWrapper = ({
  color,
  badgeType,
  size,
  children,
  ...props
}: BadgeWrapperProps) => {
  const layer1 =
    "group flex justify-center items-center focus-visible:outline-none focus:outline-none";

  const backgroundLayer: BadgeStyleLayers = {
    "Pill outline": {
      gray: "text-uui-utility-gray-600 ring-uui-utility-gray-700 ring-[0.09375rem] rounded-full",
      brand:
        "text-uui-utility-brand-600 ring-uui-utility-brand-700 ring-[0.09375rem] rounded-full",
      warning:
        "text-uui-utility-warning-600 ring-uui-utility-warning-700 ring-[0.09375rem] rounded-full",
      pink: "text-uui-utility-pink-600 ring-uui-utility-pink-700 ring-[0.09375rem] rounded-full",
    },
  };

  const sizes = {
    sm: "px-uui-md py-uui-xxs gap-uui-sm ",
  };

  const onClickClasses = "pointer-events-auto";
  const noOnClickClasses = "pointer-events-auto cursor-default";

  const classes = `${layer1} ${sizes[size]} ${
    backgroundLayer[badgeType][color]
  } ${props.onClick ? onClickClasses : noOnClickClasses}`;

  return (
    <button {...props} className={classes + " " + props.className}>
      {children}
    </button>
  );
};

export default BadgeWrapper;
