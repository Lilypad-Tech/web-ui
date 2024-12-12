"use client";
import GroupBadge from "@/components/GroupBadge/GroupBadge";
import ProductCard from "@/components/ProductCard/ProductCard";
import {
	Anchor,
	Button,
	InputField,
	SectionContainer,
} from "@lilypad/shared-components";
import { SocialIcon } from "@lilypad/shared-components";
import {
	arrowsArrowRight,
	educationBookOpen01,
	generalCheck,
	generalCopy06,
	mapsAndTravelRocket02,
} from "@frontline-hq/untitledui-icons";
import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import CenterHeadingSection from "@/components/CenterHeadingSection/CenterHeadingSection";
import SocialProofSection from "@/components/SocialProofSection/SocialProofSection";
import IconAtom from "@/components/IconAtom/IconAtom";
import BlogPostCard from "@/components/BlogPostCard/BlogPostCard";
import Roadmap from "@/components/Roadmap/Roadmap";
import RoadmapItem from "@/components/Roadmap/RoadmapItem";
import AnimateSpring from "@/components/AnimateSpring";
import { animated } from "@react-spring/web";
import useFade from "./hooks/UseFade";
import useFadeInView from "./hooks/UseFadeInView";
import { PageContext } from "./clientLayout";
import { HomePageCmsInfo } from "./hooks/strapi/types";
import { Player } from '@lottiefiles/react-lottie-player';
import RoadmapFull from "@/components/Roadmap/RoadmapFull";

