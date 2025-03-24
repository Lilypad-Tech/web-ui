import { PropsWithChildren, ReactNode } from "react";

interface TableHeaderCellChildren {
  title?: React.ReactNode;
}

interface TableHeaderCellProps
  extends PropsWithChildren<{ className?: string; title?: ReactNode }> {}

const TableHeaderCell = ({
  children,
  title,
  ...props
}: TableHeaderCellProps) => {
  const { className = "", ...rest } = props;
  return (
    <div
      className={`${className} bg-uui-bg-secondary px-uui-3xl py-uui-xl flex items-center justify-start gap-uui-sm`}
      {...rest}
    >
      <span className="uui-text-xs text-uui-text-tertiary-600 font-medium text-left ">
        {title}
      </span>
      {children}
    </div>
  );
};

export default TableHeaderCell;
