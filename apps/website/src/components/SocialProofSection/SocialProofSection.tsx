import Image from "next/image";
import { HTMLAttributes } from "react";

interface SocialProofSectionProps extends HTMLAttributes<HTMLDivElement> {
	trustedByArray: Array<{ src: string; alt: string }>;
	title: string;
}

const SocialProofSection = ({
	trustedByArray,
	title,
	...props
}: SocialProofSectionProps) => {
	return (
		<div
			{...props}
			className={`${props.className} flex flex-col w-full items-center space-y-uui-2xl lg:space-y-uui-4xl`}
		>
			<span className="uui-text-sm md:uui-text-md font-medium text-uui-text-primary-900 antialiased">
				{title}
			</span>
			<div className="flex overflow-x-auto no-scrollbar gap-uui-4xl lg:gap-uui-6xl w-full items-center justify-between ">
				{trustedByArray.map(({ src, alt }, index) => {
					return (
						<Image
							height={400}
							width={400}
							key={index}
							className="h-6 md:h-8 w-auto"
							src={src}
							alt={alt}
						/>
					);
				})}
			</div>
		</div>
	);
};
export default SocialProofSection;
