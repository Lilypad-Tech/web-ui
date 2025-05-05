'use client'
import { Anchor, SectionContainer } from '@lilypad/shared-components'
import Head from 'next/head'
import CenterHeadingSection from '@/components/CenterHeadingSection/CenterHeadingSection'
import _TeamMember from '@/components/_TeamMember/_TeamMember'
import SocialProofSection from '@/components/SocialProofSection/SocialProofSection'
import Image from 'next/image'
import useFadeInView from '../hooks/UseFadeInView'
import { animated } from '@react-spring/web'
import AnimateSpring from '@/components/AnimateSpring'
import useFade from '../hooks/UseFade'
import { useContext } from 'react'
import {
    team,
    advisors,
    // TODO: add partners data
    // partners
} from '@/data/team'
import _Advisor from '@/components/_TeamMember/_Advisor'
import { CallToActions } from '@/components/FooterBlock/CallToActions'
export default function Teams() {
    const [teamSection2Ref, teamSection2Springs] = useFadeInView()
    const [teamSection3Ref, teamSection3Springs] = useFadeInView()
    const fadeLandingspage = useFade()

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
            <main className="relative overflow-hidden">
                <div className="max-w-uui-width-4xl relative mx-auto w-full overflow-hidden">
                    <div className="min-w-uui-width-2xl sm:-translate-x-uui-none absolute left-0 top-0 -z-10 h-[40vh] w-full -translate-x-[25%] -translate-y-[8%]">
                        <animated.div style={fadeLandingspage}>
                            <Image
                                layout="responsive"
                                width={1920}
                                height={1080}
                                src="/lilypad-background.svg"
                                alt="lilypads"
                                className="h-full w-full object-cover object-top"
                            />
                        </animated.div>
                    </div>

                    <SectionContainer>
                        <CenterHeadingSection
                            titleClassName="[&&]:uui-display-md [&&]:md:uui-display-lg "
                            className="pt-uui-7xl lg:pt-uui-9xl relative [&&]:bg-transparent"
                            header="The minds behind the mission"
                            title="Meet the Lilypad team"
                            subtitle="A multi-disciplinary, diverse team at the intersection of AI and crypto, building an accessible, community-driven network empowering next generation of open web innovation."
                        ></CenterHeadingSection>
                    </SectionContainer>
                </div>

                <div className="bg-uui-bg-primary w-full">
                    <SectionContainer>
                        <div className="py-uui-2xl lg:pt-uui-9xl gap-x-uui-4xl gap-y-uui-2xl grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4">
                            {team.length > 0 ? (
                                team
                                    .sort((a, b) => a.order - b.order)
                                    .map((member, index) => (
                                        <AnimateSpring key={index}>
                                            <_TeamMember
                                                src={
                                                    member.image
                                                        ? `https://cdn.lilypad.tech/team-headshots/${member.image}`
                                                        : '/default-image.png'
                                                }
                                                name={member.name}
                                                position={member.title}
                                                description={member.description}
                                                experience={member.experience}
                                                socialIcons={[
                                                    member.twitter
                                                        ? {
                                                              href: `https://twitter.com/${member.twitter}`,
                                                              iconUrl: '/x.svg',
                                                          }
                                                        : null,
                                                    member.linkedin
                                                        ? {
                                                              href: `https://linkedin.com/in/${member.linkedin}`,
                                                              iconUrl:
                                                                  '/linkedin.svg',
                                                          }
                                                        : null,
                                                ].filter(
                                                    (
                                                        icon
                                                    ): icon is {
                                                        href: string
                                                        iconUrl: string
                                                    } => Boolean(icon)
                                                )}
                                            />
                                        </AnimateSpring>
                                    ))
                            ) : (
                                <p>No team members found.</p>
                            )}
                        </div>
                        <div className="py-uui-4xl mx-auto flex flex-col gap-4 text-center">
                            <p className="text-uui-text-tertiary-600 uui-text-lg md:uui-text-xl font-regular">
                                Want to learn more about our team?
                            </p>
                            <Anchor
                                target="_blank"
                                href="https://lilypadnetwork.notion.site/Press-Kit-d1d4e16d558d419c9bc502ade1404e17"
                                className="mx-auto w-full cursor-pointer md:w-fit [&&]:rounded-full"
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

                <div className="pb-12 bg-uui-bg-secondary">
                    <SectionContainer>
                        <CenterHeadingSection
                            className="pt-uui-7xl lg:pt-uui-9xl"
                            title="Advisors"
                            subtitle="The Lilypad team is proud to be supported by a network of visionary advisors who share our passion for decentralized AI and are committed to helping us build a better future for the web."
                        ></CenterHeadingSection>
                        <animated.div
                            ref={teamSection2Ref}
                            style={teamSection2Springs}
                            className="gap-x-uui-4xl gap-y-uui-2xl grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4"
                        >
                            {advisors.length > 0 ? (
                                advisors
                                    .sort((a, b) => a.order - b.order) // Sort by "order" property in ascending order
                                    .map((advisor, index) => {
                                        return (
                                            <_Advisor
                                                key={index}
                                                src={
                                                    advisor.image
                                                        ? `https://cdn.lilypad.tech/team-headshots/${advisor.image}`
                                                        : '/default-image.png'
                                                }
                                                name={advisor.name}
                                                position={advisor.title}
                                                experience={advisor.experience}
                                                socialIcons={[
                                                    {
                                                        href: `https://twitter.com/${advisor.twitter}`,
                                                        iconUrl: '/x.svg',
                                                    },
                                                    {
                                                        href: `https://linkedin.com/in/${advisor.linkedin}`,
                                                        iconUrl:
                                                            '/linkedin.svg',
                                                    },
                                                ]}
                                            />
                                        )
                                    })
                            ) : (
                                <p>No advisors found.</p>
                            )}
                        </animated.div>
                    </SectionContainer>
                </div>

                <SectionContainer>
                    {/* TODO: add back partners section */}
                    {/* <CenterHeadingSection
                        className="[&&]:bg-uui-bg-primary pt-uui-7xl lg:pt-uui-9xl"
                        title="Partners"
                        subtitle="Meet the skilled front-end engineers and tokenomics experts who are instrumental in building Lilypad's future."
                    >
                        <animated.div
                            ref={teamSection3Ref}
                            style={teamSection3Springs}
                            className="pt-uui-7xl lg:pt-uui-9xl gap-x-uui-2xl gap-y-uui-6xl flex flex-row justify-center justify-items-center"
                        >
                            {partners.length > 0 ? (
                                partners.map((partner, index) => (
                                    <_Advisor
                                        key={index}
                                        src={
                                            partner.image
                                                ? `https://cdn.lilypad.tech/team-headshots/${partner.image}`
                                                : '/default-image.png'
                                        }
                                        name={partner.name}
                                        position={partner.title}
                                        // description={partner.description}
                                        socialIcons={[
                                            {
                                                href: partner.website,
                                                iconUrl: '/globe-02.svg',
                                            },
                                        ]}
                                    />
                                ))
                            ) : (
                                <p>No partners found.</p>
                            )}
                        </animated.div>
                    </CenterHeadingSection> */}

                {/* <SectionContainer className="mt-12 pb-uui-3xl lg:pb-uui-8xl">
                    <animated.div>
                        <SocialProofSection />
                    </animated.div>
                </SectionContainer> */}

                </SectionContainer>
                <SectionContainer>
                    <div className="py-uui-6xl gap-uui-3xl grid grid-cols-1 lg:grid-cols-2">
                        <CallToActions />
                    </div>
                </SectionContainer>
            </main>
        </>
    )
}
