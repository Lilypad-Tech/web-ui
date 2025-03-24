import type { ReactNode } from "react";
import type { BadgeSize } from "./BadgeTypes";

type BadgeTextAtomProps = {
  children: ReactNode;
  size: BadgeSize;
};

const BadgeTextAtom = ({ children, size }: BadgeTextAtomProps) => {
  const layer1 = "antialiased font-medium";
  const sizes = { sm: "uui-text-xs", md: "uui-text-sm" };

  const classes = `${layer1} ${sizes[size]}`;

  return <span className={`${classes}`}>{children}</span>;
};

export default BadgeTextAtom;
