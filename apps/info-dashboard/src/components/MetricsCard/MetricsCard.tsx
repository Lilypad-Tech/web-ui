interface MetricsCardProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    title: string
    children?: MetricsCardChildrenProps
}

interface MetricsCardChildrenProps {
    badge?: React.ReactNode
    header?: React.ReactNode
}

const MetricsCard: React.FC<MetricsCardProps> = ({
    title,
    children,
    ...props
}) => {
    return (
        <div
            {...props}
            className="rounded-uui-xl border-uui-1 border-uui-border-secondary bg-uui-bg-primary_alt flex h-fit w-full snap-center flex-col justify-between"
        >
            <div className="p-uui-3xl space-y-uui-md flex flex-col">
                <span className="text-uui-text-tertiary-600 uui-text-sm font-medium">
                    {title}
                </span>
                <div className="space-x-uui-xl flex items-end justify-between">
                    <div>
                        <h2 className="uui-display-md text-uui-text-primary-900 font-semibold">
                            {children?.header}
                        </h2>
                    </div>
                    <div className="pb-uui-md">{children?.badge}</div>
                </div>
            </div>
        </div>
    )
}

export default MetricsCard
