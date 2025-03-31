import { HTMLAttributes, HtmlHTMLAttributes, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
import _NavMenuItem from '../_NavMenuItem/_NavMenuItem'
import IconAtom from '../IconAtom/IconAtom'
import chevrownDown from 'chevron-down.svg'

interface _NavItemDropdownProps
    extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    children?: _NavItemDropdownChildren
    current?: boolean
}

interface _NavItemDropdownChildren {
    title?: React.ReactNode
    dropdownList?: React.ReactNode
}

export default function _NavItemDropdown({
    children,
    current,
    onClick,
}: _NavItemDropdownProps) {
    return (
        <div
            tabIndex={0}
            className={twMerge(
                'rounded-uui-sm px-uui-lg py-uui-md gap-uui-md group peer relative flex cursor-default items-center',
                {
                    notCurrent:
                        'bg-uui-bg-primary hover:bg-uui-bg-primary_hover',
                    current: 'bg-uui-bg-active hover:bg-uui-bg-secondary_hover',
                }[current ? 'current' : 'notCurrent']
            )}
        >
            <div className="peer absolute right-0 top-0 h-[2rem] w-full translate-y-full scale-0 bg-transparent focus-within:scale-100 focus-within:opacity-100 hover:scale-100 group-hover:scale-100 group-focus:scale-100 peer-focus:scale-100 peer-focus:opacity-100"></div>

            <span
                className={twMerge(
                    'uui-text-md hover:text-uui-text-secondary_hover font-semibold',
                    {
                        notCurrent:
                            'text-uui-text-secondary-700 hover:text-uui-text-secondary_hover',
                        current: 'text-uui-text-secondary_hover',
                    }[current ? 'current' : 'notCurrent']
                )}
            >
                {children?.title}
            </span>
            <IconAtom
                className="bg-uui-fg-quarterary-500 [&&]:h-[1.25rem] [&&]:w-[1.25rem]"
                iconUrl={chevrownDown}
            ></IconAtom>

            <ul
                aria-hidden
                className="gap-uui-xs rounded-uui-xl bg-uui-bg-primary p-uui-lg border-uui-1 border-uui-border-secondary peer absolute right-1/2 top-full z-10 min-w-[20rem] max-w-[20rem] translate-x-1/2 translate-y-[1rem] scale-0 transform overflow-auto bg-transparent transition-all duration-100 focus-within:scale-100 focus-within:opacity-100 hover:scale-100 group-hover:scale-100 group-focus:scale-100 peer-focus:scale-100 peer-focus:opacity-100"
            >
                {children?.dropdownList}
            </ul>
        </div>
    )
}
