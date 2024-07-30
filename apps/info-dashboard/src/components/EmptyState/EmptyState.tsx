import { PropsWithChildren, type ReactNode } from "react";

export default function EmptyState({
	children,
	header,
	description,
}: PropsWithChildren<{
	header: string;
	description: ReactNode;
}>) {
	return (
		<div className="w-full h-[70vh] flex items-center flex-col justify-center space-y-uui-lg">
			<div className="max-w-uui-width-xxs h-full px-uui-xs md:max-w-uui-width-xs flex flex-col items-center justify-center">
				{children}
				<span className="mt-uui-md text-uui-text-md font-semibold text-center text-uui-text-primary-900">
					{header}
				</span>
				<span className="text-uui-text-sm font-regular text-uui-text-tertiary-600 text-center">
					{description}
				</span>
			</div>
		</div>
	);
}
