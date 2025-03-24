import type { ButtonHTMLAttributes } from "react";
import type {
  AnchorColor,
  AnchorDestructive,
  AnchorHierarchy,
  AnchorIcon,
  AnchorSize,
} from "../Anchor/AnchorTypes";
import ButtonWrapper from "./ButtonWrapper";
import AnchorTextAtom from "../Anchor/AnchorTextAtom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: AnchorSize;
  destructive: AnchorDestructive;
  color: AnchorColor;
  hierarchy: AnchorHierarchy;
  icon?: AnchorIcon;
}
const Button = ({
  size,
  destructive,
  color,
  hierarchy,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <ButtonWrapper
      size={size}
      destructive={destructive}
      color={color}
      hierarchy={hierarchy}
      icon={icon}
      {...props}
      className={`${props.className}`}
    >
      <AnchorTextAtom size={size}>{props.children}</AnchorTextAtom>
    </ButtonWrapper>
  );
};

// Button is created out of the Anchor component, the only differences are the export and the ButtonWrapper.
export default Button;
