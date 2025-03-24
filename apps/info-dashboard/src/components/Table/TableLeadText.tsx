import { PropsWithChildren, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TableLeadTextChildren {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}

interface TableLeadTextProps
  extends PropsWithChildren<{ title?: ReactNode; subtitle?: ReactNode }> {
  className?: string;
}

const TableLeadText = ({ title, subtitle, ...props }: TableLeadTextProps) => {
  const { className = "", ...rest } = props;
  return (
    <div
      className={twMerge(
        className,
        "bg-uui-bg-secondary rounded-uui-nonenone px-uui-3xl py-uui-xl flex items-center justify-start"
      )}
      {...rest}
    >
      {title && (
        <span className="text-uui-text-sm antialiased text-uui-text-primary-900 font-medium text-left ">
          {title}
        </span>
      )}
      {subtitle && (
        <span className="text-uui-text-sm antialiased text-uui-text-tertiary-600 font-normal text-left">
          {subtitle}
        </span>
      )}
    </div>
  );
};

export default TableLeadText;