export default function Home() {
	const { strapi } = useContext(PageContext) as { strapi: HomePageCmsInfo };

	const socialLinks = [
		{ href: "https://twitter.com/lilypad_tech", iconUrl: "/x.svg" },
		{
			href: "https://discord.gg/lilypad-network",
			iconUrl: "/discord.svg",
		},
		{
			href: "https://t.me/lilypadnetwork",
			iconUrl: "/telegram.svg",
		},
	];
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!email) {
			setMessage("Please enter a valid email address.");
			return;
		}

		try {
			const response = await fetch(
				"https://updates.lilypad.tech/members/api/send-magic-link/",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: email,
						emailType: "subscribe",
					}),
				}
			);

			if (response.status === 201) {
				setMessage(
					"You have successfully subscribed! Please check your email for confirmation."
				);
				setEmail("");
			} else if (response.status === 429) {
				// Too many requests error to handle Ghost rate limits
				setMessage(
					"You have made too many subscription attempts. Please wait a few minutes and try again."
				);
			} else {
				const errorData = await response.json();
				const errorMessage =
					errorData.errors?.[0]?.message ||
					"Subscription failed. Please try again later.";
				setMessage(errorMessage);
			}
		} catch (error) {
			console.error("Error subscribing to the newsletter:", error);
			setMessage(
				"There was an error while processing your request. Please try again later."
			);
		}
	};

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
			anchorHref: "/marketplace", // TODO - Add correct link
			anchorText: "Start building",
		},
		{
			header: "Creator Community",
			title: "Build Faster, Together",
			subtitle:
				"Accelerate your AI projects. Train and deploy models faster and cheaper, plus connect with a thriving community of AI innovators.",
			anchorHref: "https://lilypad.team/discord",
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
			handleResize(); // Call once to set initial size

			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

	const copyEmail = "contact@lilypad.tech";

	const [copyState, setCopyState] = useState({
		iconUrl: generalCopy06,
		timeoutId: null,
	});

	const handleCopyClick = async () => {
		// Copy text to clipboard
		await navigator.clipboard.writeText(copyEmail);
		setCopyState((prevState) => ({
			...prevState,
			iconUrl: generalCheck,
		}));

		// Clear any existing timeout
		if (copyState.timeoutId) {
			clearTimeout(copyState.timeoutId);
		}

		// Set timeout to reset the icon
		const newTimeoutId = setTimeout(() => {
			setCopyState((prevState) => ({
				...prevState,
				iconUrl: generalCopy06,
				timeoutId: null,
			}));
		}, 2000);
	};

	const fade = useFade();

	const [missionStatementRef, missionStatementSprings] = useFadeInView();

	const [communityRef, communitySprings] = useFadeInView();
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
									Access a decentralized global compute network
								</h5>
								<div className="flex flex-row gap-4">
									<Anchor
										target="_blank"
										href="https://lilypad.team/discord"
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
				<SectionContainer className="pb-uui-7xl lg:pb-uui-8xl">
					<animated.div style={fade}>
						<SocialProofSection
							trustedByArray={strapi?.trusted_bies}
							title="Trusted by"
						></SocialProofSection>
					</animated.div>
				</SectionContainer>
				<div className="bg-uui-bg-secondary p-uui-7xl lg:py-uui-9xl">
					<SectionContainer>
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
					</SectionContainer>
				</div>

				<SectionContainer id="products">
					<CenterHeadingSection
						className="[&&]:bg-uui-bg-primary"
						title="How to use Lilypad"
						subtitle="Connecting those with idle compute to those who need it, creating a decentralized marketplace for AI compute."
						header="Decentralized. Accessible. Collaborative."
					>
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
					</CenterHeadingSection>
				</SectionContainer>
				<SectionContainer id="our-network">
				<CenterHeadingSection
					className="[&&]:bg-uui-bg-primary"
					title="Lilypad Network"
					subtitle="Lilypad offers a seamless and efficient way to access the computing power you need for AI and other demanding tasks—no need to invest in expensive hardware or navigate complex cloud setups. Simply submit your job; our decentralized network connects you with the best available resources. Benefit from competitive pricing, secure transactions, and a transparent process, all powered by blockchain technology."
					header="Our network explained"
				>
					{/* TODO: Network infographic goes here */}
				</CenterHeadingSection>
				</SectionContainer>
				<CenterHeadingSection
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
				</CenterHeadingSection>
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
				{/* TODO: Add handler for early access subscribers */}
				<SectionContainer id="early-access">
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
								className="[&&]:rounded-full [&&]:h-fit"
							>
								Get Early Access
							</Button>
						</form>
					</CenterHeadingSection>
				</SectionContainer>
				{/* TODO: Finish roadmap */}
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

				{/* TODO: Style this */}
				{/* <SectionContainer id="incentivenet" className="mx-auto py-2 lg:w-1/2 space-y-uui-2xl md:space-y-uui-none md:flex md:space-x-uui-xl w-full">
					<CenterHeadingSection
						className="[&&]:bg-uui-bg-primary"
						title="Lilypad IncentiveNet"
						subtitle="Earn rewards for powering the future of decentralized AI with Lilypad's IncentiveNet."
					>
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
					</CenterHeadingSection>
				</SectionContainer> */}

				<SectionContainer>
					<div className="grid grid-cols-1 lg:grid-cols-2 pt-uui-9xl gap-uui-3xl">
					<a
						href="mailto:contact@lilypad.tech"
						className="group relative hover:bg-uui-bg-secondary_hover mb-uui-xl h-full text-left rounded-2xl bg-uui-bg-secondary p-uui-6xl lg:p-uui-7xl flex flex-col items-start justify-between"
					>
						<h3 className="text-uui-text-primary-900 font-semibold antialiased uui-display-sm">
							Got questions?
						</h3>
						<p className="text-uui-text-tertiary-600 font-regular text-uui-lg md:text-uui-xl">
							We’re here to help
						</p>
						<span className="text-uui-text-tertiary-600 underline underline-offset-4">
							contact@lilypad.tech
						</span>
					</a>

					<a
						href="https://blog.lilypad.tech/"
						target="_blank"
						className="group relative hover:bg-uui-bg-secondary_hover mb-uui-xl h-full text-left rounded-2xl bg-uui-bg-secondary p-uui-6xl lg:p-uui-7xl flex flex-col items-start justify-between"
					>
						<h3 className=" text-uui-text-primary-900 uui-display-xs md:uui-display-sm font-semibold antialiased">
							Stay ahead with Lilypad
						</h3>
						<div className="text-uui-text-tertiary-600 flex flex-col antialiased font-regular text-uui-lg md:uui-text-xl">
							<span>
								Discover the latest advancements in AI and decentralized computing on the Lilypad blog.
							</span>
							<span className="font-regular underline underline-offset-4 pt-4">
								Explore Now
							</span>
						</div>
						<div className="rounded-full m-uui-3xl w-fit bg-uui-bg-tertiary p-uui-lg absolute right-0 top-0">
							<IconAtom
								iconUrl={educationBookOpen01}
							></IconAtom>
						</div>
					</a>
						<div className="lg:col-span-2 mb-uui-xl h-full text-left rounded-2xl bg-uui-bg-secondary gap-uui-2xl lg:gap-uui-4xl p-uui-6xl lg:p-uui-7xl flex flex-col lg:flex-row items-start justify-start">
							<div className="lg:w-1/2">
								<h3 className="text-uui-text-primary-900 mb-uui-xl uui-display-xs md:uui-display-sm font-semibold antialiased">
									Be the first to know
								</h3>
								<div className="text-uui-text-tertiary-600 flex flex-col antialiased font-regular text-uui-lg md:uui-text-xl">
									<span>
										Subscribe to the Lilypad newsletter for the latest updates.
									</span>
								</div>
							</div>
							<form
								className="lg:w-1/2 space-y-uui-2xl md:space-y-uui-none md:flex md:space-x-uui-xl w-full"
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
													href="/privacy-policy"
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
									className="[&&]:rounded-full [&&]:h-fit"
								>
									Subscribe
								</Button>
							</form>
							<div className="antialiased text-uui-text-tertiary-600 font-regular uui-text-sm [&amp;.error]:text-uui-text-error-primary-600 mt-uui-sm block text-left">
								<span>{message && <p>{message}</p>}</span>
							</div>
						</div>
					</div>
				</SectionContainer>
			</main>
		</>
	);
}