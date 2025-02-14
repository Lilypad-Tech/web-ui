"use client";
import GroupBadge from "@/components/GroupBadge/GroupBadge";
import ProductCard from "@/components/ProductCard/ProductCard";
import {
	Anchor,
	SectionContainer,
} from "@lilypad/shared-components";
import { SocialIcon } from "@lilypad/shared-components";
import {
	arrowsArrowRight,
	generalCopy06,
	mapsAndTravelRocket02,
} from "@frontline-hq/untitledui-icons";
import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import CenterHeadingSection from "@/components/CenterHeadingSection/CenterHeadingSection";
import SocialProofSection from "@/components/SocialProofSection/SocialProofSection";
import BlogPostCard from "@/components/BlogPostCard/BlogPostCard";
import AnimateSpring from "@/components/AnimateSpring";
import { animated } from "@react-spring/web";
import useFade from "./hooks/UseFade";
import useFadeInView from "./hooks/UseFadeInView";
import { PageContext } from "./clientLayout";
import { HomePageCmsInfo } from "./hooks/strapi/types";
import RoadmapFull from "@/components/Roadmap/RoadmapFull";
import { CallToActions } from "@/components/FooterBlock/CallToActions";
// import { sendEmail } from "@/utils/sendEmail";
import { ToastContainer, toast } from 'react-toastify';
import dynamic from 'next/dynamic';
import ContentItem from "@/components/ContentItem/ContentItem";

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  {
    ssr: false,
    loading: () => <div>Loading...</div>
  }
);
export default function Home() {
	const [loading, setLoading] = useState<boolean>(false);
	const [email, setEmail] = useState("");

	const { strapi } = useContext(PageContext) as { strapi: HomePageCmsInfo };
	const socialLinks = [
		{ href: "https://twitter.com/lilypad_tech", iconUrl: "/x.svg" },
		{
			href: "https://discord.gg/ywSEGd3d84",
			iconUrl: "/discord.svg",
		},
		{
			href: "https://t.me/lilypadnetwork",
			iconUrl: "/telegram.svg",
		},
	];

	// const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	  
	// 	if (!email) {
	// 	  toast.warning("Please enter a valid email address.", {icon: false});
	// 	  return;
	// 	}
	  
	// 	setLoading(true);
	// 	try {
	// 	  const successMessage = await sendEmail(email, "CHANGE ME");
	// 	  toast.success(successMessage || "Successfully subscribed to the marketplace updates!", {icon: false});
	// 	  setEmail("");
	// 	} catch (error: any) {
	// 	  toast.error(error.message || "Failed to subscribe. Please try again.", {icon: false});
	// 	} finally {
	// 	  setLoading(false);
	// 	}
	// };

	const productCardsData = [
		{
			header: "Resource Providers",
			title: "Monetize Your Idle GPU",
			subtitle:
				"Contribute your idle GPU power and earn rewards by helping power decentralized AI and compute jobs on Lilypad.",
			anchorHref: "https://docs.lilypad.tech/lilypad/hardware-providers/run-a-node",
			anchorText: "Become a Resource Provider",
		},
		{
			header: "AI Module Builders",
			title: "Build and Monetize Your AI",
			subtitle:
				"Create and monetize your own AI modules and data sets, harness cost-effective and scalable compute.",
			anchorHref: "https://docs.lilypad.tech/lilypad",
			anchorText: "Start building",
		},
		{
			header: "Creator Community",
			title: "Build Faster, Together",
			subtitle:
				"Accelerate your AI projects. Train and deploy models faster and cheaper, plus connect with a thriving community of AI innovators.",
			anchorHref: "https://discord.gg/ywSEGd3d84",
			anchorText: "Join our community",
		},
	];

	const blogPostCardData = [
		{
			title: "DeSci",
			subtitle:
				"Empower decentralized science using Lilypad to process complex data and run AI-driven models to accelerate scientific breakthroughs.",
			anchorHref: "/desci",
			anchorText: "Learn more",
		},
		{
			title: "Gaming",
			subtitle:
				"Level up your gaming visions with Lilypad's decentralized compute, enabling developers to seamlessly run demanding game logic and AI at scale.",
			anchorHref: "/gaming",
			anchorText: "Learn more",
		},
		// TODO: Replace with AI agents. Enabling decentralized AI agents and agent workflows with verifiable compute 
		{
			title: "Social Networks",
			subtitle:
				"Build next-generation social platforms with advanced AI features like content moderation, recommendation engines, and fraud detection.",
			anchorHref: "/social-networks",
			anchorText: "Learn more",
		},
		{
			title: "Marketing",
			subtitle:
				"Drive hyper-personalized marketing campaigns and unlock real-time customer insights with AI-powered analytics.",
			anchorHref: "/marketing",
			anchorText: "Learn more",
		},
		{
			title: "IoT",
			subtitle:
				"Securely process and analyze massive amounts of IoT data at the edge, enabling real-time decision-making and intelligent automation.",
			anchorHref: "/iot",
			anchorText: "Learn more",
		},
		{
			title: "AI x Crypto",
			subtitle:
				"Unleash the power of cutting-edge AI and cryptography on Lilypad's decentralized network, delivering secure, scalable solutions that push the boundaries of innovation.",
			anchorHref: "/ai-crypto",
			anchorText: "Learn more",
		},
	];

	const capabilityCardData = [
		{
			header: "On-demand Generative AI",
			subtitle: "Accelerate your generative AI workflows with Lilypad's on-demand compute power. Execute jobs seamlessly from any platform, using smart contracts, APIs, or SDKs."
		},
		{
			header: "Model Fine-tuning Pipelines",
			subtitle: "Train your AI models on your own terms. Lilypad's fine-tuning pipelines offer secure data ingress/egress and advanced privacy measures like TEE and FHE."
		},
		{
			header: "ML Training via GPU Clusters",
			subtitle: "Ensure the integrity of your ML training with Lilypad's data provenance proofs. Train your models with confidence, knowing the origin and history of your data."
		}
	]

	function getScreenSize() {
		if (typeof window !== "undefined") {
			const width = window.innerWidth;
			if (width >= 1536) {
				return "2xl";
			} else if (width >= 1280) {
				return "xl";
			} else if (width >= 1024) {
				return "lg";
			} else if (width >= 768) {
				return "md";
			} else if (width >= 640) {
				return "sm";
			} else {
				return "xs";
			}
		}
	}

	const [screenSize, setScreenSize] = useState(getScreenSize);

	useEffect(() => {
		function handleResize() {
			setScreenSize(getScreenSize());
		}

		if (typeof window !== "undefined") {
			window.addEventListener("resize", handleResize);
			handleResize();

			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

	const copyEmail = "contact@lilypad.tech";

	const [copyState, setCopyState] = useState({
		iconUrl: generalCopy06,
		timeoutId: null,
	});

	const fade = useFade();

	const [missionStatementRef, missionStatementSprings] = useFadeInView();

	return (
		<>
			<Head>
				<title>
					The Lilypad Network - Revolutionizing Decentralized Computing
				</title>
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
				{/* TODO add twitter image and google image tag twitter:image & og:image */}
			</Head>

			<main className="overflow-hidden ">
				<ToastContainer position="top-right" autoClose={3000} theme={"dark"} />
				<SectionContainer>
					<div className="bg-uui-bg-primary flex flex-col lg:flex-row justify-between items-end px-uui-sm space-y-uui-7xl lg:space-y-uui-none lg:gap-uui-9xl lg:pl-uui-4xl pt-uui-7xl lg:pb-uui-9xl ">
						<div className="items-start w-full lg:w-fit justify-start flex flex-col lg:flex-grow mr-auto">
							<animated.div style={fade}>
								<GroupBadge
									onClick={() =>
										window.open(
											strapi?.badge_url,
											"_blank"
										)
									}
									badge="leading"
									icon={{
										url: arrowsArrowRight,
									}}
									color="brand"
									message={strapi?.badge_message}
									text={strapi?.badge_text}
									size={
										screenSize === "xl" ||
										screenSize === "2xl"
											? "lg"
											: "md"
									}
									theme="modern"
								/>
							</animated.div>

							<AnimateSpring>
								<div className="pt-uui-xl antialiased pb-uui-xl md:pb-uui-3xl flex flex-wrap gap-uui-md lg:flex-nowrap md:gap-uui-xl uui-display-md md:uui-display-xl font-semibold text-uui-text-primary-900 ">
									<h1 className="sm:whitespace-nowrap">
										AI that&apos;s
									</h1>
									<h1 className="text-uui-text-quarterary-500">
										truly
									</h1>
									<h1>open</h1>
								</div>
								<h5 className="pb-uui-4xl md:pb-uui-6xl uui-text-lg md:uui-text-xl font-regular text-uui-text-tertiary-600">
								Unlocking the possible. One job at a time
								</h5>
								<div className="flex flex-row gap-4">
									<Anchor
										target="_blank"
										href="https://discord.gg/ywSEGd3d84"
										className="[&&]:rounded-full w-full md:w-fit cursor-pointer"
										color="color"
										destructive={false}
										hierarchy="primary"
										size={
											screenSize === "xl" ||
											screenSize === "2xl"
												? "2xl"
												: "xl"
										}
									>
										Join our community
									</Anchor>
									<Anchor
										target="_blank"
										href="https://docs.lilypad.tech/lilypad"
										className="[&&]:rounded-full w-full md:w-fit cursor-pointer"
										color="color"
										destructive={false}
										hierarchy="primary"
										size={
											screenSize === "xl" ||
											screenSize === "2xl"
												? "2xl"
												: "xl"
										}
									>
										Get started
									</Anchor>
								</div>
							</AnimateSpring>

							<animated.div style={fade}>
								<div className="flex space-x-uui-xl pt-uui-7xl lg:pt-uui-9xl">
									{socialLinks.map((link) => (
										<a
											key={link.href}
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
										>
											<SocialIcon
												className="w-[2rem] h-[2rem] cursor-pointer"
												iconUrl={link.iconUrl}
											/>
										</a>
									))}
								</div>
							</animated.div>
						</div>
						<animated.div
							style={fade}
							className="relative w-full lg:w-1/2 lg:h-full max-w-2xl mr-auto pb-uui-7xl lg:pb-uui-none"
						>
						  {strapi?.header_lottie?.url ? (
						    <Player
						      autoplay
						      loop
						      src={`https://webadmin.lilypad.team${strapi.header_lottie.url}`}
						      style={{ width: '100%', height: '100%' }}
						    />
						  ) : (
						    <Image
						      width={500}
						      height={500}
						      alt={strapi?.header_image_alt || "Default Image"}
						      src={
						        strapi?.header_image_url
						          ? `https://webadmin.lilypad.team${strapi.header_image_url}`
						          : "/lilypad-fill.png" // Default image if none exists
						      }
						    />
						  )}
						</animated.div>
					</div>
				</SectionContainer>
				<SectionContainer className="pb-uui-3xl lg:pb-uui-8xl">
					<animated.div style={fade}>
						<SocialProofSection strapi={strapi}/>
					</animated.div>
				</SectionContainer>
				<div className="bg-uui-bg-secondary p-uui-7xl lg:py-uui-9xl">
					{/* <SectionContainer>
						<div className="text-center mx-auto max-w-uui-width-2xl">
							<animated.h3
								className="text-uui-text-brand-secondary-700 font-semibold antialiased uui-text-md md:uui-text-lg"
								style={missionStatementSprings}
								ref={missionStatementRef}
							>
								Mission Statement
							</animated.h3>
							<animated.h5
								className="text-uui-text-tertiary-600 uui-text-lg md:uui-text-xl font-normal pt-uui-lg"
								style={missionStatementSprings}
								ref={missionStatementRef}
							>
								{strapi?.mission_statement}
							</animated.h5>
						</div>
					</SectionContainer> */}
					<SectionContainer className="">
						{/* <div className="max-w-[45rem] md:py-uui-9xl mx-auto"> */}
						<div className="max-w-[45rem] mx-auto">
							<ContentItem
								size="xl"
								heading="Our Story"
								paragraph="A Story of Two Trailblazers Empowering AI for All"
							/>
							<ContentItem
								size="md"
								paragraph="Lilypad's journey began with Ally, a software engineer with a diverse background in cutting edge technologies, and Stanley, a bioinformatician driven by a passion for open science and accessible research. They recognize that there is a wealth of groundbreaking AI ideas who are held back by the lack of access to powerful computing resources."
							/>
							<ContentItem
								size="md"
								paragraph="Ally, with her background in engineering at IBM and Protocol Labs, and Stanley with a decade of expertise in high-performance computing for medical research, saw a world where innovation was bottlenecked, not by a lack of talent, but by the scarcity of affordable compute."
							/>
							<ContentItem
								size="md"
								paragraph="The solution? Harness the untapped potential of billions of idle computers across the globe."
							/>
							<ContentItem
								size="md"
								paragraph="Lilypad was born from this vision – a decentralized network democratizing access to AI compute. By leveraging blockchain technology and open communities, Lilypad connects those with spare compute to those who need it, ensuring transparency, security, and fair compensation for all."
							/>
							<ContentItem
								size="md"
								paragraph={`"We're creating a protocol where compute jobs are matched dynamically with nodes, ensuring optimized resource allocation without middlemen and overhead." `} 
							/>
							<ContentItem
								size="md"
								paragraph="Lilypad's peer-to-peer marketplace for computational tasks significantly lowers the computing cost compared to traditional services."
							/>
							<ContentItem
								size="md"
								paragraph="Stanley is working on Lilypad as a platform to advance his mission of applying machine learning to biological research. He envisions a future where Lilypad's computing power accelerates medical and genetic research breakthroughs."
							/>
							<ContentItem
								size="md"
								paragraph="Lilypad is a testament to Ally and Stanley's shared belief: the future of AI should be open, accessible, and community-driven. With their combined vision and expertise, they're making that future a reality, one hop at a time."
							/>
						</div>
					</SectionContainer>
					<br/>
					<br/>
				</div>

				<SectionContainer id="products">
					<CenterHeadingSection
						className="[&&]:bg-uui-bg-primary"
						title="How to use Lilypad"
						subtitle="Connecting those with idle compute to those who need it, creating a decentralized marketplace for AI compute."
						header="Decentralized. Accessible. Collaborative."
					><br/>
						<div className="flex mt-uui-7xl  flex-col lg:flex-row space-y-uui-4xl lg:space-y-uui-none lg:space-x-uui-4xl">
							{productCardsData.map((card, index) => (
								<ProductCard
									key={index}
									header={card.header}
									title={card.title}
									subtitle={card.subtitle}
								>
									<Anchor
										color="color"
										destructive={false}
										hierarchy="primary"
										size="xl"
										href={card.anchorHref}
										target="_blank"
									>
										{card.anchorText}
									</Anchor>
								</ProductCard>
							))}
						</div>
						<br/>
						<br/>
					</CenterHeadingSection>
					
				</SectionContainer>
				<SectionContainer id="our-network">
				<CenterHeadingSection
					className="[&&]:bg-uui-bg-primary"
					title="Lilypad Network"
					subtitle="Lilypad offers a seamless and efficient way to access the computing power you need for AI and other demanding tasks—no need to invest in expensive hardware or navigate complex cloud setups. Simply submit your job; our decentralized network connects you with the best available resources. Benefit from competitive pricing, secure transactions, and a transparent process, all powered by blockchain technology."
					header="Our network explained"
				>
					<Image
						alt="Lilypad how it works"
						className="w-full rounded-lg py-uui-4xl lg:py-uui-5xl hidden md:block"
						layout="responsive"
						width={1216}
						height={304}
						src="/infographic.jpeg"
					/>
				</CenterHeadingSection>
				</SectionContainer>
				{/* TODO: Remove comment */}
				{/* <CenterHeadingSection
					title="What can I build on Lilypad"
					subtitle="Create cutting-edge AI models, immersive game worlds, and transformative decentralized applications on our limitless, community-powered compute network."
				>
					<SectionContainer>
						<div className="grid mt-uui-7xl grid-rows-6  md:grid-rows-none md:grid-cols-2 lg:grid-cols-3 gap-uui-4xl ">
							{blogPostCardData.map((card, index) => (
								<BlogPostCard
									href="/blog/1"
									key={index}
									title={card.title}
									subtitle={card.subtitle}
									imageSrc={`/dummy-image-${
										(index % 3) + 1
									}.png`}
								></BlogPostCard>
							))}
						</div>
						<div className="flex items-center w-full justify-center pt-uui-7xl">
							<Anchor
								className="w-fit cursor-pointer"
								target="_blank"
								href="https://docs.lilypad.tech/lilypad"
								size={"xl"}
								destructive={false}
								color={"color"}
								hierarchy={"secondary"}
								icon={{
									type: "icon",
									leading: mapsAndTravelRocket02,
								}}
							>
								Start Building
							</Anchor>
						</div>
					</SectionContainer>
				</CenterHeadingSection> */}
				<SectionContainer id="capabilities">
					<CenterHeadingSection
						className="[&&]:bg-uui-bg-primary"
						title="Unlocking the possible. One job at a time."
						subtitle="Accelerate your AI development with Lilypad. Execute generative AI, fine-tune models with privacy, and train on powerful GPU clusters, all on one decentralized platform."
						header="Our Capabilities"
					>
						<div className="flex mt-uui-7xl  flex-col lg:flex-row space-y-uui-4xl lg:space-y-uui-none lg:space-x-uui-4xl">
								{capabilityCardData.map((card, index) => (
									<ProductCard
										key={index}
										header={card.header}
										subtitle={card.subtitle}
									>
									</ProductCard>
								))}
							</div>
					</CenterHeadingSection>
				</SectionContainer>
				{/* TODO: Add blog posts */}
				{/* <SectionContainer id="early-access">
					<CenterHeadingSection
						className="[&&]:bg-uui-bg-primary"
						title="Shape the Future of AI with Us"
						subtitle="Be among the first to explore, build, and share powerful AI modules in Lilypad’s Module Marketplace"
					>
						<form
							className="mx-auto py-2 lg:w-1/2 space-y-uui-2xl md:space-y-uui-none md:flex md:space-x-uui-xl w-full"
							onSubmit={handleSubscribe}
						>
							<InputField
								inputSize="md"
								destructive={false}
								placeholder="Enter your e-mail"
								className="flex-1"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							>
								{{
									hint: (
										<span>
											We care about your data in our{" "}
											<a
												href="/privacy"
												target="_blank"
												className="underline underline-offset-4"
											>
												privacy policy.
											</a>
										</span>
									),
								}}
							</InputField>
							<Button
								type="submit"
								color="color"
								destructive={false}
								hierarchy="primary"
								size="md"
								className="[&&]:rounded-full [&&]:h-fit mx-auto"
								disabled={loading}
							>
								 {loading ? "Submitting..." : "Get Early Access"}
							</Button>
						</form>
					</CenterHeadingSection>
				</SectionContainer> */}
				<SectionContainer id="roadmap">
					<CenterHeadingSection
						className="[&&]:bg-uui-bg-primary"
						title="Roadmap"
					>
						<div className="w-full flex items-center justify-center pt-uui-7xl ">
							<RoadmapFull />
						</div>
					</CenterHeadingSection>
				</SectionContainer>

				<SectionContainer id="incentivenet" className="mx-auto py-2 lg:w-1/2 space-y-uui-2xl md:space-y-uui-none md:flex md:space-x-uui-xl w-full">
				<CenterHeadingSection
					className="[&&]:bg-uui-bg-primary mx-auto text-center"
					title="Lilypad IncentiveNet"
					subtitle="Earn rewards for powering the future of decentralized AI with Lilypad&apos;s IncentiveNet."
				>
					<Anchor
						target="_blank"
						href="https://docs.lilypad.tech/lilypad"
						className="[&&]:rounded-full w-full md:w-fit cursor-pointer mx-auto my-4"
						color="color"
						destructive={false}
						hierarchy="primary"
						size={screenSize === "xl" || screenSize === "2xl" ? "2xl" : "xl"}
					>
						Get started
					</Anchor>
					<animated.div style={fade} className="flex justify-center mx-auto">
						<div className="flex space-x-uui-xl">
							{socialLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
								>
									<SocialIcon
										className="w-[2rem] h-[2rem] cursor-pointer"
										iconUrl={link.iconUrl}
									/>
								</a>
							))}
						</div>
					</animated.div>
				</CenterHeadingSection>
				</SectionContainer>

				<SectionContainer>
					<div className="grid grid-cols-1 lg:grid-cols-2 pt-uui-6xl gap-uui-3xl">
						<CallToActions />
					</div>
				</SectionContainer>
			</main>
		</>
	);
}