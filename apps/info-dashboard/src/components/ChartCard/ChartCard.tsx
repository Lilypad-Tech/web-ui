interface ChartCardProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
}

export default function ChartCard({ title, children }: ChartCardProps) {
	return (
		<div className="p-uui-2xl uui-desktop:p-uui-3xl gap-uui-2xl w-full snap-center h-full rounded-uui-xl border-uui-1 border-uui-border-secondary flex flex-col justify-between bg-uui-bg-primary_alt">
			<div className="uui-text-lg text-uui-text-primary-900 font-semibold">
				{title}
			</div>
			{children}
		</div>
	);
}
