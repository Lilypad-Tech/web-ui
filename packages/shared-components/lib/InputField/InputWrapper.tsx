import type { HTMLProps, ReactNode } from "react";

interface InputWrapperProps
	extends Omit<HTMLProps<HTMLFieldSetElement>, "children"> {
	destructive?: boolean;
	props_fieldset1?: HTMLProps<HTMLFieldSetElement>;
	disabled?: boolean;
	children?: InputWrapperChildren;
	inputSize: "sm" | "md";
}

interface InputWrapperChildren {
	input?: ReactNode;
	leadingInner?: ReactNode;
}

const InputWrapper = ({
	destructive = false,
	props_fieldset1,
	disabled = false,
	children,
	inputSize,
	...props
}: InputWrapperProps) => {
	const classes = `relative px-uui-md py-uui-sm flex items-center gap-uui-md h-full outline-none bg-uui-bg-primary ring-transparent text-uui-fg-primary-900 text-uui-md font-regular border-uui-1 flex flex-1 
  ${
		destructive
			? "error uui-focus-within-all:uui-ring-error border-uui-border-error uui-focus-within-all:border-uui-border-error "
			: ""
  }
  uui-focus-within-all:uui-ring-brand shadow-uui-xs border-uui-border-primary uui-focus-within-all:border-uui-border-brand
  ${
		disabled
			? "border-uui-border-disabled bg-uui-bg-disabled_subtle text-uui-text-disabled"
			: ""
  }`;

	const size = {
		sm: " pl-uui-lg pr-uui-lg py-uui-md ",
		md: "pl-[var(--uui-spacing-3-5)] pr-[var(--uui-spacing-3-5)] py-uui-lg",
	};

	// Could differ from future updates to the input component
	const roundedClass = " rounded-uui-md ";

	const { className = "", ...rest } = props;

	return (
		<fieldset
			{...props_fieldset1}
			className={`${props_fieldset1?.className} w-full flex items-stretch`}
			disabled={disabled}
		>
			<fieldset
				{...rest}
				className={classes + className + size[inputSize] + roundedClass}
				disabled={disabled}
			>
				{children?.leadingInner}
				{children?.input}
			</fieldset>
		</fieldset>
	);
};

export default InputWrapper;
