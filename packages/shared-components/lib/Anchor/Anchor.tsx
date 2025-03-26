import type { AnchorHTMLAttributes } from 'react'
import type {
    AnchorColor,
    AnchorDestructive,
    AnchorHierarchy,
    AnchorIcon,
    AnchorSize,
} from './AnchorTypes'
import AnchorWrapper from './AnchorWrapper'
import AnchorTextAtom from './AnchorTextAtom'

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    size: AnchorSize
    destructive: AnchorDestructive
    color: AnchorColor
    hierarchy: AnchorHierarchy
    icon?: AnchorIcon
}
const Anchor = ({
    size,
    destructive,
    color,
    hierarchy,
    icon,
    ...props
}: AnchorProps) => {
    return (
        <AnchorWrapper
            size={size}
            destructive={destructive}
            color={color}
            hierarchy={hierarchy}
            icon={icon}
            {...props}
            className={`${props.className}`}
        >
            <AnchorTextAtom size={size}>{props.children}</AnchorTextAtom>
        </AnchorWrapper>
    )
}

export default Anchor
