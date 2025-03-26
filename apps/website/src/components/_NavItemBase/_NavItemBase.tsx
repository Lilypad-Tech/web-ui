import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

export default function _NavItemBase({
    children,
    current,
    onClick,
}: PropsWithChildren<{ current?: boolean; onClick?: () => void }>) {
    return (
        <span
            onClick={onClick}
            className={twMerge(
                'rounded-uui-sm px-uui-lg py-uui-md gap-uui-md flex',
                {
                    notCurrent:
                        'bg-uui-bg-primary hover:bg-uui-bg-primary_hover',
                    current: 'bg-uui-bg-active hover:bg-uui-bg-secondary_hover',
                }[current ? 'current' : 'notCurrent']
            )}
        >
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
                {children}
            </span>
        </span>
    )
}
