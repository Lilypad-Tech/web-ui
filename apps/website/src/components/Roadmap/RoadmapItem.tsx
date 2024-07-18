import { HTMLProps } from "react";

interface RoadmapProps extends HTMLProps<HTMLDivElement> {
	header: string;
	subtitle: string;
	title: string;
	achieved?: boolean;
}

const RoadmapItem = ({
	header,
	title,
	subtitle,
	achieved = false,
}: RoadmapProps) => {
	return (
		<div className="flex flex-col space-y-uui-md">
			<p className="uui-text-xs lg:uui-text-sm antialiased font-semibold text-uui-bg-brand-secondary">
				{header}
			</p>
			<h3 className="uui-text-lg lg:uui-text-xl antialiased text-uui-text-primary-900 font-semibold">
				{title}
			</h3>
			<p className="uui-text-sm lg:uui-text-md antialiased text-uui-text-tertiary-600 font-regular">
				{subtitle}
			</p>
		</div>
	);
};

export default RoadmapItem;
