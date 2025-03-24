import { CustomCSSProperties } from "@lilypad/shared-components";
import { generalMenu02, generalXClose } from "@frontline-hq/untitledui-icons";
import { PropsWithChildren, useContext } from "react";
import { twMerge } from "tailwind-merge";
import { NavBarContext } from "../NavBar";

export default function _ApplicationNavMenuButton({
  openIcon = generalMenu02,
  closeIcon = generalXClose,
}: PropsWithChildren<{
  openIcon?: string;
  closeIcon?: string;
}>) {
  const navBarContext = useContext(NavBarContext);
  const { opened } = navBarContext.menu;
  const spanStyle: CustomCSSProperties = {
    "--icon-url": `url(${opened ? closeIcon : openIcon})`,
  };
  const toggleMenu = () =>
    navBarContext.menu.setOpened((opened) => {
      return !opened;
    });
  return (
    <button
      className={twMerge(
        "p-uui-md rounded-uui-md flex items-center justify-center",
        opened
          ? "bg-uui-bg-primary hover:bg-uui-bg-primary_hover"
          : "hover:bg-uui-alpha-white-10"
      )}
      onClick={toggleMenu}
    >
      <span
        style={spanStyle}
        className={twMerge(
          "[mask-position:center] [mask-size:contain] [mask-repeat:no-repeat] [mask-image:var(--icon-url)] w-uui-3xl h-uui-3xl",
          opened ? "bg-uui-fg-secondary-700" : "bg-uui-fg-white"
        )}
      />
    </button>
  );
}
