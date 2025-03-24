import { HTMLAttributes } from "react";

interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  header?: string;
}

const ProductCard = ({
  title,
  subtitle,
  header,
  children,
}: ProductCardProps) => {
  return (
    <div className="p-uui-4xl space-y-uui-3xl md:space-y-uui-4xl flex flex-col justify-between w-full rounded-uui-2xl border-uui-1 border-uui-border-secondary bg-uui-bg-primary">
      <div className="flex flex-col space-y-uui-lg md:space-y-uui-xl h-full">
        {/* Heading */}
        {header && (
          <h5 className="antialiased text-uui-text-tertiary-600 uui-text-md md:uui-text-lg font-semibold">
            {header}
          </h5>
        )}
        {/* title */}
        {title && (
          <h3 className="font-semibold uui-display-xs md:uui-display-sm text-uui-text-primary-900 antialiased flex-grow">
            {title}
          </h3>
        )}
        {/* subtitle */}
        {subtitle && (
          <span className="antialiased text-uui-text-tertiary-600 font-regular text-uui-sm md:uui-text-md">
            {subtitle}
          </span>
        )}
      </div>
      {children}
    </div>
  );
};

export default ProductCard;
