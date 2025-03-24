import { AnchorHTMLAttributes } from "react";
import IconAtom from "../IconAtom/IconAtom";

interface _NavMenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  iconUrl: string;
  title: string;
  description?: string;
  onClick?: () => void;
}

const _NavMenuItem = ({
  iconUrl,
  title,
  description,
  onClick,
  ...props
}: _NavMenuItemProps) => {
  return (
    <li className="list-none">
      <a
        onClick={onClick}
        href={props.href}
        className="outline-none rounded-uui-sm relative text-uui-fg-secondary-700 uui-hover-all:text-uui-fg-secondary_hover uui-hover-all:bg-uui-bg-primary_hover uui-focus-all:text-uui-fg-secondary_hover uui-focus-all:bg-uui-bg-primary_hover disabled:text-uui-text-disabled p-uui-lg flex gap-uui-xl"
        {...props}
      >
        <IconAtom
          className="bg-uui-fg-brand-primary-600 min-w-[1.5rem] min-h-[1.5rem]"
          iconUrl={iconUrl}
        ></IconAtom>
        <div className="flex flex-col text-left spacing-uui-xs">
          <div className="font-semibold text-uui-text-primary-900 antialiased uui-text-md">
            {title}
          </div>
          {description && (
            <div className="uui-text-sm font-regular text-uui-text-tertiary-600 antialiased">
              {description}
            </div>
          )}
        </div>
      </a>
    </li>
  );
};

export default _NavMenuItem;
