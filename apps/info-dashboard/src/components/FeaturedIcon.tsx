import React from 'react'
import { CustomCSSProperties } from '@/types'

interface FeaturedIconProps {
    iconUrl: string
    spinIcon: boolean
}

const FeaturedIcon = ({ iconUrl, spinIcon }: FeaturedIconProps) => {
    // Define a type for CSS properties including custom properties

    const spanStyle: CustomCSSProperties = {
        '--icon-url': `url(${iconUrl})`,
    }

    return (
        <div className="border-uui-1 rounded-uui-lg shadow-uui-md border-uui-featured-icon-modern-border bg-uui-bg-primary flex h-[3rem] w-[3rem] items-center justify-center">
            <span
                style={spanStyle}
                className={`${
                    spinIcon ? 'animate-spin' : ''
                } bg-uui-fg-secondary-700 group-hover:text-uui-button-primary-fg_hover hover:bg-uui-error-800 group-[.disabled]:bg-uui-fg-disabled pointer-events-none block h-[1.5rem] w-[1.5rem] [mask-image:var(--icon-url)] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]`}
            />
        </div>
    )
}

export default FeaturedIcon
