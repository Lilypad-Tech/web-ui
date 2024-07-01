import {
	CSSProperties,
	Dispatch,
	PropsWithChildren,
	ReactNode,
	SetStateAction,
} from "react";
import { SectionContainer } from "@lilypad/shared-components";
import { mapsAndTravelRocket01 } from "@frontline-hq/untitledui-icons";
import { twMerge } from "tailwind-merge";

export default function CustomAlert({
	text,
	supportingText,
	reactivity,
	actions,
}: PropsWithChildren<{
	text: ReactNode;
	supportingText: ReactNode;
	reactivity: {
		isOpen: boolean;
		setIsOpen: Dispatch<SetStateAction<boolean>>;
	};
	actions: ReactNode;
}>) {
	return (
		<div
			className={twMerge(
				"w-full bg-uui-brand-500 py-uui-xl uui-desktop:py-uui-lg fixed bottom-0 uui-desktop:relative border-t-[1px] uui-desktop:border-t-0 uui-desktop:border-b-[1px] border-uui-border-primary",
				reactivity.isOpen ? "" : "hidden"
			)}
		>
			<SectionContainer className="flex uui-desktop:items-center gap-uui-xl flex-col uui-desktop:flex-row">
				<span className="w-uui-2xl h-uui-2xl relative hidden uui-desktop:block">
					<span className="absolute w-[1.75rem] h-[1.75rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-uui-fg-white opacity-30" />
					<span className="absolute w-[2.375rem] h-[2.375rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-uui-fg-white opacity-10" />
					<span
						style={
							{
								"--icon-url": `url(${mapsAndTravelRocket01})`,
							} as CSSProperties
						}
						className="block [mask-position:center] [mask-size:contain] [mask-repeat:no-repeat] [mask-image:var(--icon-url)] w-uui-2xl h-uui-2xl bg-uui-fg-white"
					/>
				</span>
				<div className="flex gap-[var(--uui-spacing-0.5)] text-uui-text-primary-900 uui-text-sm flex-col uui-desktop:flex-row uui-desktop:gap-uui-sm mr-auto">
					<span className="font-semibold">{text}</span>
					<span className="font-regular">{supportingText}</span>
				</div>
				<div className="gap-uui-lg flex">{actions}</div>
			</SectionContainer>
		</div>
	);
}
