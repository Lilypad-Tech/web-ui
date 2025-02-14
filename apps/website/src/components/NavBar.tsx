import {
	Dispatch,
	PropsWithChildren,
	ReactNode,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import { SectionContainer } from "@lilypad/shared-components";
import { createContext } from "react";
import { twMerge } from "tailwind-merge";

export const NavBarContext = createContext<{
	menu: { opened: boolean; setOpened: Dispatch<SetStateAction<boolean>> };
}>({
	menu: { opened: false, setOpened: (value: SetStateAction<boolean>) => {} },
});
// TODO add navbar links as props
export default function NavBar({
	children,
	logo,
	dropdown,
	menuButton,
	trailingCTA,
	openedState,
}: PropsWithChildren<{
	logo: ReactNode;
	dropdown?: ReactNode;
	menuButton?: ReactNode;
	trailingCTA?: ReactNode;
	openedState?: {
		opened: boolean;
		setOpened: Dispatch<SetStateAction<boolean>>;
	};
}>) {
	const [menuOpened, setMenuOpened] = useState(false);

	// Make sure menu closes
	useEffect(() => {
		const handleResize = () => {
			setMenuOpened(false);
			if (openedState && openedState.setOpened) {
				openedState.setOpened(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [openedState]);

	return (
		<NavBarContext.Provider
			value={{
				menu: {
					opened: openedState ? openedState.opened : menuOpened,
					setOpened: openedState
						? openedState.setOpened
						: setMenuOpened,
				},
			}}
		>
			<div
				id="#top"
				className="w-full bg-uui-bg-primary flex border-b-uui-1 border-b-uui-border-secondary uui-desktop:py-uui-2xl py-uui-xl"
			>
				{/* Add mr-auto and ml-uui-none to the sectionContainer className with double ampersend to place the navbar logo on the left side */}
				<SectionContainer>
					{/* TODO update this href to go to the lilypad homepage in the future */}
					<div className="flex gap-uui-xl items-center">
						{logo}
						<div className="gap-uui-xs hidden uui-desktop:flex">
							{children}
						</div>
						<div className="ml-auto flex gap-uui-xl">
							<div className="uui-desktop:hidden">{dropdown}</div>

							<div className="uui-desktop:flex hidden">
								{trailingCTA}
							</div>

							<div className=" uui-desktop:hidden">
								{menuButton}
							</div>
						</div>
					</div>
				</SectionContainer>
			</div>

			<div
				className={twMerge(
					"flex flex-col uui-desktop:hidden items-center justify-between p-uui-5xl fixed inset-0 z-10 bg-uui-bg-primary",
					(openedState ? openedState.opened : menuOpened)
						? ""
						: "hidden"
				)}
			>
				{menuButton}
				<div className="flex flex-col items-center gap-uui-md">
					{children}
				</div>

				{logo}
			</div>
		</NavBarContext.Provider>
	);
}
