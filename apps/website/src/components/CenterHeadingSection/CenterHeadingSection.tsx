import { HTMLAttributes } from 'react'

interface CenterHeadingSection extends HTMLAttributes<HTMLDivElement> {
    title?: string
    subtitle?: string
    header?: string
    titleClassName?: string
}

const CenterHeadingSection = ({
    title,
    subtitle,
    header,
    titleClassName,
    ...props
}: CenterHeadingSection) => {
    return (
        <div
            className={` ${props.className} bg-uui-bg-secondary py-uui-4xl lg:py-uui-5xl`}
        >
            <div className="max-w-uui-width-xl mx-auto text-center">
                {/* {header && (
                    <h5 className="text-uui-text-brand-secondary-700 uui-text-sm md:uui-text-md font-semibold antialiased">
                        {header}
                    </h5>
                )} */}
                {title && (
                    <h2
                        className={` ${titleClassName} text-uui-text-primary-900 pb-uui-2xl pt-uui-lg uui-display-sm md:uui-display-md font-semibold`}
                    >
                        {title}
                    </h2>
                )}

                {subtitle && (
                    <span className="text-uui-text-tertiary-600 uui-text-lg md:uui-text-xl font-regular">
                        {subtitle}
                    </span>
                )}
            </div>
            {props.children}
        </div>
    )
}

export default CenterHeadingSection
