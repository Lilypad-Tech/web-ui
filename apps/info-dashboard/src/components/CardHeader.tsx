interface CardHeaderProps extends React.HTMLProps<HTMLDivElement> {
  inputField?: React.ReactNode;
  subtitle?: string;
  headerTitle?: string;
}

const CardHeader = ({
  inputField,
  headerTitle,
  subtitle,
  ...props
}: CardHeaderProps) => {
  const { className = "", ...rest } = props;

  return (
    <div
      className={`space-x-uui-xl px-uui-3xl border-b-uui-1 border-b-uui-border-secondary py-uui-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between w-full ${className} `}
      {...rest}
    >
      <div className="space-y-uui-xs flex flex-col">
        <h4 className="text-uui-text-lg font-semibold text-uui-text-primary-900">
          {headerTitle}
        </h4>
        <span className="text-uui-text-sm font-regular text-uui-text-tertiary-600">
          {subtitle}
        </span>
      </div>
      <div>{inputField}</div>
    </div>
  );
};

export default CardHeader;
