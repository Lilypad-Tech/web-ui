interface CardWithBorderProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string
    subtitle?: string
}

export default function CardWithBorder({
    title,
    subtitle,
    children,
    ...props
}: CardWithBorderProps) {
    return (
        <div
            {...props}
            className={`${props.className} p-uui-2xl uui-desktop:p-uui-3xl gap-uui-2xl rounded-uui-xl border-uui-1 border-uui-border-secondary bg-uui-bg-primary_alt flex w-full snap-center flex-col justify-between`}
        >
            <div className="space-y-uui-xs flex flex-col">
                {title && (
                    <div className="uui-text-lg text-uui-text-primary-900 font-semibold antialiased">
                        {title}
                    </div>
                )}
                {subtitle && (
                    <div className="uui-text-sm font-regular text-uui-text-tertiary-600 antialiased">
                        {subtitle}
                    </div>
                )}
            </div>
            {children}
        </div>
    )
}
