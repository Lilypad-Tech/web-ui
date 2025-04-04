import { HTMLAttributes } from 'react'

interface ContentItemProps extends HTMLAttributes<HTMLDivElement> {
    heading?: string
    paragraph?: string
    size: 'sm' | 'md' | 'lg' | 'xl'
}

const ContentItem = ({
    heading,
    paragraph,
    size,
    ...props
}: ContentItemProps) => {
    const contentSizing = {
        sm: {
            header: 'uui-text-lg md:uui-text-xl',
            paragraph: 'uui-text-sm md:uui-text-sm pt-uui-md',
        },
        md: {
            header: 'uui-text-xl md:uui-display-xs',
            paragraph: 'uui-text-md md:uui-text-md pt-uui-lg',
        },
        lg: {
            header: 'uui-display-xs md:uui-display-sm',
            paragraph: 'uui-text-md md:uui-text-lg pt-uui-xl',
        },
        xl: {
            header: 'uui-display-sm md:uui-display-md',
            paragraph: 'uui-text-md md:uui-text-xl pt-uui-2xl',
        },
    }
    return (
        <div {...props}>
            {heading && (
                <h2
                    className={`${contentSizing[size].header} text-uui-text-primary-900 font-semibold`}
                >
                    {heading}
                </h2>
            )}
            {paragraph && (
                <p
                    className={`${contentSizing[size].paragraph} text-uui-text-tertiary-600 font-regular antialiased`}
                >
                    {paragraph}
                </p>
            )}
        </div>
    )
}

export default ContentItem
