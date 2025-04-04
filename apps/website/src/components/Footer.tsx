import { SectionContainer } from '@lilypad/shared-components'
import Image from 'next/image'
import { SocialIcon } from '@lilypad/shared-components'
import _FooterLinksHeader from './_FooterLinksHeader/_FooterLinksHeader'
import _FooterLink from './_FooterLink/_FooterLink'
import _FooterLinksColumn from './_FooterLinksColumn/_FooterLinksColumn'
interface FooterProps extends React.HTMLProps<HTMLDivElement> {
    socialLinks: { href: string; iconUrl: string }[]
    footerIcon: { src: string; alt: string; href: string }
}
const Footer = ({ socialLinks, footerIcon }: FooterProps) => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className="pt-uui-9xl max-w-uui-width-xxs mx-auto md:mx-0 md:max-w-none">
            <SectionContainer className="pt-uui-7xl pb-uui-6xl flex w-full flex-col items-center md:justify-between">
                <div className="space-y-uui-6xl md:space-y-uui-none flex w-full flex-col items-start md:flex-row md:justify-between">
                    <div className="space-y-uui-3xl flex flex-col">
                        <a className="" href={footerIcon.href}>
                            <Image
                                src={footerIcon.src}
                                width={155}
                                height={32}
                                alt={footerIcon.alt}
                            />
                        </a>
                        <span className="uui-text-md font-regular text-uui-text-tertiary-600 antialiased">
                            Follow our journey on our{' '}
                            <a
                                href="https://blog.lilypadnetwork.org/"
                                target="_blank"
                                className="underline underline-offset-4"
                            >
                                blog -{'>'}
                            </a>
                        </span>
                    </div>
                    <div className="space-y-uui-6xl md:space-y-uui-none md:space-x-uui-11xl flex w-full flex-col items-start justify-center md:w-auto md:flex-row md:items-start md:justify-between">
                        <_FooterLinksColumn>
                            <_FooterLinksHeader title="Quick Links" />
                            <_FooterLink
                                title="Bounty Board"
                                href="https://lilypadnetwork.notion.site/bounty-board"
								target='_blank'
                            />
							<_FooterLink
                                title="Press Kit"
                                href="https://lilypadnetwork.notion.site/press-kit"
								target='_blank'
                            />
                            {/* TODO: Uncomment when litepaper is ready */}
                            {/* <_FooterLink
								href="#whitepaper"
								title="Whitepaper"
							/> */}
                        </_FooterLinksColumn>
                        <_FooterLinksColumn>
                            <_FooterLinksHeader title="Legal" />
                            <_FooterLink
                                href="/legal#privacy"
                                title="Privacy Policy"
                            />
                            <_FooterLink
                                href="/legal#terms"
                                title="Terms of Use"
                            />
                            <_FooterLink
                                href="/legal#cookies"
                                title="Cookies"
                            />
                        </_FooterLinksColumn>
                    </div>
                </div>
            </SectionContainer>
            <SectionContainer className="py-uui-6xl space-y-uui-6xl md:space-y-uui-none flex w-full flex-col items-center justify-center md:flex-row md:justify-between">
                <span className="text-uui-fg-quarterary-500 text-uui-text-md font-regular antialiased">
                    © {year} Lilypad. All rights reserved.
                </span>
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
            </SectionContainer>
        </div>
    )
}
export default Footer
