"use client";
import {
	Button,
	InputField,
	SectionContainer,
} from "@lilypad/shared-components";
import Head from "next/head";
import CenterHeadingSection from "@/components/CenterHeadingSection/CenterHeadingSection";
import _TeamMember from "@/components/_TeamMember/_TeamMember";
import {
	developmentPuzzlePiece01,
	educationBookOpen01,
	generalCheckHeart,
	generalEye,
	mapsAndTravelFlag02,
	mediaAndDevicesLightbulb05,
	usersUsers01,
} from "@frontline-hq/untitledui-icons";
import IconAtom from "@/components/IconAtom/IconAtom";
import ContentItem from "@/components/ContentItem/ContentItem";
import Image from "next/image";
import FeaturedIcon from "@/components/FeaturedIcon/FeaturedIcon";
import _FeatureText from "@/components/_FeatureText/_FeatureText";
import useFade from "../hooks/UseFade";
import { animated } from "@react-spring/web";
import { NewsletterForm } from "@/components/Forms/NewsletterForm";
import { CallToActions } from "@/components/FooterBlock/CallToActions";

export default function Teams() {
	const fadeLandingspage = useFade();
	return (
		<>
			<Head>
				<title>The Lilypad Network - About Us</title>
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
				<div className="relative w-full overflow-hidden bg-uui-bg-secondary pb-uui-2xl md:pb-uui-9xl  mx-auto">
					<SectionContainer className="max-w-uui-width-4xl pb-uui-7xl">
						<animated.div style={fadeLandingspage}>
							<CenterHeadingSection
								titleClassName="uui-display-lg [&&]:md:uui-display-2xl "
								className="[&&]:bg-transparent pt-uui-7xl lg:pt-uui-9xl [&&]:pb-uui-7xl relative"
								header="About Lilypad"
								title="We're on a Mission to Democratize AI, One Job at a Time."
								subtitle="A passionate team leveraging decentralized compute to make AI accessible and empowering for everyone."
							></CenterHeadingSection>
						</animated.div>
					</SectionContainer>
				</div>

				<div className="pt-uui-9xl relative">
					<Image
						alt="Lilypad geo shapes"
						className="absolute min-w-[40rem] top-0 left-1/2 -translate-y-[48.5%] -translate-x-1/2"
						width={1216}
						height={304}
						src="/geo-shapes-lilypad.svg"
					/>
					<SectionContainer className="pt-uui-7xl">
						<div className="max-w-[45rem] md:py-uui-9xl mx-auto">
							<ContentItem
								size="xl"
								heading="Our story"
								paragraph="A Story of Empowering AI for All, Fueled by Two Trailblazers"
							/>
							<ContentItem
								size="md"
								paragraph="Lilypad's journey began with Ally, a software engineer with a diverse background spanning cafes and cutting-edge tech, and Stanley, a bioinformatician driven by a passion for open science and accessible research. Together, they were frustrated by a common obstacle: brilliant minds with groundbreaking AI ideas, held back by the lack of access to powerful computing resources."
							/>
							<ContentItem
								size="md"
								paragraph="Ally, with her experience at IBM and Protocol Labs, and Stanley, with his decade of expertise in high-performance computing for medical research, knew there had to be a better way. They saw a world where innovation was bottlenecked, not by a lack of talent, but by the scarcity of affordable compute."
							/>
							<ContentItem
								size="md"
								paragraph="Their solution? Harness the untapped potential of billions of idle personal computers. Lilypad was born from this vision – a decentralized network democratizing access to AI compute. By leveraging blockchain technology and smart contracts, Lilypad connects those with spare compute to those who need it, ensuring transparency, security, and fair compensation for all."
							/>
							<ContentItem
								size="md"
								paragraph={`"We're creating a protocol where compute jobs are matched dynamically with nodes," explains Ally, "ensuring optimized resource allocation without middlemen overheads." This peer-to-peer marketplace for computational tasks significantly lowers the computing cost compared to traditional services.`}
							/>
							<ContentItem
								size="md"
								paragraph="For Stanley, Lilypad is a platform to advance his mission of applying machine learning to biological research. He envisions a future where Lilypad's computing power accelerates personalized medicine and genetic research breakthroughs, like drastically reducing the cost of genome sequencing."
							/>
							<ContentItem
								size="md"
								paragraph="Lilypad is a testament to Ally and Stanley's shared belief: the future of AI should be open, accessible, and community-driven. With their combined vision and expertise, they're making that future a reality, one hop at a time."
							/>
						</div>
					</SectionContainer>
				</div>

				<div className="bg-uui-bg-secondary pt-uui-9xl pb-uui-11xl">
					<SectionContainer>
						<div className="flex flex-col md:flex-row space-y-uui-7xl md:space-y-uui-none md:space-x-uui-9xl ">
							<div className="flex flex-col space-y-uui-xl md:space-y-uui-2xl">
								<h3 className=" uui-display-sm md:uui-display-md text-uui-text-primary-900 font-semibold">
									What we stand for
								</h3>
								<p className="text-uui-text-tertiary-600 font-regular uui-text-lg md:uui-text-xl antialiased">
									Powerful, self-serve product and growth
									analytics to help you convert, engage, and
									retain more users. Trusted by over 4,000
									startups.
								</p>
							</div>
							<div className="flex flex-col space-y-uui-4xl md:space-y-uui-6xl">
								<div className="flex space-x-uui-xl">
									<FeaturedIcon iconUrl={generalEye} />
									<div className="flex flex-col items-start justify-center spacing-y-uui-md ">
										<span className="text-uui-text-primary-900 font-semibold antialiased uui-text-lg md:uui-text-xl">
											Vision
										</span>
										<p className="uui-text-sm md:uui-text-md font-regular text-uui-text-tertiary-600  antialiased">
											To empower individuals and communities through decentralized AI and computing, fostering an open, equitable, and accessible technological ecosystem.
										</p>
									</div>
								</div>
								<div className="flex space-x-uui-xl">
									<FeaturedIcon
										iconUrl={mapsAndTravelFlag02}
									/>
									<div className="flex flex-col items-start justify-center spacing-y-uui-md">
										<span className="text-uui-text-primary-900 font-semibold antialiased uui-text-lg md:uui-text-xl">
											Mission
										</span>
										<p className="uui-text-sm md:uui-text-md font-regular text-uui-text-tertiary-600  antialiased">
											To democratize access to cutting-edge AI and computing resources by leveraging web3 technologies, fostering an inclusive, transparent, and decentralized ecosystem that empowers individuals and communities to innovate, collaborate, and drive positive change in the world.
										</p>
									</div>
								</div>
							</div>
						</div>
					</SectionContainer>
				</div>
				<div className="relative w-full -mt-uui-9xl  mx-auto flex justify-center items-center">
					<SectionContainer>
						{/* TODO: Add pic for middle section */}
						{/* <Image
							alt="Lilypad middle section picture"
							className=" "
							width={1216}
							height={516}
							src="/dummy-placeholder-about-us.svg"
						/> */}
					</SectionContainer>
				</div>
				<div className="bg-uui-bg-primary py-uui-6xl">
					<SectionContainer className="bg-uui-bg-primary">
						<CenterHeadingSection
							className="[&&]:bg-uui-bg-primary"
							title="Lilypad's Ethos"
							subtitle="Decentralized. Accessible. Collaborative."
						>
							<p className="w-1/2 text-center mx-auto py-4 uui-text-md antialiased text-uui-text-primary-900">
								Lilypad is built on the pillars of decentralization, accessibility, and collaboration, empowering a community-driven approach to AI innovation.
							</p>
						</CenterHeadingSection>

						<div className="flex flex-col space-y-uui-3xl items-center justify-center md:space-y-uui-none md:flex-row md:space-x-uui-4xl">
							<_FeatureText
								featuredIconUrl={mediaAndDevicesLightbulb05}
								title="Decentralized and Unstoppable"
								description="Lilypad is built on the bedrock of decentralization. Our network operates across a distributed array of GPUs, ensuring no single point of failure or control. This resilience safeguards against outages and censorship and fosters a permissionless environment where innovation can flourish without boundaries."
							/>
							<_FeatureText
								featuredIconUrl={generalCheckHeart}
								title="Accessible and Empowering"
								description="We believe that the power of AI should be accessible to all, not just a select few. Lilypad breaks down barriers to entry by providing affordable and scalable compute resources, enabling individuals, startups, and researchers alike to harness the potential of artificial intelligence."
							/>
							<_FeatureText
								featuredIconUrl={developmentPuzzlePiece01}
								title="Collaborative and Community Driven"
								description="Lilypad is more than just a platform; it's a thriving community. We embrace open-source principles and believe in the power of collective intelligence. By fostering collaboration and knowledge sharing, we're building a more inclusive and dynamic AI ecosystem where everyone can contribute and benefit."
							/>
						</div>
					</SectionContainer>
				</div>
				<SectionContainer>
					<div className="grid grid-cols-1 lg:grid-cols-2 py-uui-6xl gap-uui-3xl">
						<CallToActions />
					</div>
				</SectionContainer>
			</main>
		</>
	);
}