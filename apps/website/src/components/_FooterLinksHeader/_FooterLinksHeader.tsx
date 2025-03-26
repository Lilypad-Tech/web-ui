import { LiHTMLAttributes } from 'react'

interface FooterLinksHeaderProps extends LiHTMLAttributes<HTMLLIElement> {
    title: string
}

const _FooterLinksHeader = ({ title, ...props }: FooterLinksHeaderProps) => {
    return (
        <li
            {...props}
            className={`${props.className} uui-text-sm text-uui-text-quarterary-500 font-semibold antialiased`}
        >
            {title}
        </li>
    )
}

export default _FooterLinksHeader
