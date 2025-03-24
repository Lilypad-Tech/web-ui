import { ButtonHTMLAttributes } from "react";
import AvatarWrapper from "./AvatarWrapper";
import type { AvatarImageProps, AvatarSizes, ObjectFit } from "./types";
import Image from "next/image";
interface AvatarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: AvatarSizes;
  avatarImageProps: AvatarImageProps;
}
const Avatar = ({ size, avatarImageProps, ...props }: AvatarProps) => {
  const avatarImageSizes = {
    lg: "h-[3rem] w-[3rem]",
    xl: "h-[3.5rem] w-[3.5rem]",
    "2xl": "h-[4rem] w-[4rem]",
    "team-member-card": "h-[12rem] w-[12rem] md:h-[10rem] md:w-[10rem]",
  };
  return (
    <AvatarWrapper {...props}>
      {{
        default: (
          <div
            className={` ${avatarImageSizes[size]} rounded-full relative overflow-hidden`}
          >
            <Image
              fill
              src={avatarImageProps?.src}
              alt={avatarImageProps?.alt}
              className={`w-full h-full
		rounded-full border-uui-avatar-contrast-border object-cover ${avatarImageProps?.objectFit} bg-center bg-contain bg-no-repeat`}
            />
          </div>
        ),
      }}
    </AvatarWrapper>
  );
};
export default Avatar;
