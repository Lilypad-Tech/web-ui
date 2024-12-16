import { SectionContainer } from "@lilypad/shared-components";
import Image from "next/image";
import { SocialIcon } from "@lilypad/shared-components";
import _FooterLinksHeader from "./_FooterLinksHeader/_FooterLinksHeader";
import _FooterLink from "./_FooterLink/_FooterLink";
import _FooterLinksColumn from "./_FooterLinksColumn/_FooterLinksColumn";
interface FooterProps extends React.HTMLProps<HTMLDivElement> {
	socialLinks: { href: string; iconUrl: string }[];
	footerIcon: { src: string; alt: string; href: string };
}
const Footer = ({ socialLinks, footerIcon }: FooterProps) => {
	return (
		<div className="pt-uui-9xl max-w-uui-width-xxs mx-auto md:mx-0 md:max-w-none ">
			<SectionContainer className="w-full flex flex-col md:justify-between items-center pt-uui-7xl pb-uui-6xl ">
				<div className="flex w-full flex-col space-y-uui-6xl md:space-y-uui-none md:flex-row md:justify-between items-start">
					<div className="flex flex-col space-y-uui-3xl ">
						<a className="" href={footerIcon.href}>
							<Image
								src={footerIcon.src}
								width={155}
								height={32}
								alt={footerIcon.alt}
							/>
						</a>
						<span className="uui-text-md font-regular antialiased text-uui-text-tertiary-600">
							Follow our journey on our{" "}
							<a
								href="/privacy-policy"
								target="_blank"
								className="underline underline-offset-4"
							>
								blog -{">"}
							</a>
						</span>
					</div>
					<div className="flex flex-col items-start md:items-start space-y-uui-6xl md:space-y-uui-none md:flex-row justify-center md:justify-between w-full md:w-auto md:space-x-uui-11xl  ">
						<_FooterLinksColumn>
							<_FooterLinksHeader title="Quick Links" />
							<_FooterLink
								href="#architecture"
								title="Architecture"
							/>
							<_FooterLink
								href="#whitepaper"
								title="Whitepaper"
							/>
						</_FooterLinksColumn>
						<_FooterLinksColumn>
							<_FooterLinksHeader title="Legal" />
							{/* TODO: Do we have a terms page? */}
							{/* <_FooterLink href="/terms" title="Terms" /> */}
							<_FooterLink href="/privacy-policy" title="Privacy" />
							<_FooterLink href="/privacy-policy#cookies" title="Cookies" />
						</_FooterLinksColumn>
					</div>
				</div>
			</SectionContainer>
			<SectionContainer className="w-full py-uui-6xl flex flex-col space-y-uui-6xl md:space-y-uui-none md:flex-row justify-center  md:justify-between items-center ">
				<span className="text-uui-fg-quarterary-500 text-uui-text-md font-regular antialiased">
					© 2024 Lilypad. All rights reserved.
				</span>
				<div className="flex space-x-uui-3xl">
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
	);
};
export default Footer;