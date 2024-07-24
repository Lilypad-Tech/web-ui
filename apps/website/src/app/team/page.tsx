"use client";
import { SectionContainer } from "@lilypad/shared-components";
import Head from "next/head";
import CenterHeadingSection from "@/components/CenterHeadingSection/CenterHeadingSection";
import _TeamMember from "@/components/_TeamMember/_TeamMember";
import { mapsAndTravelGlobe02 } from "@frontline-hq/untitledui-icons";
import SocialProofSection from "@/components/SocialProofSection/SocialProofSection";
import Image from "next/image";

export default function Teams() {
	const socialLinks = [
		{ href: "twitter.com", iconUrl: "/x.svg" },

		{
			href: "linkedin.com",
			iconUrl: "/linkedin.svg",
		},
		{
			href: "https://frontline.codes",
			iconUrl: mapsAndTravelGlobe02,
		},
	];

	const trustedByArray = [
		{ src: "/bacalhau.svg", alt: "Bacalhau" },
		{ src: "/bacalhau.svg", alt: "Filecoin" },
		{ src: "/bacalhau.svg", alt: "Holon" },
		{ src: "/bacalhau.svg", alt: "Protocol Labs" },
		{ src: "/bacalhau.svg", alt: "Rare Compute" },
		{ src: "/bacalhau.svg", alt: "Spheron" },
		{ src: "/bacalhau.svg", alt: "Swan" },
	];

	const teamMembers = [
		{
			src: "/dummy-image-1.png",
			title: "Olivia Rhye",
			position: "Founder & CEO",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			socialIcons: socialLinks,
		},
		{
			src: "/dummy-image-2.png",
			title: "Phoenix Baker",
			position: "Chief Marketing Officer",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			socialIcons: socialLinks,
		},
		{
			src: "/dummy-image-3.png",
			title: "Liam James",
			position: "Chief Technology Officer",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			socialIcons: socialLinks,
		},
		{
			src: "/dummy-image-1.png",
			title: "Olivia Rhye",
			position: "Founder & CEO",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			socialIcons: socialLinks,
		},
		{
			src: "/dummy-image-2.png",
			title: "Phoenix Baker",
			position: "Chief Marketing Officer",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			socialIcons: socialLinks,
		},
		{
			src: "/dummy-image-3.png",
			title: "Liam James",
			position: "Chief Technology Officer",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			socialIcons: socialLinks,
		},
		{
			src: "/dummy-image-2.png",
			title: "Phoenix Baker",
			position: "Chief Marketing Officer",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			socialIcons: socialLinks,
		},
		{
			src: "/dummy-image-1.png",
			title: "Phoenix Baker",
			position: "Chief Marketing Officer",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			socialIcons: socialLinks,
		},
	];
	return (
		<>
			<Head>
				<title>The Lilypad Network - Meet our innovators</title>
				<meta
					name="description"
					content="Discover The Lilypad Network, your gateway to efficient, sustainable, and decentralized computing."
				/>
				<meta name="robots" content="index, follow" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="canonical" href="/" />
				<meta
					property="og:title"
					content="The Lilypad Network - Revolutionizing Decentralized Computing"
				/>
				<meta
					property="og:description"
					content="Join The Lilypad Network and experience the power of decentralized computing."
				/>
				<meta property="og:url" content="/" />
				<meta property="og:type" content="website" />
			</Head>

			<main className="overflow-hidden relative ">
				<div className="relative w-full overflow-hidden  max-w-uui-width-4xl mx-auto">
					<div className="absolute top-0 min-w-uui-width-2xl -translate-x-[25%] sm:-translate-x-uui-none -translate-y-[10%] md:-translate-y-[12%]  left-0 w-full h-[40vh] -z-10">
						<Image
							layout="responsive"
							width={1920}
							height={1080}
							src="/lilypad-background.svg"
							alt="lilypads"
							className="object-cover object-top w-full h-full"
						/>
					</div>

					<SectionContainer>
						<CenterHeadingSection
							className="[&&]:bg-transparent pt-uui-7xl lg:pt-uui-9xl relative"
							header="Lilypad team"
							title="Meet our innovators"
							subtitle="Learn more about the company and the world-class team behind Lilypad."
						></CenterHeadingSection>
					</SectionContainer>
				</div>

				<div className="bg-uui-bg-primary w-full">
					<SectionContainer>
						<div className="py-uui-7xl lg:py-uui-9xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-uui-4xl gap-y-uui-6xl justify-items-center">
							{teamMembers.map((member, index) => (
								<_TeamMember
									key={index}
									src={member.src}
									title={member.title}
									position={member.position}
									description={member.description}
									socialIcons={member.socialIcons}
								/>
							))}
						</div>
					</SectionContainer>
				</div>
				<div className="bg-uui-bg-secondary">
					<SectionContainer>
						<CenterHeadingSection
							className=" py-uui-7xl lg:py-uui-9xl"
							title="Advisors"
							subtitle="Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."
						></CenterHeadingSection>

						<div className="pb-uui-7xl lg:pb-uui-9xl  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-uui-4xl gap-y-uui-6xl justify-items-center">
							{teamMembers.map((member, index) => (
								<_TeamMember
									key={index}
									src={member.src}
									title={member.title}
									position={member.position}
									description={member.description}
									socialIcons={member.socialIcons}
								/>
							))}
						</div>
					</SectionContainer>
				</div>
				<SectionContainer>
					<CenterHeadingSection
						className="[&&]:bg-uui-bg-primary  pt-uui-7xl lg:pt-uui-9xl"
						title="Partners"
						subtitle="Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."
					>
						<div className="pt-uui-7xl lg:pt-uui-9xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-uui-4xl gap-y-uui-6xl justify-items-center">
							{teamMembers.map((member, index) => (
								<_TeamMember
									key={index}
									src={member.src}
									title={member.title}
									position={member.position}
									description={member.description}
									socialIcons={member.socialIcons}
								/>
							))}
						</div>
					</CenterHeadingSection>
				</SectionContainer>
				<div className="bg-uui-bg-secondary py-uui-4xl lg:py-uui-7xl">
					<SectionContainer>
						<SocialProofSection
							trustedByArray={trustedByArray}
							title="Supported by"
						></SocialProofSection>
					</SectionContainer>
				</div>
			</main>
		</>
	);
}
