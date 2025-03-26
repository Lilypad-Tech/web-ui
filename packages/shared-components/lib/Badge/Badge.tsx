import BadgeWrapper from './BadgeWrapper'
import BadgeIconAtom from './BadgeIconAtom'
import BadgeDotAtom from './BadgeDotAtom'
import type { BadgeColor, BadgeIcon, BadgeSize, BadgeType } from './BadgeTypes'
import BadgeTextAtom from './BadgeTextAtom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

export interface BadgeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: BadgeColor
    badgeType: BadgeType
    icon?: BadgeIcon
    size: BadgeSize
    children?: ReactNode
}

const Badge = ({
    color,
    badgeType,
    icon,
    size,
    children,
    ...props
}: BadgeProps) => {
    return (
        <BadgeWrapper
            {...props}
            color={color}
            badgeType={badgeType}
            size={size}
        >
            {{
                iconLeading: (
                    <>
                        {icon && icon.type === 'icon' && icon.leading && (
                            <BadgeIconAtom
                                className={icon.className}
                                iconUrl={icon.leading}
                                badgeType={badgeType}
                                color={color}
                                size={size}
                            />
                        )}
                        {icon && icon.type === 'dot' && (
                            <BadgeDotAtom
                                className={icon.className}
                                badgeType={badgeType}
                                color={color}
                                size={size}
                                type={icon.type}
                            />
                        )}

                        {icon && icon.type === 'dot-outline' && (
                            <BadgeDotAtom
                                className={icon.className}
                                badgeType={badgeType}
                                color={color}
                                size={size}
                                type={icon.type}
                            />
                        )}
                    </>
                ),
                default: <BadgeTextAtom size={size}>{children}</BadgeTextAtom>,
                iconTrailing: (
                    <>
                        {icon && icon.type === 'icon' && icon.trailing && (
                            <BadgeIconAtom
                                className={icon.className}
                                iconUrl={icon.trailing}
                                badgeType={badgeType}
                                color={color}
                                size={size}
                            />
                        )}
                    </>
                ),
            }}
        </BadgeWrapper>
    )
}

export default Badge
