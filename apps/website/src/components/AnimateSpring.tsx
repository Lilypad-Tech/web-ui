import React, { Children, HTMLAttributes } from "react";
import { useSprings, a } from "@react-spring/web";

interface AnimateSpringProps extends HTMLAttributes<HTMLDivElement> {}
const AnimateSpring = ({ children }: AnimateSpringProps) => {
	const items = Children.toArray(children);
	const springs = useSprings(
		items.length,
		items.map((item, index) => ({
			config: { mass: 5, tension: 2000, friction: 200 },
			opacity: 1,
			transform: "translateY(0%)",
			from: {
				opacity: 0,
				transform: "translateY(100%)",
			},
			delay: index * 200, // Adjust delay based on index for cascading effect
		}))
	);

	return (
		<div className="">
			{springs.map(({ opacity, transform }, index) => (
				<a.div
					key={index}
					style={{
						opacity,
						transform,
					}}
				>
					<a.div className="">{items[index]}</a.div>
				</a.div>
			))}
		</div>
	);
};

export default AnimateSpring;
