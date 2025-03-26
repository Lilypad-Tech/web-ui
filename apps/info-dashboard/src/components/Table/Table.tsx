'use client'

interface TableProps
    extends Omit<React.HTMLProps<HTMLTableElement>, 'children'> {
    children?: TableChildren
}

interface TableChildren {
    cardHeader?: React.ReactNode
    tableRows?: React.ReactNode
    pagination?: React.ReactNode
    tableSubstitute?: React.ReactNode
}

const Table: React.FC<TableProps> = ({ children, ...props }) => {
    const { className = '', ...rest } = props

    return (
        <div className="rounded-uui-xl border-uui-1 border-uui-border-secondary h-full w-full overflow-hidden">
            {children?.cardHeader}
            <div
                className={`no-scrollbar bg-uui-bg-secondary z-10 h-full w-full overflow-auto ${className}`}
            >
                {children?.tableSubstitute ? (
                    children.tableSubstitute
                ) : (
                    <>
                        <table
                            {...rest}
                            className={`text-uui-text-tertiary-600 bg-uui-bg-secondary [&_th]:font-uui-text-xs [&_th]:text-uui-text-xs [&_tr:last-of-type]:border-b-uui-none [&_tr:first-of-type]:border-t-uui-none [&_tr]:border-b-uui-1 [&_tr]:border-b-uui-border-secondary z-30 h-full w-full border-none text-left antialiased [&_tc]:max-h-fit [&_td]:min-w-fit [&_th]:min-w-fit [&_th]:whitespace-nowrap [&_tr]:max-h-fit`}
                        >
                            {children?.tableRows}
                        </table>
                    </>
                )}
            </div>
            {/* Todo add pagination here later */}
            {/* {children?.pagination} */}
        </div>
    )
}

export default Table
