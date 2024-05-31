interface TableLeadTextChildren {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}

interface TableLeadTextProps
  extends Omit<React.HTMLProps<HTMLDivElement>, "children"> {
  children?: TableLeadTextChildren;
}

const TableLeadText = ({ children, ...props }: TableLeadTextProps) => {
  const { className = "", ...rest } = props;
  return (
    <div
      className={`${className} bg-uui-bg-secondary rounded-uui-nonenone px-uui-3xl py-uui-xl flex items-center justify-start`}
      {...rest}
    >
      {children?.title ? (
        <span className="text-uui-text-sm antialiased text-uui-text-primary-900 font-medium text-left ">
          {children.title}
        </span>
      ) : null}
      {children?.subtitle ? (
        <span className="text-uui-text-sm antialiased text-uui-text-tertiary-600 font-normal text-left">
          {children?.subtitle}
        </span>
      ) : null}
    </div>
  );
};

export default TableLeadText;
