interface MetricsCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  title: string;
  header: string;
  children?: MetricsCardChildrenProps;
}

interface MetricsCardChildrenProps {
  badge?: React.ReactNode;
}

const MetricsCard: React.FC<MetricsCardProps> = ({
  title,
  header,
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className="w-full h-fit rounded-uui-xl border-uui-1 border-uui-border-secondary flex flex-col justify-between"
    >
      <div className="p-uui-3xl flex flex-col space-y-uui-md">
        <span className=" text-uui-text-tertiary-600 font-uui-text-sm text-uui-text-sm font-medium">
          {title}
        </span>
        <div className="flex items-center justify-between space-x-uui-xl">
          <div>
            <h2 className="text-uui-display-md font-uui-display-md text-uui-text-primary-900 font-semibold">
              {header}
            </h2>
          </div>
          {children?.badge}
        </div>
      </div>
    </div>
  );
};

export default MetricsCard;
