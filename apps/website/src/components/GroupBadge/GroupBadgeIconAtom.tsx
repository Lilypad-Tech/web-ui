import { CustomCSSProperties } from "@lilypad/shared-components";
import { HTMLAttributes, MouseEventHandler } from "react";
import { GroupBadgeSizes, GroupBadgeTheme, GroupBadgeColor } from "./types";

interface GroupBadgeIconAtomProps extends HTMLAttributes<HTMLSpanElement> {
  iconUrl: string;
  size: GroupBadgeSizes;
  theme: GroupBadgeTheme;
  color: GroupBadgeColor;
}

const GroupBadgeIconAtom = ({
  iconUrl,
  size,
  theme,
  color,
  ...props
}: GroupBadgeIconAtomProps) => {
  const spanStyle: CustomCSSProperties = {
    "--icon-url": `url(${iconUrl})`,
  };

  const groupBadgeIconStyles = (
    onClick: MouseEventHandler<HTMLButtonElement> | undefined
  ) => ({
    modern: {
      brand: {
        iconStyle:
          "bg-uui-utility-brand-500 ring-uui-utility-brand-100 last:bg-uui-utility-brand-500",
      },
      gray: {
        iconStyle:
          "bg-uui-utility-gray-500 ring-uui-utility-gray-100 last:bg-uui-utility-gray-500",
      },
      success: {
        iconStyle:
          "bg-uui-utility-success-500 ring-uui-utility-success-100 last:bg-uui-utility-success-500",
      },
      error: {
        iconStyle:
          "bg-uui-utility-error-500 ring-uui-utility-error-100 last:bg-uui-utility-error-500",
      },
      warning: {
        iconStyle:
          "bg-uui-utility-warning-500 ring-uui-utility-warning-100 last:bg-uui-utility-warning-500",
      },
    },
  });

  const styles = groupBadgeIconStyles(props.onClick);

  const layer1 =
    "[mask-position:center] [mask-size:contain] [mask-repeat:no-repeat] [mask-image:var(--icon-url)] h-[0.75rem] w-[0.75rem]";

  const iconSizes = {
    md: "-mr-uui-xxs",
    lg: "-mr-uui-xs",
  };

  return (
    <span
      style={spanStyle}
      className={`${props.className}  ${layer1} ${styles[theme][color].iconStyle} ${iconSizes[size]}`}
    />
  );
};

export default GroupBadgeIconAtom;
