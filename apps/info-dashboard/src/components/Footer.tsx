import { SectionContainer } from '@lilypad/shared-components'
import Image from 'next/image'
import { SocialIcon } from '@lilypad/shared-components'
interface FooterProps extends React.HTMLProps<HTMLDivElement> {
    socialLinks: { href: string; iconUrl: string }[]
    footerIcon: { src: string; alt: string; href: string }
}

const Footer = ({ socialLinks, footerIcon }: FooterProps) => {
    return (
        <div className="pt-uui-9xl">
            <div className="py-uui-6xl">
                <SectionContainer className="lg:space-y-uui-none space-y-uui-6xl flex w-full flex-col items-center text-white md:justify-between lg:flex-row">
                    <div className="space-x-uui-3xl flex">
                        {socialLinks?.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SocialIcon iconUrl={link.iconUrl} />
                            </a>
                        ))}
                    </div>
                    <a className="" href={footerIcon.href}>
                        <Image
                            src={footerIcon.src}
                            width={155}
                            height={32}
                            alt={footerIcon.alt}
                        />
                    </a>
                    <span className="text-uui-fg-quarterary-500 text-uui-text-md font-regular antialiased">
                        © 2024 Lilypad. All rights reserved.
                    </span>
                </SectionContainer>
            </div>
        </div>
    )
}

export default Footer
