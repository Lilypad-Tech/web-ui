import { HTMLAttributes } from 'react'

interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
    title?: string
    subtitle?: string
    header?: string
}

const ProductCard = ({ title, subtitle, children }: ProductCardProps) => {
    return (
        <div className="p-uui-4xl space-y-uui-3xl md:space-y-uui-4xl rounded-uui-2xl border-uui-1 border-uui-border-secondary bg-uui-bg-primary flex w-full max-w-prose flex-col">
            <div className="space-y-uui-lg md:space-y-uui-xl flex h-full flex-col">
                {/* title */}
                {title && (
                    <h3 className="uui-display-xs md:uui-display-sm text-uui-text-primary-900 h-20 font-semibold antialiased">
                        {title}
                    </h3>
                )}
                {/* subtitle */}
                {subtitle && (
                    <span className="text-uui-text-tertiary-600 font-regular text-uui-sm md:uui-text-md antialiased">
                        {subtitle}
                    </span>
                )}
            </div>
            {children}
        </div>
    )
}

export default ProductCard
