import type { BadgeColor, BadgeSize, BadgeType } from './BadgeTypes.js'
import BadgeIconAtom from './BadgeIconAtom'
import type { HTMLAttributes } from 'react'

interface BadgeDotAtomProps extends HTMLAttributes<HTMLSpanElement> {
    dotUrl?: string
    color: BadgeColor
    badgeType: BadgeType
    size: BadgeSize
    type?: 'dot' | 'dot-outline'
}

const BadgeDotAtom = ({
    dotUrl = 'generalDot',
    color,
    badgeType,
    size,
    type = 'dot',
    ...props
}: BadgeDotAtomProps) => {
    const layer1 = '  [&&]:h-[0.5rem] [&&]:w-[0.5rem] '
    return type === 'dot-outline' ? (
        <div
            {...props}
            className={`${props.className} ring-uui-3 rounded-full [&&]:h-[0.375rem] [&&]:w-[0.3755rem]`}
        ></div>
    ) : (
        <BadgeIconAtom
            {...props}
            iconUrl={dotUrl}
            className={`${layer1} ${props.className} `}
            color={color}
            badgeType={badgeType}
            size={size}
        />
    )
}

export default BadgeDotAtom
