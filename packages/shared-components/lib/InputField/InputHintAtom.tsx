import type { HtmlHTMLAttributes } from "react";

interface InputHintAtomProps extends HtmlHTMLAttributes<HTMLSpanElement> {
  destructive?: boolean;
}

const InputHintAtom = ({ destructive, ...props }: InputHintAtomProps) => {
  return (
    <div
      {...props}
      className={`${props.className} ${
        destructive ? "error" : ""
      } antialiased text-uui-text-tertiary-600 font-regular uui-text-sm [&.error]:text-uui-text-error-primary-600 mt-uui-sm block text-left `}
    >
      {props.children}
    </div>
  );
};

export default InputHintAtom;
