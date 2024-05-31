import { CustomCSSProperties } from "@/types";

interface SocialIconProps extends React.HTMLProps<HTMLSpanElement> {
  iconUrl: string;
  iconStyle?: "brand" | "gray";
}

const SocialIcon = ({
  iconUrl,
  iconStyle = "gray",
  ...props
}: SocialIconProps) => {
  const spanStyle: CustomCSSProperties = {
    "--icon-url": `url(${iconUrl})`,
  };

  const { className = "", ...rest } = props;

  return (
    <span
      {...rest}
      style={spanStyle}
      className={` ${className} h-uui-3xl w-uui-3xl block
      ${
        iconStyle === "gray"
          ? "[mask-size:contain] [mask-repeat:no-repeat] [mask-image:var(--icon-url)] bg-uui-fg-quinary-400 bg-[image:none] uui-hover-all:bg-uui-fg-quinary_hover"
          : "[mask-image:none bg-[image:var(--icon-url)] uui-hover-all:bg-[var(--icon-url)] bg-contain bg-no-repeat bg-center"
      }
        
      `}
    />
  );
};

export default SocialIcon;
