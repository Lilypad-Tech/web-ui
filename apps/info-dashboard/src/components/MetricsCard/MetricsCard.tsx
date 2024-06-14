interface MetricsCardProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
	title: string;
	header: string;
	children?: MetricsCardChildrenProps;
}

interface MetricsCardChildrenProps {
	badge?: React.ReactNode;
}

const MetricsCard: React.FC<MetricsCardProps> = ({
	title,
	header,
	children,
	...props
}) => {
	return (
		<div
			{...props}
			className="w-full snap-center h-fit rounded-uui-xl border-uui-1 border-uui-border-secondary flex flex-col justify-between bg-uui-bg-primary_alt"
		>
			<div className="p-uui-3xl flex flex-col space-y-uui-md">
				<span className=" text-uui-text-tertiary-600 uui-text-sm font-medium">
					{title}
				</span>
				<div className="flex items-end justify-between space-x-uui-xl">
					<div>
						<h2 className=" uui-display-md text-uui-text-primary-900 font-semibold">
							{header}
						</h2>
					</div>
					<div className="pb-uui-md">{children?.badge}</div>
				</div>
			</div>
		</div>
	);
};

export default MetricsCard;
