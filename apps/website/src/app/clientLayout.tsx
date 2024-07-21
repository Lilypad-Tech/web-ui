"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import _NavItemBase from "@/components/_NavItemBase/_NavItemBase";
import _ApplicationNavMenuButton from "@/components/_ApplicationNavMenuButton/_ApplicationNavMenuButton";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import _NavItemDropdown from "@/components/_NavItemDropdown/_NavItemDropdown";
import _NavMenuItem from "@/components/_NavMenuItem/_NavMenuItem";
import {
	chartsBarChart05,
	educationBookClosed,
	generalHelpCircle,
	imagesCamera01,
	mapsAndTravelRoute,
	mediaAndDevicesLightbulb05,
	mediaAndDevicesTv03,
	usersUsers03,
	weatherLightning01,
} from "@frontline-hq/untitledui-icons";
import { Anchor } from "@lilypad/shared-components";

const INTER = Inter({ subsets: ["latin"] });

export default function ClientLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [menuOpened, setMenuOpened] = useState(false);
	const [nestedMenu, setNestedMenu] = useState<null | "About" | "Resources">(
		null
	);

	const [bannerOpened, setBannerOpened] = useState(true);

	const pathname = usePathname();

	const resourcesArray = [
		{
			description: "The latest industry news, updates and info",
			title: "Discord",
			iconUrl: "/discord.svg",
			target: "_blank",
			href: "https://discord.gg/lilypad-network",
		},
		{
			description: "The latest industry news, updates and info",
			title: "Blog",
			iconUrl: educationBookClosed,
			href: "/test",
			target: "_self",
		},
		{
			description: "The latest industry news, updates and info",
			title: "Github",
			iconUrl: "/github.svg",
			href: "https://github.com/Lilypad-Tech",
			target: "_blank",
		},
		{
			description: "The latest industry news, updates and info",
			title: "Metrics Dashboard",
			iconUrl: chartsBarChart05,
			href: "https://info.lilypad.tech/",
			target: "_blank",
		},
		{
			description: "The latest industry news, updates and info",
			title: "Media Kit",
			iconUrl: imagesCamera01,
			href: "/media-kit",
			target: "_self",
		},
		{
			description: "The latest industry news, updates and info",
			title: "FAQ",
			iconUrl: generalHelpCircle,
			href: "/faq",
			target: "_self",
		},
	];

	const aboutArray = [
		{
			description: "The latest industry news, updates and info",
			title: "About us",
			iconUrl: "/lilypad-icon.svg",
			href: "/test",
			target: "_self", // Default target if not specified
		},
		{
			description: "The latest industry news, updates and info",
			title: "Our team",
			iconUrl: usersUsers03,
			href: "/test",
			target: "_self",
		},
		{
			description: "The latest industry news, updates and info",
			title: "Roadmap",
			iconUrl: mapsAndTravelRoute,
			href: "/#roadmap",
			target: "_self",
		},
		{
			description: "The latest industry news, updates and info",
			title: "Press/Media",
			iconUrl: mediaAndDevicesTv03,
			href: "/#products",
			target: "_self",
		},
		{
			description: "The latest industry news, updates and info",
			title: "Use Cases",
			iconUrl: mediaAndDevicesLightbulb05,
			href: "/#products",
			target: "_self",
		},
	];

	return (
		<html lang="en" className="uui-dark">
			<body className={INTER.className}>
				<div className="sticky top-0 w-full z-40">
					<NavBar
						logo={
							<a href="/">
								<Image
									src="lilypad-logo.svg"
									width={155}
									height={32}
									alt={"alt"}
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
								href="https://lilypadnetwork.notion.site/Leap-into-Lilypad-s-IncentiveNet-9e9b12936d4340ad9417d92dab8bd9d1"
								className="hidden uui-desktop:flex"
								color="color"
								destructive={false}
								hierarchy="secondary"
								size="md"
								icon={{
									type: "icon",
									leading: weatherLightning01,
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
									{"Back"}
								</_NavItemBase>
							</button>
						) : null}
						{menuOpened ? (
							<>
								{nestedMenu === null && (
									<>
										<button
											onClick={() => {
												setNestedMenu("About");
											}}
										>
											<_NavItemBase
												// TODO add all paths that have to do with the about page
												current={pathname === "/about"}
											>
												{"About"}
											</_NavItemBase>
										</button>
										<Link
											href="/#products"
											onClick={() => {
												setMenuOpened(() => false);
											}}
										>
											<_NavItemBase
												current={pathname === "/"}
											>
												{"Products"}
											</_NavItemBase>
										</Link>
										<button
											onClick={() => {
												setNestedMenu("Resources");
											}}
										>
											<_NavItemBase
												// TODO add all paths that have to do with the about page
												current={
													pathname === "/resources"
												}
											>
												{"Resources"}
											</_NavItemBase>
										</button>

										<Link
											href="/docs"
											onClick={() => {
												setMenuOpened(() => false);
											}}
										>
											<_NavItemBase
												current={pathname === "/docs"}
											>
												{"Docs"}
											</_NavItemBase>
										</Link>
									</>
								)}
								{nestedMenu === "About" ? (
									<div className="overflow-auto no-scrollbar max-h-[50vh] flex flex-col gap-uui-xl border-uui-1 border-uui-border-secondary rounded-xl p-uui-lg">
										{aboutArray.map((item, index) => (
											<_NavMenuItem
												key={index}
												description={item.description}
												title={item.title}
												iconUrl={item.iconUrl}
												href={item.href}
											/>
										))}
									</div>
								) : nestedMenu === "Resources" ? (
									<div className="overflow-auto no-scrollbar max-h-[50vh] flex flex-col gap-uui-xl border-uui-1 border-uui-border-secondary rounded-xl p-uui-lg">
										{resourcesArray.map((item, index) => (
											<_NavMenuItem
												key={index}
												description={item.description}
												title={item.title}
												iconUrl={item.iconUrl}
												href={item.href}
											/>
										))}
									</div>
								) : null}
							</>
						) : (
							<>
								<_NavItemDropdown
									current={pathname === "/About"}
								>
									{{
										title: "About",
										dropdownList: (
											<>
												{aboutArray.map(
													(item, index) => (
														<_NavMenuItem
															key={index}
															description={
																item.description
															}
															title={item.title}
															iconUrl={
																item.iconUrl
															}
															href={item.href}
														/>
													)
												)}
											</>
										),
									}}
								</_NavItemDropdown>
								<Link
									href="/#products"
									onClick={() => {
										setMenuOpened(() => false);
									}}
								>
									<_NavItemBase current={pathname === "/"}>
										{"Products"}
									</_NavItemBase>
								</Link>
								<_NavItemDropdown
									current={pathname === "/Resources"}
								>
									{{
										title: "Resources",
										dropdownList: (
											<>
												{resourcesArray.map(
													(item, index) => (
														<_NavMenuItem
															key={index}
															description={
																item.description
															}
															title={item.title}
															iconUrl={
																item.iconUrl
															}
															href={item.href}
														/>
													)
												)}
											</>
										),
									}}
								</_NavItemDropdown>

								<Link
									href="/docs"
									onClick={() => {
										setMenuOpened(() => false);
									}}
								>
									<_NavItemBase
										current={pathname === "/docs"}
									>
										{"Docs"}
									</_NavItemBase>
								</Link>
							</>
						)}
					</NavBar>
				</div>
				{children}
			</body>
		</html>
	);
}
