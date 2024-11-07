"use client";
import { SectionContainer } from "@lilypad/shared-components";
import Head from "next/head";
import CenterHeadingSection from "@/components/CenterHeadingSection/CenterHeadingSection";
import _TeamMember from "@/components/_TeamMember/_TeamMember";
import { mapsAndTravelGlobe02 } from "@frontline-hq/untitledui-icons";
import SocialProofSection from "@/components/SocialProofSection/SocialProofSection";
import Image from "next/image";
import useFadeInView from "../hooks/UseFadeInView";
import { animated } from "@react-spring/web";
import AnimateSpring from "@/components/AnimateSpring";
import useFade from "../hooks/UseFade";
import { useContext } from "react";
import { PageContext } from "../clientLayout";
import { TeamPageCmsInfo } from "../hooks/strapi/types";

export default function Teams() {

	const { strapi } = useContext(PageContext) as { strapi: TeamPageCmsInfo };

	const teamMembers = strapi?.teamMembers || [];
	const advisors = strapi?.advisors || [];
	const partners = strapi?.partners || [];

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

	const [teamSection2Ref, teamSection2Springs] = useFadeInView();
	const [teamSection3Ref, teamSection3Springs] = useFadeInView();
	const fadeLandingspage = useFade();

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
					<div className="absolute top-0 min-w-uui-width-2xl -translate-x-[25%] sm:-translate-x-uui-none -translate-y-[8%]  left-0 w-full h-[40vh] -z-10">
						<animated.div style={fadeLandingspage}>
							<Image
								layout="responsive"
								width={1920}
								height={1080}
								src="/lilypad-background.svg"
								alt="lilypads"
								className="object-cover object-top w-full h-full"
							/>
						</animated.div>
					</div>

					<SectionContainer>
						<CenterHeadingSection
							titleClassName="[&&]:uui-display-md [&&]:md:uui-display-lg "
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
							{teamMembers.length > 0 ? (
								teamMembers.map((member, index) => (
									<AnimateSpring key={index}>
										<_TeamMember
											src={
												member.Image && member.Image.url
													? `https://webadmin.lilypad.team${member.Image.url}`
													: "/default-image.png" // Use a default image if none exists
											}
											title={member.Name}
											position={member.Title}
											description={member.blurb}
											socialIcons={[
												{ href: `https://twitter.com/${member.twitter}`, iconUrl: "/x.svg" },
												{ href: `https://linkedin.com/in/${member.linkedin}`, iconUrl: "/linkedin.svg" },
												{ href: member.website, iconUrl: mapsAndTravelGlobe02 },
											]}
										/>
									</AnimateSpring>
								))
							) : (
								<p>No team members found.</p>
							)}
						</div>
					</SectionContainer>

				</div>
				<div className="bg-uui-bg-secondary">
				  <SectionContainer>
				    <CenterHeadingSection
				      className="py-uui-7xl lg:py-uui-9xl"
				      title="Advisors"
				      subtitle="Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."
				    ></CenterHeadingSection>

				    <animated.div
				      ref={teamSection2Ref}
				      style={teamSection2Springs}
				      className="pb-uui-7xl lg:pb-uui-9xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-uui-4xl gap-y-uui-6xl justify-items-center"
				    >
				      {advisors.length > 0 ? (
				        advisors.map((advisor, index) => (
				          <_TeamMember
				            key={index}
				            src={advisor.Image?.url ? `https://webadmin.lilypad.team${advisor.Image.url}` : "/default-image.png"}
				            title={advisor.Name}
				            position={advisor.Title}
				            description={advisor.blurb}
				            socialIcons={[
				              { href: `https://twitter.com/${advisor.twitter}`, iconUrl: "/x.svg" },
				              { href: `https://linkedin.com/in/${advisor.linkedin}`, iconUrl: "/linkedin.svg" },
				              { href: advisor.website, iconUrl: mapsAndTravelGlobe02 },
				            ]}
				          />
				        ))
				      ) : (
				        <p>No advisors found.</p>
				      )}
				    </animated.div>
				  </SectionContainer>
				</div>

				<SectionContainer>
				  <CenterHeadingSection
				    className="[&&]:bg-uui-bg-primary pt-uui-7xl lg:pt-uui-9xl"
				    title="Partners"
				    subtitle="Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."
				  >
				    <animated.div
				      ref={teamSection3Ref}
				      style={teamSection3Springs}
				      className="pt-uui-7xl lg:pt-uui-9xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-uui-4xl gap-y-uui-6xl justify-items-center"
				    >
				      {partners.length > 0 ? (
				        partners.map((partner, index) => (
				          <_TeamMember
				            key={index}
					        src={partner.Image?.url ? `https://webadmin.lilypad.team${partner.Image.url}` : "/default-image.png"}
				            title={partner.Name}
				            position={partner.Title}
				            description={partner.blurb}
				            socialIcons={[
				              { href: `https://twitter.com/${partner.twitter}`, iconUrl: "/x.svg" },
				              { href: `https://linkedin.com/in/${partner.linkedin}`, iconUrl: "/linkedin.svg" },
				              { href: partner.website, iconUrl: mapsAndTravelGlobe02 },
				            ]}
				          />
				        ))
				      ) : (
				        <p>No partners found.</p>
				      )}
				    </animated.div>
				  </CenterHeadingSection>
				</SectionContainer>

			</main>
		</>
	);
}
