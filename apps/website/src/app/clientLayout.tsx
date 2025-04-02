'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import _NavItemBase from '@/components/_NavItemBase/_NavItemBase'
import _ApplicationNavMenuButton from '@/components/_ApplicationNavMenuButton/_ApplicationNavMenuButton'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import { Context, useState } from 'react'
import { usePathname } from 'next/navigation'
import _NavItemDropdown from '@/components/_NavItemDropdown/_NavItemDropdown'
import _NavMenuItem from '@/components/_NavMenuItem/_NavMenuItem'
import { Anchor } from '@lilypad/shared-components'
import Footer from '@/components/Footer'
import { animated, useSpring } from '@react-spring/web'
import { createContext } from 'react'
import useStrapi from './hooks/strapi/UseStrapi'
import { StrapiContext } from './hooks/strapi/types'

const INTER = Inter({ subsets: ['latin'] })

export const PageContext: Context<StrapiContext> = createContext({
    strapi: {},
})

export default function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const [menuOpened, setMenuOpened] = useState(false)
    const [nestedMenu, setNestedMenu] = useState<null | 'About' | 'Resources'>(
        null
    )
    const pathname = usePathname()
    const { strapi, isLoading: isCmsLoading } = useStrapi({ pathname })

    const resourcesArray = [
        {
            title: 'Discord',
            iconUrl: '/discord.svg',
            target: '_blank',
            href: 'https://discord.gg/ywSEGd3d84',
        },
        {
            title: 'Github',
            iconUrl: '/github.svg',
            href: 'https://github.com/Lilypad-Tech',
            target: '_blank',
        },
        {
            title: 'Metrics Dashboard',
            iconUrl: '/bar-chart-05.svg',
            // href: 'https://info.lilypad.tech',
            href: 'http://rp-points.lilypad.tech/',
            target: '_blank',
        },
        {
            title: 'Media Kit',
            iconUrl: '/camera-01.svg',
            href: 'https://lilypadnetwork.notion.site/Press-Kit-d1d4e16d558d419c9bc502ade1404e17',
            target: '_blank',
        },
        {
            title: 'FAQ',
            iconUrl: '/help-circle.svg',
            href: 'https://docs.lilypad.tech/lilypad/faqs',
            target: '_blank',
        },
    ]

    const aboutArray = [
        {
            title: 'About us',
            iconUrl: '/lilypad-icon.svg',
            href: '/about-us',
            target: '_self', // Default target if not specified
        },
        {
            title: 'Our team',
            iconUrl: '/users-03.svg',
            href: '/team',
            target: '_self',
        },
        {
            title: 'Roadmap',
            iconUrl: '/route.svg',
            href: '/#roadmap',
            target: '_self',
        },
        // {
        // 	// TODO: Add link to press page when ready
        // 	title: "Press/Media",
        // 	iconUrl: mediaAndDevicesTv03,
        // 	href: "/page for press overview",
        // 	target: "_self",
        // },
        {
            title: 'Use Cases',
            iconUrl: '/lightbulb-05.svg',
            href: 'https://docs.lilypad.tech/lilypad/use-cases-agents-and-projects/agents',
            target: '_blank',
        },
    ]

    const footerSocialLinks = [
        { href: 'https://twitter.com/lilypad_tech', iconUrl: '/x.svg' },
        {
            href: 'https://discord.gg/ywSEGd3d84',
            iconUrl: '/discord.svg',
        },
        {
            href: 'https://t.me/lilypadnetwork',
            iconUrl: '/telegram.svg',
        },
        {
            href: 'https://github.com/Lilypad-Tech',
            iconUrl: '/github.svg',
        },
        {
            href: 'https://www.linkedin.com/company/lilypad-network/',
            iconUrl: '/linkedin.svg',
        },
        {
            href: 'https://www.youtube.com/@LilypadNetwork/featured',
            iconUrl: '/youtube.svg',
        },
    ]

    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1 },
    })

    return (
        <html lang="en" className="uui-dark">
            <body className={INTER.className}>
                {!isCmsLoading && (
                    <PageContext.Provider value={{ strapi }}>
                        <animated.div
                            style={fade}
                            className="sticky top-0 z-40 w-full"
                        >
                            <NavBar
                                logo={
                                    <a href="/">
                                        <Image
                                            src="lilypad-logo.svg"
                                            width={155}
                                            height={32}
                                            alt="alt"
                                        />
                                    </a>
                                }
                                menuButton={
                                    <_ApplicationNavMenuButton></_ApplicationNavMenuButton>
                                }
                                openedState={{
                                    opened: menuOpened,
                                    setOpened: setMenuOpened,
                                }}
                                trailingCTA={
                                    <Anchor
                                        target="_blank"
                                        href="https://docs.lilypad.tech"
                                        className="uui-desktop:flex hidden"
                                        color="color"
                                        destructive={false}
                                        hierarchy="secondary"
                                        size="md"
                                        icon={{
                                            type: 'icon',
                                            leading: '/lightning-01.svg',
                                        }}
                                    >
                                        Get Started
                                    </Anchor>
                                }
                            >
                                {nestedMenu != null && menuOpened ? (
                                    <button
                                        className="mb-uui-2xl"
                                        onClick={() => setNestedMenu(null)}
                                    >
                                        <_NavItemBase current={true}>
                                            Back
                                        </_NavItemBase>
                                    </button>
                                ) : null}
                                {menuOpened ? (
                                    <>
                                        {nestedMenu === null && (
                                            <>
                                                <button
                                                    onClick={() => {
                                                        setNestedMenu('About')
                                                    }}
                                                >
                                                    <_NavItemBase
                                                        // TODO add all paths that have to do with the about page
                                                        current={
                                                            pathname ===
                                                            '/about'
                                                        }
                                                    >
                                                        About
                                                    </_NavItemBase>
                                                </button>

												<Link
                                                    href="https://blog.lilypad.tech"
                                                    onClick={() => {
                                                        setMenuOpened(
                                                            () => false
                                                        )
                                                    }}
                                                >
                                                    <_NavItemBase
                                                        current={
                                                            pathname === '/blog'
                                                        }
                                                    >
                                                        Blog
                                                    </_NavItemBase>
                                                </Link>

												<Link
                                                    href="https://docs.lilypad.tech"
                                                    onClick={() => {
                                                        setMenuOpened(
                                                            () => false
                                                        )
                                                    }}
                                                >
                                                    <_NavItemBase
                                                        current={
                                                            pathname === '/docs'
                                                        }
                                                    >
                                                        Docs
                                                    </_NavItemBase>
                                                </Link>

                                                <button
                                                    onClick={() => {
                                                        setNestedMenu(
                                                            'Resources'
                                                        )
                                                    }}
                                                >
                                                    <_NavItemBase
                                                        // TODO add all paths that have to do with the about page
                                                        current={
                                                            pathname ===
                                                            '/resources'
                                                        }
                                                    >
                                                        Resources
                                                    </_NavItemBase>
                                                </button>




                                            </>
                                        )}
                                        {nestedMenu === 'About' ? (
                                            <div className="no-scrollbar gap-uui-xl border-uui-1 border-uui-border-secondary p-uui-lg flex max-h-[50vh] flex-col overflow-auto rounded-xl">
                                                {aboutArray.map(
                                                    (item, index) => (
                                                        <_NavMenuItem
                                                            key={index}
                                                            title={item.title}
                                                            iconUrl={
                                                                item.iconUrl
                                                            }
                                                            href={item.href}
															target={item.target}
                                                        />
                                                    )
                                                )}
                                            </div>
                                        ) : nestedMenu === 'Resources' ? (
                                            <div className="no-scrollbar gap-uui-xl border-uui-1 border-uui-border-secondary p-uui-lg flex max-h-[50vh] flex-col overflow-auto rounded-xl">
                                                {resourcesArray.map(
                                                    (item, index) => (
                                                        <_NavMenuItem
                                                            key={index}
                                                            title={item.title}
                                                            iconUrl={
                                                                item.iconUrl
                                                            }
                                                            href={item.href}
															target={item.target}
                                                        />
                                                    )
                                                )}
                                            </div>
                                        ) : null}
                                    </>
                                ) : (
                                    <>
                                        <_NavItemDropdown
                                            current={pathname === '/About'}
                                        >
                                            {{
                                                title: 'About',
                                                dropdownList: (
                                                    <>
                                                        {aboutArray.map(
                                                            (item, index) => (
                                                                <_NavMenuItem
                                                                    key={index}
                                                                    title={item.title}
                                                                    iconUrl={item.iconUrl}
                                                                    href={item.href}
																	target={item.target}
                                                                />
                                                            )
                                                        )}
                                                    </>
                                                ),
                                            }}
                                        </_NavItemDropdown>

                                        <Link
                                            href="https://blog.lilypad.tech"
                                            onClick={() => {
                                                setMenuOpened(() => false)
                                            }}
                                        >
                                            <_NavItemBase
                                                current={pathname === '/blog'}
                                            >
                                                Blog
                                            </_NavItemBase>
                                        </Link>

										<Link
                                            href="https://docs.lilypad.tech"
                                            onClick={() => {
                                                setMenuOpened(() => false)
                                            }}
                                        >
                                            <_NavItemBase
                                                current={pathname === '/docs'}
                                            >
                                                Docs
                                            </_NavItemBase>
                                        </Link>

										<_NavItemDropdown
                                            current={pathname === '/Resources'}
                                        >
                                            {{
                                                title: 'Resources',
                                                dropdownList: (
                                                    <>
                                                        {resourcesArray.map(
                                                            (item, index) => (
                                                                <_NavMenuItem
                                                                    key={index}
                                                                    title={item.title}
                                                                    iconUrl={item.iconUrl}
                                                                    href={item.href}
																	target={item.target}
                                                                />
                                                            )
                                                        )}
                                                    </>
                                                ),
                                            }}
                                        </_NavItemDropdown>
                                    </>
                                )}
                            </NavBar>
                        </animated.div>
                        {children}
                        <Footer
                            footerIcon={{
                                src: 'lilypad-logo.svg',
                                alt: 'Lilypad Logo',
                                href: '/',
                            }}
                            socialLinks={footerSocialLinks}
                        />
                    </PageContext.Provider>
                )}
            </body>
        </html>
    )
}
