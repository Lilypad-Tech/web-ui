import type { CustomCSSProperties } from '../types'

interface SocialIconProps extends React.HTMLProps<HTMLSpanElement> {
    iconUrl: string
    iconStyle?: 'brand' | 'gray'
}

const SocialIcon = ({
    iconUrl,
    iconStyle = 'gray',
    ...props
}: SocialIconProps) => {
    const spanStyle: CustomCSSProperties = {
        '--icon-url': `url(${iconUrl})`,
    }

    const { className = '', ...rest } = props

    return (
        <span
            {...rest}
            style={spanStyle}
            className={` ${className} h-uui-3xl w-uui-3xl block ${
                iconStyle === 'gray'
                    ? 'bg-uui-fg-quinary-400 uui-hover-all:bg-uui-fg-quinary_hover bg-[image:none] [mask-image:var(--icon-url)] [mask-repeat:no-repeat] [mask-size:contain]'
                    : '[mask-image:none uui-hover-all:bg-[var(--icon-url)] bg-[image:var(--icon-url)] bg-contain bg-center bg-no-repeat'
            } `}
        />
    )
}

export default SocialIcon
