interface CardWithBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
}

export default function CardWithBorder({
  title,
  subtitle,
  children,
  ...props
}: CardWithBorderProps) {
  return (
    <div
      {...props}
      className={`${props.className} p-uui-2xl uui-desktop:p-uui-3xl gap-uui-2xl w-full snap-center rounded-uui-xl border-uui-1 border-uui-border-secondary flex flex-col justify-between bg-uui-bg-primary_alt `}
    >
      <div className="flex flex-col space-y-uui-xs">
        {title && (
          <div className="uui-text-lg text-uui-text-primary-900 font-semibold antialiased">
            {title}
          </div>
        )}
        {subtitle && (
          <div className="uui-text-sm antialiased font-regular text-uui-text-tertiary-600">
            {subtitle}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
