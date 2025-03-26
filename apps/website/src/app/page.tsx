'use client'
import GroupBadge from '@/components/GroupBadge/GroupBadge'
import ProductCard from '@/components/ProductCard/ProductCard'
import { Anchor, SectionContainer } from '@lilypad/shared-components'
import { SocialIcon } from '@lilypad/shared-components'
import {
    arrowsArrowRight,
    //   mapsAndTravelRocket02,
} from '@frontline-hq/untitledui-icons'
import Head from 'next/head'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import CenterHeadingSection from '@/components/CenterHeadingSection/CenterHeadingSection'
import SocialProofSection from '@/components/SocialProofSection/SocialProofSection'
// import BlogPostCard from "@/components/BlogPostCard/BlogPostCard";
import AnimateSpring from '@/components/AnimateSpring'
import { animated } from '@react-spring/web'
import useFade from './hooks/UseFade'
// import useFadeInView from "./hooks/UseFadeInView";
import { PageContext } from './clientLayout'
import { HomePageCmsInfo } from './hooks/strapi/types'
import RoadmapFull from '@/components/Roadmap/RoadmapFull'
import { CallToActions } from '@/components/FooterBlock/CallToActions'
// import { sendEmail } from "@/utils/sendEmail";
import { ToastContainer, toast } from 'react-toastify'
// import dynamic from "next/dynamic";
// import ContentItem from "@/components/ContentItem/ContentItem";

