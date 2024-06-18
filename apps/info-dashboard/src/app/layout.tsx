"use client";
import { languageTag } from "@/paraglide/runtime.js";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBarUntitled from "@/components/NavBar";
import Footer from "@/components/Footer";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import _NavItemBase from "@/components/_NavItemBase/_NavItemBase";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import _ApplicationNavMenuButton from "@/components/_ApplicationNavMenuButton/_ApplicationNavMenuButton";
import { useState } from "react";
import * as m from "@/paraglide/messages.js";

const INTER = Inter({ subsets: ["latin"] });

export const METADATA: Metadata = {
	title: m.info_dashboard_page_meta_title(),
	description: m.info_dashboard_page_meta_description(),
};

/* TODO check if the telegram is correct */

const SOCIALLINKS = [
	{ href: m.metrics_footer_social_link_twitter(), iconUrl: "/x.svg" },
	{
		href: m.metrics_footer_social_link_discord(),
		iconUrl: "/discord.svg",
	},
	{
		href: m.metrics_footer_social_link_telegram(),
		iconUrl: "/telegram.svg",
	},
	{
		href: m.metrics_footer_social_link_github(),
		iconUrl: "/github.svg",
	},
	{
		href: m.metrics_footer_social_link_linkedin(),
		iconUrl: "/linkedin.svg",
	},
	{
		href: m.metrics_footer_social_link_youtube(),
		iconUrl: "/youtube.svg",
	},
];

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [menuOpened, setMenuOpened] = useState(false);
	const pathname = usePathname();
	return (
		<html className="uui-dark" lang={languageTag()}>
			<body className={INTER.className}>
				<ReactQueryProvider>
					<NavBarUntitled
						logo={
							<a href="/">
								<Image
									src="lilypad-logo.svg"
									width={155}
									height={32}
									alt={m.metrics_navbar_lilypad_logo_alt()}
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
					>
						<a href={m.metrics_nav_item_home_link()}>
							<_NavItemBase>
								{m.metrics_nav_item_home()}
							</_NavItemBase>
						</a>
						<Link
							href="/"
							onClick={() => {
								setMenuOpened(() => false);
							}}
						>
							<_NavItemBase current={pathname === "/"}>
								{m.metrics_nav_item_metrics()}
							</_NavItemBase>
						</Link>
						<Link
							href="/leaderboard"
							onClick={() => {
								setMenuOpened(() => false);
							}}
						>
							<_NavItemBase current={pathname === "/leaderboard"}>
								{m.metrics_nav_item_leaderboard()}
							</_NavItemBase>
						</Link>
					</NavBarUntitled>
					{children}
					<Footer
						footerIcon={{
							src: "lilypad-logo.svg",
							alt: m.footer_lilypad_logo_alt(),
							href: "#top",
						}}
						socialLinks={SOCIALLINKS}
					/>
				</ReactQueryProvider>
			</body>
		</html>
	);
}
