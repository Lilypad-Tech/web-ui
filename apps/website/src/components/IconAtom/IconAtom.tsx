import { CustomCSSProperties } from '@lilypad/shared-components'
import { HTMLAttributes } from 'react'

interface IconAtomProps extends HTMLAttributes<HTMLSpanElement> {
    iconUrl: string
}

const IconAtom = ({ iconUrl, ...props }: IconAtomProps) => {
    const spanStyle: CustomCSSProperties = {
        '--icon-url': `url(${iconUrl})`,
    }
    return (
        <div
            style={spanStyle}
            className={`${props.className} bg-uui-featured-icon-light-fg-gray h-[1.5rem] w-[1.5rem] [mask-image:var(--icon-url)] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]`}
        />
    )
}

export default IconAtom
