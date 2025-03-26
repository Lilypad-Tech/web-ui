import { HTMLAttributes } from 'react'
import IconAtom from '../IconAtom/IconAtom'

interface FeaturedIconProps extends HTMLAttributes<HTMLDivElement> {
    iconUrl: string
    iconSize?: string
}

const FeaturedIcon = ({ iconUrl, iconSize, ...props }: FeaturedIconProps) => {
    return (
        <div className="p-uui-md md:p-uui-lg md:-mt-uui-md border-uui-1 bg-uui-bg-primary border-uui-featured-icon-modern-border rounded-uui-lg h-fit w-fit">
            <IconAtom
                className={`flex-shrink-0 md:h-[1.5rem] md:w-[1.5rem] [&&]:h-[1.25rem] [&&]:w-[1.25rem] ${iconSize}`}
                iconUrl={iconUrl}
            />
        </div>
    )
}

export default FeaturedIcon
