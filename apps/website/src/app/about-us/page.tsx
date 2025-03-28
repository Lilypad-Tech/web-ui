'use client'
import { SectionContainer } from '@lilypad/shared-components'
import Head from 'next/head'
import CenterHeadingSection from '@/components/CenterHeadingSection/CenterHeadingSection'
import _TeamMember from '@/components/_TeamMember/_TeamMember'
import ContentItem from '@/components/ContentItem/ContentItem'
import Image from 'next/image'
import _FeatureText from '@/components/_FeatureText/_FeatureText'
import useFade from '../hooks/UseFade'
import { animated } from '@react-spring/web'
import { CallToActions } from '@/components/FooterBlock/CallToActions'
import useFadeInView from '../hooks/UseFadeInView'

export default function Teams() {
    const fadeLandingspage = useFade()
    const [missionStatementRef, missionStatementSprings] = useFadeInView()
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

            <main className="relative overflow-hidden">
                <div className="bg-uui-bg-secondary pb-uui-2xl md:pb-uui-9xl relative mx-auto w-full overflow-hidden">
                    <SectionContainer className="max-w-uui-width-4xl pb-uui-7xl">
                        <animated.div style={fadeLandingspage}>
                            <CenterHeadingSection
                                titleClassName="uui-display-lg [&&]:md:uui-display-2xl "
                                className="pt-uui-7xl lg:pt-uui-9xl [&&]:pb-uui-7xl relative [&&]:bg-transparent"
                                header="About Lilypad"
                                title="The AI Platform for Builders"
                                subtitle="Create, deploy, monetize"
                            ></CenterHeadingSection>
                        </animated.div>
                    </SectionContainer>
                </div>

                <div className="pt-uui-9xl relative">
                    <Image
                        alt="Lilypad geo shapes"
                        className="absolute left-1/2 top-0 min-w-[40rem] -translate-x-1/2 -translate-y-[48.5%]"
                        width={1216}
                        height={304}
                        src="/geo-shapes-lilypad.svg"
                    />
                    <SectionContainer>
                        <div className="md:py-uui-9xl mx-auto max-w-[45rem]">
                            <div className="mx-auto my-14 max-w-prose">
                                <animated.h3
                                    className="text-uui-text-brand-secondary-700 uui-text-md md:uui-text-lg text-center font-semibold antialiased"
                                    style={missionStatementSprings}
                                    ref={missionStatementRef}
                                >
                                    Vision
                                </animated.h3>

                                <ContentItem
                                    size="lg"
                                    paragraph="Open infrastructure & AI is essential to ensuring AI remains a community-owned resource,but open-source still struggles to monetize."
                                />
                                <ContentItem
                                    size="lg"
                                    paragraph="Lilypad unlocks the future of AI by turning your custom models into revenue engines — deploy, monetize, and scale with zero friction on our global distribution & compute network. From DeSci breakthroughs to agent pipelines and AI-driven apps, Lilypad fuels an explosion of downstream innovation, unlocking limitless possibilities for solopreneurs and serious businesses."
                                />
                                {/* <animated.h5
								className="text-uui-text-tertiary-600 uui-text-lg md:uui-text-xl font-normal pt-uui-lg"
								style={missionStatementSprings}
								ref={missionStatementRef}
							>
								{strapi?.mission_statement}
							</animated.h5> */}
                            </div>
                        </div>
                    </SectionContainer>
                </div>

                <div className="bg-uui-bg-secondary pt-uui-9xl pb-uui-11xl">
                    <SectionContainer>
                        <div className="space-y-uui-7xl md:space-y-uui-none md:space-x-uui-9xl flex flex-col md:flex-row">
                            <div className="space-y-uui-xl md:space-y-uui-2xl flex flex-col">
                                <h3 className="uui-display-sm md:uui-display-md text-uui-text-primary-900 font-semibold">
                                    How It Works
                                </h3>
                                <p className="text-uui-text-tertiary-600 font-regular uui-text-lg md:uui-text-xl max-w-prose antialiased">
                                    AI Developers earn directly for their
                                    contributions, with a platform for AI model
                                    distribution on a decentralized network with
                                    blockchain payment rails.
                                </p>
                            </div>
                            <div className="space-y-uui-4xl md:space-y-uui-6xl flex flex-col">
                                <div className="space-x-uui-xl flex">
                                    {/* <FeaturedIcon iconUrl={generalEye} /> */}
                                    <div className="spacing-y-uui-md flex flex-col items-start justify-center">
                                        <span className="text-uui-text-primary-900 uui-text-lg md:uui-text-xl font-semibold antialiased">
                                            Deploy Your Model & Monetize AI
                                            Innovation
                                        </span>
                                        <p className="uui-text-sm md:uui-text-md font-regular text-uui-text-tertiary-600 antialiased">
                                            Upload and configure your AI model
                                            in minutes, earn revenue each time a
                                            model is utilized
                                        </p>
                                    </div>
                                </div>
                                <div className="space-x-uui-xl flex">
                                    {/* <FeaturedIcon
                                        iconUrl={mapsAndTravelFlag02}
                                    /> */}
                                    <div className="spacing-y-uui-md flex flex-col items-start justify-center">
                                        <span className="text-uui-text-primary-900 uui-text-lg md:uui-text-xl font-semibold antialiased">
                                            Run AI Jobs
                                        </span>
                                        <p className="uui-text-sm md:uui-text-md font-regular text-uui-text-tertiary-600 antialiased">
                                            Execute workloads seamlessly on
                                            decentralized compute, with
                                            Lilypad's extensive library of
                                            community-built models
                                        </p>
                                    </div>
                                </div>
                                <div className="space-x-uui-xl flex">
                                    <div className="spacing-y-uui-md flex flex-col items-start justify-center">
                                        <span className="text-uui-text-primary-900 uui-text-lg md:uui-text-xl font-semibold antialiased">
                                            Scale AI Workflows
                                        </span>
                                        <p className="uui-text-sm md:uui-text-md font-regular text-uui-text-tertiary-600 antialiased">
                                            Tap into a global network of GPUs as
                                            needed as your applications scale.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SectionContainer>
                </div>
                <div className="-mt-uui-9xl relative mx-auto flex w-full items-center justify-center">
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
                            title="Ethos"
                            subtitle="An Accessible Marketplace of AI Deployment and Monetization"
                        >
                            <p className="uui-text-md text-uui-text-primary-900 mx-auto max-w-prose py-4 text-center antialiased">
                                Lilypad is a business model for all — deploy,
                                monetize, and scale your custom AI models with
                                zero friction on our global compute network.
                                Every model earns, every creator gets paid, and
                                the AI economy finally works for the innovators
                                driving it forward.
                            </p>
                        </CenterHeadingSection>

                        <div className="my-14 flex flex-col flex-wrap items-center justify-center gap-x-8 gap-y-16 md:flex-row md:items-start">
                            <_FeatureText
                                // featuredIconUrl={mediaAndDevicesLightbulb05}
                                title="AI Compute Without Bottlenecks"
                                description="Open, global access to a competitively priced network of GPUs. Scalable AI for all with blockchain-powered payment rails."
                            />

                            <_FeatureText
                                // featuredIconUrl={generalCheckHeart}
                                title="Nodes Earn Per Task"
                                description="Every AI model on Lilypad runs on a per-job basis. Compute providers can monetize idle compute, when and how they wish, picking up jobs on the network."
                            />

                            <_FeatureText
                                // featuredIconUrl={developmentPuzzlePiece01}
                                title="Easily Deploy Any Model"
                                description="No MLOPs, no pay per GPU-hour. Containterize, configure, run as a serverless function."
                            />

                            <_FeatureText
                                // featuredIconUrl={mediaAndDevicesLightbulb05}
                                title="Model Monetization"
                                description="Those who publish custom models earn per job run. Network effect growth at the rate of AI innovation."
                            />

                            <_FeatureText
                                // featuredIconUrl={generalCheckHeart}
                                title="Decentralized Supercloud"
                                description="A dynamically scalable, fault-tolerant mesh network. Aggregate GPUs from anywhere with blockchain payment rails and smart contract automation."
                            />

                            <_FeatureText
                                // featuredIconUrl={developmentPuzzlePiece01}
                                title="Modular and Composable"
                                description="Integrate any model directly into an application. Pick and choose from models for decentralized science, autonomous agents, or specialized AI applications"
                            />
                        </div>
                    </SectionContainer>
                </div>
                <div className="bg-uui-bg-secondary py-uui-7xl lg:py-uui-9xl">
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
                    <SectionContainer>
                        {/* <div className="max-w-[45rem] md:py-uui-9xl mx-auto"> */}
                        <div className="mx-auto max-w-[45rem]">
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
                </div>
                <SectionContainer>
                    <div className="py-uui-6xl gap-uui-3xl grid grid-cols-1 lg:grid-cols-2">
                        <CallToActions />
                    </div>
                </SectionContainer>
            </main>
        </>
    )
}
