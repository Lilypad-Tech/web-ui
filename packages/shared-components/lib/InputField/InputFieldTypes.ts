import type { ChangeEvent, HTMLProps, ReactNode } from "react";

export interface InputFieldProps
	extends Omit<HTMLProps<HTMLInputElement>, "children"> {
	value?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	inputSize: "sm" | "md";
	destructive?: boolean;
	iconUrl?: string;
	children?: InputFieldChildren;
}

interface InputFieldChildren {
	hint?: ReactNode;
	default?: ReactNode;
}
