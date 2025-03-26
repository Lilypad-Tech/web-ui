import { ButtonHTMLAttributes } from 'react'

interface AvatarWrapperProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    children?: AvatarWrapperChildren
}

interface AvatarWrapperChildren {
    default: React.ReactNode
}

const AvatarWrapper = ({ children, ...props }: AvatarWrapperProps) => {
    return (
        <button
            onClick={props.onClick}
            {...props}
            className={` ${
                props.onClick != undefined
                    ? 'uui-focus-all:ring-uui-avatar-focus-border pointer-events-auto'
                    : 'pointer-events-none'
            } block ring-[0.25rem] ring-transparent ${
                props.className
            } relative h-fit w-fit flex-none rounded-full outline-none disabled:pointer-events-none`}
        >
            {children?.default}
        </button>
    )
}

export default AvatarWrapper
