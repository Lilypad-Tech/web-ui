import { AnchorHTMLAttributes } from 'react'
import Image from 'next/image'
import IconAtom from '../IconAtom/IconAtom'

interface BlogPostCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    title: string
    subtitle: string
    imageSrc: string
}

const BlogPostCard = ({
    title,
    subtitle,
    imageSrc,
    children,
    ...props
}: BlogPostCardProps) => {
    return (
        <a
            {...props}
            href={props.href}
            className="rounded-uui-2xl border-uui-1 border-uui-border-secondary bg-uui-bg-primary group w-full"
        >
            <div className="rounded-uui-2xl relative h-[12.5rem] w-full overflow-hidden lg:h-[15rem]">
                <Image
                    className="rounded-uui-2xl h-full w-full transform object-cover transition-transform duration-300 group-hover:scale-110"
                    alt="dummy"
                    src={imageSrc}
                    fill
                />
            </div>
            <div className="space-y-uui-lg md:space-y-uui-md p-uui-3xl flex flex-col">
                {/* title */}
                <div className="flex w-full items-start justify-between">
                    {title && (
                        <h3 className="uui-text-xl md:uui-display-xs text-uui-text-primary-900 flex-grow font-semibold antialiased">
                            {title}
                        </h3>
                    )}
                    <IconAtom
                        className="flex-shrink-0 transition-transform duration-100 group-hover:-translate-y-1/4 group-hover:translate-x-1/4"
                        iconUrl="/arrow-up-right.svg"
                    ></IconAtom>
                </div>
                {/* subtitle */}
                {subtitle && (
                    <span className="text-uui-text-tertiary-600 font-regular uui-text-md antialiased">
                        {subtitle}
                    </span>
                )}
            </div>
            {children}
        </a>
    )
}

export default BlogPostCard
