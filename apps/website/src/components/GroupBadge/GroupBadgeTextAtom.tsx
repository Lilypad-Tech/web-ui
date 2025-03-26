import { HTMLAttributes } from 'react'
import { GroupBadgeSizes } from './types'

interface GroupBadgeTextAtomProps extends HTMLAttributes<HTMLDivElement> {
    size: GroupBadgeSizes
}

const GroupBadgeTextAtom = ({ children, size }: GroupBadgeTextAtomProps) => {
    const fontStyles = {
        md: 'uui-text-xs',
        lg: 'uui-text-sm',
    }

    return (
        <div
            className={` ${fontStyles[size]} max-w-[60vw] overflow-hidden truncate whitespace-nowrap font-medium antialiased md:max-w-[25rem]`}
        >
            {children}
        </div>
    )
}

export default GroupBadgeTextAtom
