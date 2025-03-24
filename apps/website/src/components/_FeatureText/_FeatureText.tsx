import { HTMLAttributes } from "react";
import FeaturedIcon from "../FeaturedIcon/FeaturedIcon";

interface FeatureTextProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  featuredIconUrl: string;
}

const _FeatureText = ({
  title,
  description,
  featuredIconUrl,
}: FeatureTextProps) => {
  return (
    <div className="flex flex-col space-y-uui-2xl items-center justify-center max-w-[24rem]">
      <FeaturedIcon iconUrl={featuredIconUrl} />
      <div className="space-y-uui-md flex text-center flex-col justify-center items-center">
        {title && (
          <h6 className="uui-text-lg md:uui-text-xl antialiased text-uui-text-primary-900 font-semibold">
            {title}
          </h6>
        )}
        {description && (
          <p className="uui-text-md font-regular text-uui-text-tertiary-600 antialiased">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default _FeatureText;
