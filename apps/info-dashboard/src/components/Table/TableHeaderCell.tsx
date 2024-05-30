interface TableHeaderCellChildren {
  title?: React.ReactNode;
}

interface TableHeaderCellProps
  extends Omit<React.HTMLProps<HTMLDivElement>, "children"> {
  children?: TableHeaderCellChildren;
}

const TableHeaderCell = ({ children, ...props }: TableHeaderCellProps) => {
  const { className = "", ...rest } = props;
  return (
    <div
      className={`${className} px-uui-3xl py-uui-xl flex items-center justify-start`}
      {...rest}
    >
      {children?.title ? (
        <span className="text-uui-text-xs antialiased text-uui-text-tertiary-600 font-medium text-left ">
          {children.title}
        </span>
      ) : null}
    </div>
  );
};

export default TableHeaderCell;
