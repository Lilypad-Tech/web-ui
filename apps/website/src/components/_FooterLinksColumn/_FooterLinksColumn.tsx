import { HTMLAttributes, LiHTMLAttributes } from 'react'

interface _FooterLinksColumnProps extends HTMLAttributes<HTMLUListElement> {}

const _FooterLinksColumn = ({
    children,
    ...props
}: _FooterLinksColumnProps) => {
    return (
        <nav {...props}>
            <ul className="space-y-uui-lg flex flex-col">{children} </ul>{' '}
        </nav>
    )
}

export default _FooterLinksColumn
