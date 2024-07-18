export type destructive = boolean;

export type color = "color" | "gray";

export type hierarchy = "primary" | "secondary";

export type size = "md" | "xl" | "2xl";

export type icon =
	| { type: "icon"; leading: string; trailing?: never }
	| { type: "icon"; trailing: string; leading?: never };

export type Coloring = {
	[D in `${destructive}`]: {
		[H in hierarchy]: {
			color: string[];
			gray: string[];
		};
	};
};
