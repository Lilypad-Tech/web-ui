import { SectionContainer } from "@lilypad/shared-components";
import Image from "next/image";
import { SocialIcon } from "@lilypad/shared-components";
interface FooterProps extends React.HTMLProps<HTMLDivElement> {
	socialLinks: { href: string; iconUrl: string }[];
	footerIcon: { src: string; alt: string; href: string };
}

const Footer = ({ socialLinks, footerIcon }: FooterProps) => {
	return (
		<div className="pt-uui-9xl ">
			<SectionContainer className="w-full flex flex-col md:justify-between items-center pt-uui-7xl pb-uui-6xl ">
				<div className="flex w-full flex-col space-y-uui-3xl md:space-y-uui-none md:flex-row md:justify-between items-center md:items-start">
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
								href="/privacy"
								target="_blank"
								className="underline underline-offset-4"
							>
								blog -{">"}
							</a>
						</span>
					</div>
					<div className="flex items-start justify-center md:justify-between w-full md:w-auto space-x-uui-11xl  ">
						<nav>
							<ul className="flex flex-col space-y-uui-lg ">
								<li className="font-semibold uui-text-sm text-uui-text-quarterary-500 antialiased">
									Quick Links
								</li>
								<li>
									<a
										className="uui-text-md font-semibold hover:text-uui-button-tertiary-fg_hover text-uui-button-tertiary-fg antialiased "
										href="#architecture"
									>
										Architecture
									</a>
								</li>
								<li>
									<a
										className="uui-text-md font-semibold hover:text-uui-button-tertiary-fg_hover text-uui-button-tertiary-fg antialiased "
										href="#whitepaper"
									>
										Whitepaper
									</a>
								</li>
							</ul>
						</nav>
						<nav>
							<ul className="flex flex-col space-y-uui-lg ">
								<li className="font-semibold uui-text-sm text-uui-text-quarterary-500 antialiased">
									Legal
								</li>
								<li>
									<a
										className="uui-text-md font-semibold hover:text-uui-button-tertiary-fg_hover text-uui-button-tertiary-fg antialiased "
										href="#terms"
									>
										Terms
									</a>
								</li>
								<li>
									<a
										className="uui-text-md font-semibold hover:text-uui-button-tertiary-fg_hover text-uui-button-tertiary-fg antialiased "
										href="#privacy"
									>
										Privacy
									</a>
								</li>
								<li>
									<a
										className="uui-text-md font-semibold hover:text-uui-button-tertiary-fg_hover text-uui-button-tertiary-fg antialiased "
										href="#cookies"
									>
										Cookies
									</a>
								</li>
							</ul>
						</nav>
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
