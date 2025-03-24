import { ButtonHTMLAttributes } from "react";

interface AvatarWrapperProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  children?: AvatarWrapperChildren;
}

interface AvatarWrapperChildren {
  default: React.ReactNode;
}

const AvatarWrapper = ({ children, ...props }: AvatarWrapperProps) => {
  return (
    <button
      onClick={props.onClick}
      {...props}
      className={` ${
        props.onClick != undefined
          ? "pointer-events-auto uui-focus-all:ring-uui-avatar-focus-border"
          : "pointer-events-none  "
      } ring-[0.25rem] ring-transparent block ${
        props.className
      } disabled:pointer-events-none flex-none h-fit w-fit outline-none rounded-full relative`}
    >
      {children?.default}
    </button>
  );
};

export default AvatarWrapper;
