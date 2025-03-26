interface SectionContainerProps extends React.HTMLProps<HTMLDivElement> {}

const SectionContainer = ({ children, ...props }: SectionContainerProps) => {
    const { className = '', ...rest } = props
    return (
        <div
            {...rest}
            className={` ${className} sm:px-uui-container-padding-desktop px-uui-container-padding-mobile max-w-uui-container-max-width-desktop mx-auto w-full`}
        >
            {children}
        </div>
    )
}

export default SectionContainer
