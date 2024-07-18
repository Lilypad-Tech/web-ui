import React, { Children, HTMLProps, isValidElement } from "react";
import Image from "next/image";

interface RoadmapProps extends HTMLProps<HTMLDivElement> {}

export default function Roadmap({ children }: RoadmapProps) {
	return (
		<div>
			{Children.map(children, (child, i) => {
				if (!isValidElement(child)) return null;

				// Extract the achieved prop from the child
				const { achieved } = child.props;

				return (
					<div
						key={i}
						className="flex space-x-uui-xl max-w-uui-width-md "
					>
						<div className="flex flex-col items-center relative ">
							<div
								className={`${
									i === 0 ? "translate-y-uui-xl" : ""
								} absolute  last-of-type:hidden rounded-full z-10 w-[1rem] h-[1rem] lg:w-[1.25rem] lg:h-[1.25rem]`}
							>
								<Image
									layout="fill"
									src={
										achieved
											? "/lilypad-roadmap-icon-finished.svg"
											: "/lilypad-roadmap-icon-in-progress.svg"
									}
									alt="Roadmap icon"
									className={`w-full h-full  rounded-full top-0 ${
										achieved
											? "shadow-[2px_2px_10px_0px_rgba(20,199,195,0.4)]"
											: ""
									} `}
								/>
							</div>
							{i === React.Children.count(children) - 1 ? null : (
								<div
									className={`${
										achieved
											? "bg-uui-border-brand "
											: "bg-[#095856]"
									} flex-grow  w-[0.09375rem]`}
								/>
							)}
						</div>
						<div
							className={`${
								i === 0 ? "py-uui-xl" : "pb-uui-xl"
							} `}
						>
							{child}
						</div>
					</div>
				);
			})}
		</div>
	);
}
