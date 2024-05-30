interface SectionContainerProps extends React.HTMLProps<HTMLDivElement> {}

const SectionContainer = ({ children, ...props }: SectionContainerProps) => {
  const { className = "", ...rest } = props;
  return (
    <div
      {...rest}
      className={`sm:p-uui-container-padding-desktop mx-auto p-uui-container-padding-mobile w-full max-w-uui-container-max-width-desktop`}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
