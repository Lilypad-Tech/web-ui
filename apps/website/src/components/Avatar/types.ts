import { ImgHTMLAttributes } from "react";

export type ObjectFit = "object-top" | "object-center" | "object-bottom";

export interface AvatarImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  type: "default";
  objectFit?: ObjectFit;
  src: string;
  alt: string;
}

export type AvatarSizes = "lg" | "xl" | "2xl" | "team-member-card";
