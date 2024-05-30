import React from "react";

interface InputWrapperProps
  extends Omit<React.HTMLProps<HTMLFieldSetElement>, "children"> {
  destructive?: boolean;
  props_fieldset1?: React.HTMLProps<HTMLFieldSetElement>;
  disabled?: boolean;
  children?: InputWrapperChildren;
  inputSize?: "sm";
}

interface InputWrapperChildren {
  input?: React.ReactNode;
  leadingInner?: React.ReactNode;
}

const InputWrapper: React.FC<InputWrapperProps> = ({
  destructive = false,
  props_fieldset1,
  disabled = false,
  children,
  inputSize = "sm",
  ...props
}) => {
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

  //   Add in md later if needed
  const size = " pl-uui-lg pr-uui-lg py-uui-md ";

  // Could differ from future updates to the input component
  const roundedClass = " rounded-uui-md ";

  const { className = "", ...rest } = props;

  return (
    <fieldset
      {...props_fieldset1}
      className={`${props_fieldset1?.className}  flex items-stretch`}
      disabled={disabled}
    >
      <fieldset
        {...rest}
        className={classes + className + size + roundedClass}
        disabled={disabled}
      >
        {children?.leadingInner}
        {children?.input}
      </fieldset>
    </fieldset>
  );
};

export default InputWrapper;
