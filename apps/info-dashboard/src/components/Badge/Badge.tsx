import BadgeWrapper from "./BadgeWrapper";
import BadgeIconAtom from "./BadgeIconAtom";
import BadgeDotAtom from "./BadgeDotAtom";
import { BadgeColor, BadgeIcon, BadgeSize, BadgeType } from "./BadgeTypes";
import BadgeTextAtom from "./BadgeTextAtom";

export interface BadgeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: BadgeColor;
  badgeType: BadgeType;
  icon?: BadgeIcon;
  size: BadgeSize;
  children?: React.ReactNode;
}

const Badge = ({
  color,
  badgeType,
  icon,
  size,
  children,
  ...props
}: BadgeProps) => {
  return (
    <BadgeWrapper {...props} color={color} badgeType={badgeType} size={size}>
      {{
        iconLeading: (
          <>
            {icon && icon.type === "icon" && icon.leading && (
              <BadgeIconAtom
                className={icon.className}
                iconUrl={icon.leading}
                badgeType={badgeType}
                color={color}
                size={size}
              />
            )}
            {icon && icon.type === "dot" && (
              <BadgeDotAtom
                className={icon.className}
                badgeType={badgeType}
                color={color}
                size={size}
              />
            )}
          </>
        ),
        default: <BadgeTextAtom size={size}>{children}</BadgeTextAtom>,
      }}
    </BadgeWrapper>
  );
};

export default Badge;
