import { HTMLAttributes } from 'react'
import IconAtom from '../IconAtom/IconAtom'

interface FeaturedIconProps extends HTMLAttributes<HTMLDivElement> {
    iconUrl: string
    iconSize?: string
}

const FeaturedIcon = ({ iconUrl, iconSize, ...props }: FeaturedIconProps) => {
    return (
        <div className="p-uui-md md:p-uui-lg md:-mt-uui-md border-uui-1 bg-uui-bg-primary border-uui-featured-icon-modern-border rounded-uui-lg">
            <IconAtom className={iconSize} iconUrl={iconUrl} />
        </div>
    )
}

export default FeaturedIcon
