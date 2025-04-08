import { AnchorHTMLAttributes, useEffect } from 'react'

interface FooterLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const _FooterLink = ({ title, children, ...props }: FooterLinkProps) => {
    useEffect(() => {
        const hash = window.location.hash.substring(1)
        if (hash) {
            const section = document.getElementById(hash)
            if (section) {
                const offset = 100
                const elementPosition = section.getBoundingClientRect().top
                const offsetPosition = elementPosition + window.scrollY - offset

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                })
            }
        }
    }, [])
    return (
        <li className="">
            <a
                className="uui-text-md hover:text-uui-button-tertiary-fg_hover text-uui-button-tertiary-fg h-fit w-fit font-semibold antialiased"
                href={props.href}
                target={props.target}
            >
                {title}
            </a>
        </li>
    )
}

export default _FooterLink
