'use client'
import {
    Button,
    InputField,
    SectionContainer,
} from '@lilypad/shared-components'
import Head from 'next/head'
import CenterHeadingSection from '@/components/CenterHeadingSection/CenterHeadingSection'
import _TeamMember from '@/components/_TeamMember/_TeamMember'
import {
    developmentPuzzlePiece01,
    educationBookOpen01,
    generalCheckHeart,
    generalEye,
    mapsAndTravelFlag02,
    mediaAndDevicesLightbulb05,
    usersUsers01,
} from '@frontline-hq/untitledui-icons'
import IconAtom from '@/components/IconAtom/IconAtom'
import ContentItem from '@/components/ContentItem/ContentItem'
import Image from 'next/image'
import FeaturedIcon from '@/components/FeaturedIcon/FeaturedIcon'
import _FeatureText from '@/components/_FeatureText/_FeatureText'
import useFade from '../hooks/UseFade'
import { useSpring, animated } from '@react-spring/web'
import { NewsletterForm } from '@/components/Forms/NewsletterForm'
import { CallToActions } from '@/components/FooterBlock/CallToActions'
import React, { useEffect, useState, useRef } from 'react'
import AnimateSpring from '@/components/AnimateSpring'
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
                                title="Lilypad Network: Experience the Power of Decentralized Computing."
                                subtitle="A passionate team leveraging decentralized compute to make AI accessible and empowering for everyone."
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
                            <div className="max-w-uui-width-2xl mx-auto text-center">
                                <br />
                                <br />
                                <br />
                                <animated.h3
                                    className="text-uui-text-brand-secondary-700 uui-text-md md:uui-text-lg font-semibold antialiased"
                                    style={missionStatementSprings}
                                    ref={missionStatementRef}
                                >
                                    Mission Statement
                                </animated.h3>

                                <ContentItem
                                    size="lg"
                                    paragraph="We are building the most accessible GPU network for AI innovators, providing the distributed compute resources needed to push the boundaries of what's possible."
                                />
                                <ContentItem
                                    size="lg"
                                    paragraph="We are democratizing access to AI and Agentic computing resources by fostering an open, equitable, and accessible ecosystem for running AI & Agentic compute jobs."
                                />
                                <br />
                                <br />
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

                    {/* <SectionContainer className="pt-uui-7xl">
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
					</SectionContainer> */}
                </div>

                <div className="bg-uui-bg-secondary pt-uui-9xl pb-uui-11xl">
                    <SectionContainer>
                        <div className="space-y-uui-7xl md:space-y-uui-none md:space-x-uui-9xl flex flex-col md:flex-row">
                            <div className="space-y-uui-xl md:space-y-uui-2xl flex flex-col">
                                <h3 className="uui-display-sm md:uui-display-md text-uui-text-primary-900 font-semibold">
                                    What we stand for
                                </h3>
                                <p className="text-uui-text-tertiary-600 font-regular uui-text-lg md:uui-text-xl antialiased">
                                    Powerful, self-serve product and growth
                                    analytics to help you convert, engage, and
                                    retain more users. Trusted by over 4,000
                                    startups.
                                </p>
                            </div>
                            <div className="space-y-uui-4xl md:space-y-uui-6xl flex flex-col">
                                <div className="space-x-uui-xl flex">
                                    <FeaturedIcon iconUrl={generalEye} />
                                    <div className="spacing-y-uui-md flex flex-col items-start justify-center">
                                        <span className="text-uui-text-primary-900 uui-text-lg md:uui-text-xl font-semibold antialiased">
                                            Vision
                                        </span>
                                        <p className="uui-text-sm md:uui-text-md font-regular text-uui-text-tertiary-600 antialiased">
                                            To empower individuals and
                                            communities through decentralized AI
                                            and computing, fostering an open,
                                            equitable, and accessible
                                            technological ecosystem.
                                        </p>
                                    </div>
                                </div>
                                <div className="space-x-uui-xl flex">
                                    <FeaturedIcon
                                        iconUrl={mapsAndTravelFlag02}
                                    />
                                    <div className="spacing-y-uui-md flex flex-col items-start justify-center">
                                        <span className="text-uui-text-primary-900 uui-text-lg md:uui-text-xl font-semibold antialiased">
                                            Mission
                                        </span>
                                        <p className="uui-text-sm md:uui-text-md font-regular text-uui-text-tertiary-600 antialiased">
                                            To democratize access to
                                            cutting-edge AI and computing
                                            resources by leveraging web3
                                            technologies, fostering an
                                            inclusive, transparent, and
                                            decentralized ecosystem that
                                            empowers individuals and communities
                                            to innovate, collaborate, and drive
                                            positive change in the world.
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
                            title="Lilypad's Ethos"
                            subtitle="Decentralized. Accessible. Collaborative."
                        >
                            <p className="uui-text-md text-uui-text-primary-900 mx-auto w-1/2 py-4 text-center antialiased">
                                Lilypad is built on the pillars of
                                decentralization, accessibility, and
                                collaboration, empowering a community-driven
                                approach to AI innovation.
                            </p>
                        </CenterHeadingSection>

                        <div className="space-y-uui-3xl md:space-y-uui-none md:space-x-uui-4xl flex flex-col items-center justify-center md:flex-row">
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
