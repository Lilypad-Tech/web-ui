interface CardHeaderProps extends React.HTMLProps<HTMLDivElement> {
    trailingField?: React.ReactNode
    subtitle?: string
    headerTitle?: string
}

const CardHeader = ({
    trailingField,
    headerTitle,
    subtitle,
    ...props
}: CardHeaderProps) => {
    const { className = '', ...rest } = props

    return (
        <div
            className={`md:space-x-uui-xl bg-uui-bg-secondary space-y-uui-xl md:space-y-uui-none px-uui-3xl border-b-uui-1 border-b-uui-border-secondary py-uui-2xl flex w-full flex-col md:flex-row md:items-center md:justify-between ${className} `}
            {...rest}
        >
            <div className="space-y-uui-xs flex w-full flex-col">
                <h4 className="text-uui-text-lg text-uui-text-primary-900 font-semibold antialiased">
                    {headerTitle}
                </h4>
                <span className="text-uui-text-sm font-regular text-uui-text-tertiary-600 antialiased">
                    {subtitle}
                </span>
            </div>
            <div className="space-x-uui-lg flex w-full items-center justify-end">
                {trailingField}
            </div>
        </div>
    )
}

export default CardHeader
