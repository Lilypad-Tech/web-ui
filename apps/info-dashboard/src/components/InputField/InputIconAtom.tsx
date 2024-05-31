interface InputIconAtomProps extends React.HTMLProps<HTMLSpanElement> {
  iconUrl?: string | undefined;
}

const InputIconAtom = ({ iconUrl, ...props }: InputIconAtomProps) => {
  const { className = "", ...rest } = props;
  return (
    <span
      {...rest}
      style={{ "--icon-url": `url(${iconUrl})` }}
      className="w-uui-2xl h-uui-2xl flex-shrink-0'
      bg-uui-fg-quarterary-500
      [mask-position:center]
      [mask-size:contain]
      [mask-repeat:no-repeat]
      [mask-image:var(--icon-url)]"
    />
  );
};

export default InputIconAtom;
