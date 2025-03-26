import { AnchorHTMLAttributes } from 'react'
import IconAtom from '../IconAtom/IconAtom'

interface _NavMenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    iconUrl: string
    title: string
    description?: string
    onClick?: () => void
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
                className="rounded-uui-sm text-uui-fg-secondary-700 uui-hover-all:text-uui-fg-secondary_hover uui-hover-all:bg-uui-bg-primary_hover uui-focus-all:text-uui-fg-secondary_hover uui-focus-all:bg-uui-bg-primary_hover disabled:text-uui-text-disabled p-uui-lg gap-uui-xl relative flex outline-none"
                {...props}
            >
                <IconAtom
                    className="bg-uui-fg-brand-primary-600 min-h-[1.5rem] min-w-[1.5rem]"
                    iconUrl={iconUrl}
                ></IconAtom>
                <div className="spacing-uui-xs flex flex-col text-left">
                    <div className="text-uui-text-primary-900 uui-text-md font-semibold antialiased">
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
    )
}

export default _NavMenuItem
