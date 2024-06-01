"use client";

interface TableProps
  extends Omit<React.HTMLProps<HTMLTableElement>, "children"> {
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
        className={`no-scrollbar w-full overflow-auto h-full bg-uui-bg-secondary ${className}`}
      >
        {children?.tableSubstitute ? (
          children.tableSubstitute
        ) : (
          <table
            {...rest}
            className={`
    relative antialiased
    text-uui-text-tertiary-600 bg-uui-bg-secondary text-left
    w-full border-none h-full [&_th]:min-w-fit [&_th]:whitespace-nowrap [&_td]:min-w-fit [&_tc]:max-h-fit [&_tr]:max-h-fit 
    [&_th]:font-uui-text-xs [&_th]:text-uui-text-xs  
    
    [&_tr:last-of-type]:border-b-uui-none [&_tr:first-of-type]:border-t-uui-none  [&_tr]:border-b-uui-1 [&_tr]:border-b-uui-border-secondary
    `}
          >
            {children?.tableRows}
          </table>
        )}
      </div>
      {/* Todo add pagination here later */}
      {/* {children?.pagination} */}
    </div>
  );
};

export default Table;