export default function Home() {
    const lol = 'no'
    //   const [loading, setLoading] = useState<boolean>(false);
    //   const [email, setEmail] = useState("");

    const { strapi } = useContext(PageContext) as { strapi: HomePageCmsInfo }
    const socialLinks = [
        { href: 'https://twitter.com/lilypad_tech', iconUrl: '/x.svg' },
        {
            href: 'https://discord.gg/ywSEGd3d84',
            iconUrl: '/discord.svg',
        },
        {
            href: 'https://t.me/lilypadnetwork',
            iconUrl: '/telegram.svg',
        },
    ]

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
            header: 'Resource Providers',
            title: 'Monetize Your Idle GPU',
            subtitle:
                'Contribute your idle GPU power and earn rewards by helping power decentralized AI and compute jobs on Lilypad.',
            anchorHref:
                'https://docs.lilypad.tech/lilypad/hardware-providers/run-a-node',
            anchorText: 'Become a Resource Provider',
        },
        {
            header: 'AI Module Builders',
            title: 'Build and Monetize Your AI',
            subtitle:
                'Create and monetize your own AI modules and data sets, harness cost-effective and scalable compute.',
            anchorHref: 'https://docs.lilypad.tech/lilypad',
            anchorText: 'Start building',
        },
        {
            header: 'Creator Community',
            title: 'Build Faster, Together',
            subtitle:
                'Accelerate your AI projects. Train and deploy models faster and cheaper, plus connect with a thriving community of AI innovators.',
            anchorHref: 'https://discord.gg/ywSEGd3d84',
            anchorText: 'Join our community',
        },
    ]

    //   const blogPostCardData = [
    //     {
    //       title: "DeSci",
    //       subtitle:
    //         "Empower decentralized science using Lilypad to process complex data and run AI-driven models to accelerate scientific breakthroughs.",
    //       anchorHref: "/desci",
    //       anchorText: "Learn more",
    //     },
    //     {
    //       title: "Gaming",
    //       subtitle:
    //         "Level up your gaming visions with Lilypad's decentralized compute, enabling developers to seamlessly run demanding game logic and AI at scale.",
    //       anchorHref: "/gaming",
    //       anchorText: "Learn more",
    //     },
    //     // TODO: Replace with AI agents. Enabling decentralized AI agents and agent workflows with verifiable compute
    //     {
    //       title: "Social Networks",
    //       subtitle:
    //         "Build next-generation social platforms with advanced AI features like content moderation, recommendation engines, and fraud detection.",
    //       anchorHref: "/social-networks",
    //       anchorText: "Learn more",
    //     },
    //     {
    //       title: "Marketing",
    //       subtitle:
    //         "Drive hyper-personalized marketing campaigns and unlock real-time customer insights with AI-powered analytics.",
    //       anchorHref: "/marketing",
    //       anchorText: "Learn more",
    //     },
    //     {
    //       title: "IoT",
    //       subtitle:
    //         "Securely process and analyze massive amounts of IoT data at the edge, enabling real-time decision-making and intelligent automation.",
    //       anchorHref: "/iot",
    //       anchorText: "Learn more",
    //     },
    //     {
    //       title: "AI x Crypto",
    //       subtitle:
    //         "Unleash the power of cutting-edge AI and cryptography on Lilypad's decentralized network, delivering secure, scalable solutions that push the boundaries of innovation.",
    //       anchorHref: "/ai-crypto",
    //       anchorText: "Learn more",
    //     },
    //   ];

    const capabilityCardData = [
        {
            header: 'On-demand Generative AI',
            subtitle:
                "Accelerate your generative AI workflows with Lilypad's on-demand compute power. Execute jobs seamlessly from any platform, using smart contracts, APIs, or SDKs.",
        },
        {
            header: 'Model Fine-tuning Pipelines',
            subtitle:
                "Train your AI models on your own terms. Lilypad's fine-tuning pipelines offer secure data ingress/egress and advanced privacy measures like TEE and FHE.",
        },
        {
            header: 'ML Training via GPU Clusters',
            subtitle:
                "Ensure the integrity of your ML training with Lilypad's data provenance proofs. Train your models with confidence, knowing the origin and history of your data.",
        },
    ]

    function getScreenSize() {
        if (typeof window !== 'undefined') {
            const width = window.innerWidth
            if (width >= 1536) {
                return '2xl'
            } else if (width >= 1280) {
                return 'xl'
            } else if (width >= 1024) {
                return 'lg'
            } else if (width >= 768) {
                return 'md'
            } else if (width >= 640) {
                return 'sm'
            } else {
                return 'xs'
            }
        }
    }

    const [screenSize, setScreenSize] = useState(getScreenSize)

    useEffect(() => {
        function handleResize() {
            setScreenSize(getScreenSize())
        }

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize)
            handleResize()

            return () => window.removeEventListener('resize', handleResize)
        }
    }, [])

    const fade = useFade()

    return (
        <>
            <Head>
                <title>
                    The Lilypad Network - Revolutionizing Decentralized
                    Computing
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

            <main className="overflow-hidden">
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    theme="dark"
                />

                <SectionContainer>
                    <div className="bg-uui-bg-primary lg:gap-uui-9xl flex flex-col justify-between py-16 lg:flex-row">
                        <div className="mr-auto flex w-full flex-col items-start justify-start lg:w-fit lg:flex-grow">
                            <animated.div style={fade}>
                                <GroupBadge
                                    onClick={() =>
                                        window.open(
                                            'https://lilypad.tech/incentiveNet',
                                            '_blank'
                                        )
                                    }
                                    badge="leading"
                                    icon={{
                                        url: arrowsArrowRight,
                                    }}
                                    color="brand"
                                    message="We've recently launched IncentiveNet"
                                    text="News"
                                    size={
                                        screenSize === 'xl' ||
                                        screenSize === '2xl'
                                            ? 'lg'
                                            : 'md'
                                    }
                                    theme="modern"
                                />
                            </animated.div>

                            <AnimateSpring>
                                <div className="md:pb-uui-3xl uui-display-md md:uui-display-xl text-uui-text-primary-900 flex flex-wrap gap-12 py-4 font-semibold antialiased md:gap-24 lg:flex-nowrap">
                                    <h1>
                                        The{' '}
                                        <span className="text-uui-text-quarterary-500">
                                            Open Access
                                        </span>{' '}
                                        AI Innovation Economy
                                    </h1>
                                </div>

                                <h2 className="pb-uui-4xl md:pb-uui-6xl uui-text-lg md:uui-text-xl font-regular text-uui-text-tertiary-600">
                                    Deploy, run, and monetize any AI model
                                </h2>

                                <div className="flex flex-row gap-4">
                                    <Anchor
                                        target="_blank"
                                        href="https://discord.gg/ywSEGd3d84"
                                        className="w-full cursor-pointer md:w-fit [&&]:rounded-full"
                                        color="color"
                                        destructive={false}
                                        hierarchy="primary"
                                        size={
                                            screenSize === 'xl' ||
                                            screenSize === '2xl'
                                                ? '2xl'
                                                : 'xl'
                                        }
                                    >
                                        Join our community
                                    </Anchor>
                                    <Anchor
                                        target="_blank"
                                        href="https://docs.lilypad.tech/lilypad"
                                        className="w-full cursor-pointer md:w-fit [&&]:rounded-full"
                                        color="color"
                                        destructive={false}
                                        hierarchy="primary"
                                        size={
                                            screenSize === 'xl' ||
                                            screenSize === '2xl'
                                                ? '2xl'
                                                : 'xl'
                                        }
                                    >
                                        Get started
                                    </Anchor>
                                </div>
                            </AnimateSpring>

                            <animated.div style={fade}>
                                <div className="space-x-uui-xl flex pt-12">
                                    {socialLinks.map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <SocialIcon
                                                className="h-[2rem] w-[2rem] cursor-pointer"
                                                iconUrl={link.iconUrl}
                                            />
                                        </a>
                                    ))}
                                </div>
                            </animated.div>
                        </div>
                        <animated.video
                            style={fade}
                            autoPlay
                            loop
                            src="https://cdn.lilypad.tech/lilypad-globe-720.mov"
                            className="my-16 h-full w-full rounded-lg drop-shadow-lg"
                        />
                    </div>
                </SectionContainer>
                <SectionContainer className="pb-uui-3xl lg:pb-uui-8xl">
                    <animated.div style={fade}>
                        <SocialProofSection strapi={strapi} />
                    </animated.div>
                </SectionContainer>

                <SectionContainer id="products">
                    <CenterHeadingSection
                        className="[&&]:bg-uui-bg-primary"
                        title="How to use Lilypad"
                        subtitle="Connecting those with idle compute to those who need it, creating a decentralized marketplace for AI compute."
                        header="Decentralized. Accessible. Collaborative."
                    >
                        <br />
                        <div className="mt-uui-7xl space-y-uui-4xl lg:space-y-uui-none lg:space-x-uui-4xl flex flex-col lg:flex-row">
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
                        <br />
                        <br />
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
                            className="py-uui-4xl lg:py-uui-5xl hidden w-full rounded-lg md:block"
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
                        <div className="mt-uui-7xl space-y-uui-4xl lg:space-y-uui-none lg:space-x-uui-4xl flex flex-col lg:flex-row">
                            {capabilityCardData.map((card, index) => (
                                <ProductCard
                                    key={index}
                                    header={card.header}
                                    subtitle={card.subtitle}
                                ></ProductCard>
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
                        <div className="pt-uui-7xl flex w-full items-center justify-center">
                            <RoadmapFull />
                        </div>
                    </CenterHeadingSection>
                </SectionContainer>

                <SectionContainer
                    id="incentivenet"
                    className="space-y-uui-2xl md:space-y-uui-none md:space-x-uui-xl mx-auto w-full py-2 md:flex lg:w-1/2"
                >
                    <CenterHeadingSection
                        className="[&&]:bg-uui-bg-primary mx-auto text-center"
                        title="Lilypad IncentiveNet"
                        subtitle="Earn rewards for powering the future of decentralized AI with Lilypad's IncentiveNet."
                    >
                        <Anchor
                            target="_blank"
                            href="https://docs.lilypad.tech/lilypad"
                            className="mx-auto my-4 w-full cursor-pointer md:w-fit [&&]:rounded-full"
                            color="color"
                            destructive={false}
                            hierarchy="primary"
                            size={
                                screenSize === 'xl' || screenSize === '2xl'
                                    ? '2xl'
                                    : 'xl'
                            }
                        >
                            Get started
                        </Anchor>
                        <animated.div
                            style={fade}
                            className="mx-auto flex justify-center"
                        >
                            <div className="space-x-uui-xl flex">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <SocialIcon
                                            className="h-[2rem] w-[2rem] cursor-pointer"
                                            iconUrl={link.iconUrl}
                                        />
                                    </a>
                                ))}
                            </div>
                        </animated.div>
                    </CenterHeadingSection>
                </SectionContainer>

                <SectionContainer>
                    <div className="pt-uui-6xl gap-uui-3xl grid grid-cols-1 lg:grid-cols-2">
                        <CallToActions />
                    </div>
                </SectionContainer>
            </main>
        </>
    )
}
