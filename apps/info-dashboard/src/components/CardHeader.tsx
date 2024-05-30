interface CardHeaderProps extends React.HTMLProps<HTMLDivElement> {
  trailingField?: React.ReactNode;
  subtitle?: string;
  headerTitle?: string;
}

const CardHeader = ({
  trailingField,
  headerTitle,
  subtitle,
  ...props
}: CardHeaderProps) => {
  const { className = "", ...rest } = props;

  return (
    <div
      className={`md:space-x-uui-xl bg-uui-bg-secondary space-y-uui-xl md:space-y-uui-none px-uui-3xl border-b-uui-1 border-b-uui-border-secondary py-uui-2xl flex flex-col md:flex-row md:items-center md:justify-between w-full ${className} `}
      {...rest}
    >
      <div className="space-y-uui-xs flex flex-col w-full">
        <h4 className="text-uui-text-lg antialiased font-semibold text-uui-text-primary-900">
          {headerTitle}
        </h4>
        <span className="text-uui-text-sm antialiased font-regular text-uui-text-tertiary-600">
          {subtitle}
        </span>
      </div>
      <div className="w-full flex space-x-uui-lg justify-end items-center">
        {trailingField}
      </div>
    </div>
  );
};

export default CardHeader;
