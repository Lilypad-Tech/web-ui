import { HTMLAttributes } from 'react'
import FeaturedIcon from '../FeaturedIcon/FeaturedIcon'

interface FeatureTextProps extends HTMLAttributes<HTMLDivElement> {
    title?: string
    description?: string
    featuredIconUrl?: string
}

const _FeatureText = ({
    title,
    description,
    featuredIconUrl,
}: FeatureTextProps) => {
    return (
        <div className="space-y-uui-2xl flex max-w-[32rem] flex-col md:max-w-96">
            {featuredIconUrl && <FeaturedIcon iconUrl={featuredIconUrl} />}
            <div className="space-y-uui-md flex flex-col text-center">
                {title && (
                    <h6 className="uui-text-lg md:uui-text-xl text-uui-text-primary-900 font-semibold antialiased">
                        {title}
                    </h6>
                )}
                {description && (
                    <p className="uui-text-md font-regular text-uui-text-tertiary-600 antialiased">
                        {description}
                    </p>
                )}
            </div>
        </div>
    )
}

export default _FeatureText
