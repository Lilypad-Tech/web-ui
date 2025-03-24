import type { CustomCSSProperties } from "../types";
import type { HTMLProps } from "react";

interface InputIconAtomProps extends HTMLProps<HTMLSpanElement> {
  iconUrl?: string | undefined;
}

const InputIconAtom = ({ iconUrl, ...props }: InputIconAtomProps) => {
  const { className = "", ...rest } = props;
  const spanStyle: CustomCSSProperties = {
    "--icon-url": `url(${iconUrl})`,
  };
  return (
    <span
      {...rest}
      style={spanStyle}
      className="w-uui-2xl h-uui-2xl flex-shrink-0'
      bg-uui-fg-quarterary-500
      [mask-position:center]
      [mask-size:contain]
      [mask-repeat:no-repeat]
      [mask-image:var(--icon-url)]"
    />
  );
};

export default InputIconAtom;
