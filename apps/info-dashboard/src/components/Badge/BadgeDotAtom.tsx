import { generalDot } from "@frontline-hq/untitledui-icons";
import { BadgeColor, BadgeSize, BadgeType } from "./BadgeTypes.js";
import BadgeIconAtom from "./BadgeIconAtom";

interface BadgeDotAtomProps extends React.HTMLAttributes<HTMLSpanElement> {
  dotUrl?: string;
  color: BadgeColor;
  badgeType: BadgeType;
  size: BadgeSize;
}

const BadgeDotAtom = ({
  dotUrl = generalDot,
  color,
  badgeType,
  size,
  ...props
}: BadgeDotAtomProps) => {
  const layer1 = "  [&&]:h-[0.5rem] [&&]:w-[0.5rem] ";
  return (
    <BadgeIconAtom
      {...props}
      iconUrl={dotUrl}
      className={`${layer1}  `}
      color={color}
      badgeType={badgeType}
      size={size}
    />
  );
};

export default BadgeDotAtom;
