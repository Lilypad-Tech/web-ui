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
import { Badge } from "@lilypad/shared-components";
import { arrowsArrowRight } from "@frontline-hq/untitledui-icons";
import GroupBadgeIconAtom from "./GroupBadgeIconAtom";
import GroupBadgeTextAtom from "./GroupBadgeTextAtom";

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
  const innerBadgeStyles = {
    modern: {
      brand: {
        innerBadgeStyle:
          "[&&]:text-uui-text-secondary-700 [&&]:bg-uui-bg-primary",
      },
      gray: {
        innerBadgeStyle:
          "[&&]:text-uui-text-secondary-700 [&&]:bg-uui-bg-primary",
      },
      success: {
        innerBadgeStyle:
          "[&&]:text-uui-text-secondary-700 [&&]:bg-uui-bg-primary",
      },
      error: {
        innerBadgeStyle:
          "[&&]:text-uui-text-secondary-700 [&&]:bg-uui-bg-primary",
      },
      warning: {
        innerBadgeStyle:
          "[&&]:text-uui-text-secondary-700 [&&]:bg-uui-bg-primary",
      },
    },
  };

  const ringOutline = {
    modern: {
      brand: {
        ring: `[&&]:ring-uui-utility-brand-100 [&&]:bg-uui-utility-brand-500 ${
          props.onClick
            ? " uui-hover-all:ring-uui-transparent group-hover:ring-uui-transparent"
            : ""
        }
					`,
      },
      gray: {
        ring: `ring-uui-utility-gray-100 [&&]:bg-uui-utility-gray-500 ${
          props.onClick
            ? " uui-hover-all:ring-uui-transparent group-hover:ring-uui-transparent"
            : ""
        }
					`,
      },
      success: {
        ring: `ring-uui-utility-success-100 [&&]:bg-uui-utility-success-500 ${
          props.onClick
            ? " uui-hover-all:ring-uui-transparent group-hover:ring-uui-transparent"
            : ""
        }
					`,
      },
      error: {
        ring: `ring-uui-utitlity-error-100 [&&]:bg-uui-utility-error-500 ${
          props.onClick
            ? " uui-hover-all:ring-uui-transparent group-hover:ring-uui-transparent"
            : ""
        }
					`,
      },
      warning: {
        ring: `ring-uui-utility-warning-100 [&&]:bg-uui-utility-warning-500 ${
          props.onClick
            ? " uui-hover-all:ring-uui-transparent group-hover:ring-uui-transparent"
            : ""
        }
					`,
      },
    },
  };

  const badgeSizing = {
    md: "first:-ml-uui-md first:mr-uui-xs last:ml-uui-xs last:-mr-uui-md ",
    lg: " first:-ml-[var(--uui-spacing-2-5)] first:mr-uui-md last:-mr-[var(--uui-spacing-2-5)] last:ml-uui-md",
  };

  return badge === "leading" ? (
    <GroupBadgeWrapper size={size} theme={theme} color={color} {...props}>
      <Badge
        icon={{
          type: "dot-outline",
          className: `ring-[0.188rem]  ${ringOutline[theme][color].ring} `,
        }}
        badgeType="Badge modern"
        color={color}
        size={size === "lg" ? "md" : "sm"}
        className={`${innerBadgeStyles[theme][color].innerBadgeStyle} ${badgeSizing[size]}  rounded-uui-sm `}
      >
        {text}
      </Badge>
      <GroupBadgeTextAtom size={size}>{message}</GroupBadgeTextAtom>
      <GroupBadgeIconAtom
        color={color}
        theme={theme}
        className="[&&]:h-[1rem] [&&]:w-[1rem] "
        iconUrl={icon?.url ?? arrowsArrowRight}
        size={size}
      />
    </GroupBadgeWrapper>
  ) : null;
};

export default GroupBadge;
