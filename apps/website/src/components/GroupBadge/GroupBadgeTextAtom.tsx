import { HTMLAttributes } from "react";
import { GroupBadgeSizes } from "./types";

interface GroupBadgeTextAtomProps extends HTMLAttributes<HTMLDivElement> {
  size: GroupBadgeSizes;
}

const GroupBadgeTextAtom = ({ children, size }: GroupBadgeTextAtomProps) => {
  const fontStyles = {
    md: "uui-text-xs",
    lg: "uui-text-sm",
  };

  return (
    <div
      className={` ${fontStyles[size]} whitespace-nowrap antialiased font-medium truncate overflow-hidden max-w-[60vw] md:max-w-[25rem] `}
    >
      {children}
    </div>
  );
};

export default GroupBadgeTextAtom;
