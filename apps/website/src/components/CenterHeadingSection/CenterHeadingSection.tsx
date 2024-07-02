import { HTMLAttributes } from "react";

interface CenterHeadingSection extends HTMLAttributes<HTMLDivElement> {
	title?: string;
	subtitle?: string;
	header?: string;
}

const CenterHeadingSection = ({
	title,
	subtitle,
	header,
}: CenterHeadingSection) => {
	return (
		<div className="text-center mx-auto mb-uui-7xl">
			{header && (
				<h5 className="text-uui-text-brand-secondary-700 font-semibold antialiased uui-text-md">
					{header}
				</h5>
			)}
			{title && (
				<h2 className="text-uui-text-primary-900 pb-uui-2xl pt-uui-lg uui-display-md font-semibold">
					{title}
				</h2>
			)}

			{subtitle && (
				<span className="text-uui-text-tertiary-600 uui-text-xl font-regular">
					{subtitle}
				</span>
			)}
		</div>
	);
};

export default CenterHeadingSection;
