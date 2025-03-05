"use client";
import { Anchor, SectionContainer } from "@lilypad/shared-components";
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
import { TeamPageCmsInfo, HomePageCmsInfo } from "../hooks/strapi/types";
import _Advisor from "@/components/_TeamMember/_Advisor";
import { CallToActions } from "@/components/FooterBlock/CallToActions";
export default function Teams() {
	const { strapi: teamPageStrapi } = useContext(PageContext) as { strapi: TeamPageCmsInfo };
	const context = useContext(PageContext);
	const teamMembers = teamPageStrapi?.teamMembers || [];
	const advisors = teamPageStrapi?.advisors || [];
	const partners = teamPageStrapi?.partners || [];
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
				<link rel="icon" href="/lilypad-icon.svg" />
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
							header="The minds behind the mission"
							title="Meet the Lilypad team"
							subtitle="A multi-disciplinary, diverse team at the intersection of AI and crypto, building an accessible, community-driven network empowering next generation of open web innovation."
						></CenterHeadingSection>
					</SectionContainer>
				</div>
				<div className="bg-uui-bg-primary w-full">
					<SectionContainer>
						<div className="py-uui-2xl lg:pt-uui-9xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-uui-4xl gap-y-uui-2xl justify-items-center">
							{teamMembers.length > 0 ? (
								teamMembers
									.sort((a, b) => a.order - b.order)
									.map((member, index) => (
									<AnimateSpring key={index}>
										<_TeamMember
											src={
												member.Image
													? `https://webadmin.lilypad.team${member.Image}`
													: "/default-image.png"
											}
											name={member.Name}
											position={member.Title}
											description={member.blurb}
											experience={member.experience}
											socialIcons={
												[
												  member.twitter
													? { href: `https://twitter.com/${member.twitter}`, iconUrl: "/x.svg" }
													: null,
												  member.linkedin
													? { href: `https://linkedin.com/in/${member.linkedin}`, iconUrl: "/linkedin.svg" }
													: null,
												].filter((icon): icon is { href: string; iconUrl: string } => Boolean(icon))
											  }
										/>
									</AnimateSpring>
								))
							) : (
								<p>No team members found.</p>
							)}
						</div>
						<div className="mx-auto flex flex-col gap-4 py-uui-4xl text-center">
							<p className="text-uui-text-tertiary-600 uui-text-lg md:uui-text-xl font-regular">Want to learn more about our team?</p>
							<Anchor
								target="_blank"
								href="https://lilypadnetwork.notion.site/Press-Kit-d1d4e16d558d419c9bc502ade1404e17"
								className="[&&]:rounded-full w-full md:w-fit cursor-pointer mx-auto"
								color="color"
								destructive={false}
								hierarchy="primary"
								size="xl"
							>
								Visit Press Kit
							</Anchor>
						</div>
					</SectionContainer>
				</div>
				<div className="bg-uui-bg-secondary">
				  <SectionContainer>
				    <CenterHeadingSection
				      className="pt-uui-7xl lg:pt-uui-9xl"
				      title="Advisors"
				      subtitle="The Lilypad team is proud to be supported by a network of visionary advisors who share our passion for decentralized AI and are committed to helping us build a better future for the web."
				    ></CenterHeadingSection>
				    <animated.div
				      ref={teamSection2Ref}
				      style={teamSection2Springs}
				      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-uui-4xl gap-y-uui-2xl justify-items-center"
				    >
				      {advisors.length > 0 ? (
				      advisors
					  .sort((a, b) => a.order - b.order) // Sort by "order" property in ascending order
					  .map((advisor, index) => {
						return (
						  <_Advisor
							key={index}
							src={advisor.Image ? `https://webadmin.lilypad.team${advisor.Image}` : "/default-image.png"}
							name={advisor.Name}
							position={advisor.Title}
							experience={advisor.experience}
							socialIcons={[
							  { href: `https://twitter.com/${advisor.twitter}`, iconUrl: "/x.svg" },
							  { href: `https://linkedin.com/in/${advisor.linkedin}`, iconUrl: "/linkedin.svg" },
							]}
						  />
						);
					  })
					
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
				    subtitle="Meet the skilled front-end engineers and tokenomics experts who are instrumental in building Lilypad's future."
				  >
				    <animated.div
				      ref={teamSection3Ref}
				      style={teamSection3Springs}
				      className="pt-uui-7xl lg:pt-uui-9xl flex flex-row justify-center gap-x-uui-2xl gap-y-uui-6xl justify-items-center"
				    >
				      {partners.length > 0 ? (
				        partners.map((partner, index) => (
				          <_Advisor
				            key={index}
					        src={partner.Image ? `https://webadmin.lilypad.team${partner.Image}` : "/default-image.png"}
				            name={partner.Name}
				            position={partner.Title}
				            description={partner.blurb}
				            socialIcons={[
				              { href: partner.website, iconUrl: mapsAndTravelGlobe02 },
				            ]}
				          />
				        ))
				      ) : (
				        <p>No partners found.</p>
				      )}
				    </animated.div>
				  	</CenterHeadingSection>
					{/* TODO: Fix render bug */}
				  	{/* <SectionContainer className="pb-uui-7xl lg:pb-uui-8xl">
						<animated.div>
							<SocialProofSection />
						</animated.div>
					</SectionContainer> */}
				</SectionContainer>
				<SectionContainer>
					<div className="grid grid-cols-1 lg:grid-cols-2 py-uui-6xl gap-uui-3xl">
						<CallToActions />
					</div>
				</SectionContainer>
			</main>
		</>
	);
}