"use client";

interface TableProps
  extends Omit<React.HTMLProps<HTMLTableElement>, "children"> {
  isLoading?: boolean;
  isError?: boolean;
  isEmpty?: boolean;
  children?: TableChildren;
}

interface TableChildren {
  cardHeader?: React.ReactNode;
  tableRows?: React.ReactNode;
  pagination?: React.ReactNode;
  tableSubstitute?: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ children, ...props }) => {
  const { className = "", ...rest } = props;

  return (
    <div className="rounded-uui-xl overflow-hidden border-uui-1 border-uui-border-secondary w-full h-full   ">
      {children?.cardHeader}

      <div
        className={` no-scrollbar w-full overflow-auto h-full max-h-[25rem] ${className}`}
      >
        {children?.tableSubstitute ? (
          children.tableSubstitute
        ) : (
          <table
            {...rest}
            className={`
    relative  
    text-uui-text-tertiary-600 bg-uui-bg-primary text-left
    w-full border-none h-full [&_th]:min-w-fit [&_th]:whitespace-nowrap [&_td]:min-w-fit [&_tc]:max-h-fit [&_tr]:max-h-fit 
    [&_th]:font-uui-text-xs [&_th]:text-uui-text-xs [&_th]:px-uui-3xl [&_th]:py-uui-xl 
    [&_td]:font-uui-text-sm [&_td]:text-uui-text-sm [&_td]:px-uui-3xl [&_td]:py-uui-xl
    [&_tr:last-of-type]:border-b-uui-none [&_tr:first-of-type]:border-t-uui-none [&_tr:first-of-type]:border-b-uui-none [&_tr]:border-b-uui-1 [&_tr]:border-b-uui-border-secondary
    `}
          >
            {children?.tableRows}
          </table>
        )}
      </div>
      {children?.pagination}
    </div>
  );
};

export default Table;
