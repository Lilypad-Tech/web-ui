import SectionContainer from "./SectionContainer";

interface HeadingSectionProps extends React.HTMLProps<HTMLDivElement> {
	title: string;
	subtitle: string;
}

// Todo change naming according to figma after, when defined
const HeadingSection = ({ title, subtitle, ...props }: HeadingSectionProps) => {
	const { className = "", ...rest } = props;

	return (
		<SectionContainer>
			<div className={` ${className}`}>
				<h2 className="uui-display-sm text-uui-text-primary-900 font-semibold">
					{title}
				</h2>
				<span className="uui-text-md text-uui-text-tertiary-600 font-regular">
					{subtitle}
				</span>
			</div>
		</SectionContainer>
	);
};

export default HeadingSection;
