"use client";
import GroupBadge from "@/components/GroupBadge/GroupBadge";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Anchor, Badge, SectionContainer } from "@lilypad/shared-components";
import { SocialIcon } from "@lilypad/shared-components";
import { arrowsArrowRight } from "@frontline-hq/untitledui-icons";

import Image from "next/image";
import { useEffect, useState } from "react";
import CenterHeadingSection from "@/components/CenterHeadingSection/CenterHeadingSection";

export default function Home() {
	const socialLinks = [
		{ href: "https://twitter.com/lilypad_tech", iconUrl: "/x.svg" },
		{
			href: "https://discord.gg/zWYTNZqB",
			iconUrl: "/discord.svg",
		},
		{
			href: "https://t.me/lilypadnetwork",
			iconUrl: "/telegram.svg",
		},
	];

	const productCardsData = [
		{
			header: "Marketplace",
			title: "Monetize your GPU - turn power into profit",
			subtitle:
				"Small text about. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore",
			anchorHref: "/marketplace",
			anchorText: "Learn more",
		},
		{
			header: "Compute as a service",
			title: "Run compute jobs",
			subtitle:
				"Small text about. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore",
			anchorHref: "/marketplace",
			anchorText: "Learn more",
		},
		{
			header: "Module marketplace",
			title: "Build AI.",
			subtitle:
				"Small text about. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore",
			anchorHref: "/marketplace",
			anchorText: "Learn more",
		},
	];

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

	return (
		<main className="overflow-hidden ">
			<SectionContainer>
				<div className="bg-uui-bg-primary flex flex-col lg:flex-row justify-between items-end px-uui-sm space-y-uui-7xl lg:space-y-uui-none lg:gap-uui-9xl lg:pl-uui-4xl pt-uui-7xl lg:pb-uui-9xl ">
					<div className="items-start w-full lg:w-fit justify-start flex flex-col lg:flex-grow mr-auto">
						<GroupBadge
							onClick={() =>
								window.open(
									"https://lilypadnetwork.notion.site/Welcome-to-Lilypad-s-IncentiveNet-9e9b12936d4340ad9417d92dab8bd9d1",
									"_blank"
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
								screenSize === "xl" || screenSize === "2xl"
									? "lg"
									: "md"
							}
							theme="modern"
						/>
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
							Serverless Distributed Compute for AI
						</h5>
						<Anchor
							target="_blank"
							href="https://lilypadnetwork.notion.site/Leap-into-Lilypad-s-IncentiveNet-9e9b12936d4340ad9417d92dab8bd9d1"
							className="[&&]:rounded-full w-full md:w-fit"
							color="color"
							destructive={false}
							hierarchy="primary"
							size={
								screenSize === "xl" || screenSize === "2xl"
									? "2xl"
									: "xl"
							}
						>
							Get started
						</Anchor>
						<div className="flex space-x-uui-xl pt-uui-7xl lg:pt-uui-9xl">
							{socialLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
								>
									<SocialIcon
										className="w-[2rem] h-[2rem]"
										iconUrl={link.iconUrl}
									/>
								</a>
							))}
						</div>
					</div>
					<div className="relative w-full lg:w-1/2 lg:h-full max-w-2xl mr-auto">
						<Image
							className="mr-auto lg:mx-auto lg:mr-0 lg:ml-auto object-cover w-full h-full"
							layout="responsive"
							width={500}
							height={500}
							alt="Lilypad Header"
							src="/lilypad-fill.png"
						/>
					</div>
				</div>

				<div className=" bg-uui-bg-secondary  py-uui-7xl lg:py-uui-9xl  ">
					<div className="text-center mx-auto  max-w-uui-width-2xl">
						<h5 className="text-uui-text-brand-secondary-700 font-semibold antialiased uui-text-sm md:uui-text-md">
							Mission Statement
						</h5>
						<h2 className="text-uui-text-primary-900 pt-uui-lg uui-display-xs md:uui-display-lg font-semibold">
							We create an AI-driven decentralized network that
							uses underutilized resources to make efficient,
							sustainable technology accessible to everyone.
						</h2>
					</div>
				</div>
				<CenterHeadingSection
					className="[&&]:bg-uui-bg-primary"
					title="Use the LilyPad network"
					subtitle="We offer three paths of interaction with LilyPad."
					header="Innovate. Build. Compute."
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

				<CenterHeadingSection
					title="Introducing Lilypad Token: Power your projects and
					fuel innovation with the currency of decentralized
					computing."
					subtitle="Be the first to know about the token release, join
					our socials"
					header="Coming in Q4 2024"
				>
					<div className="pt-uui-4xl flex items-center justify-center w-full">
						<div className="flex space-x-uui-xl">
							{socialLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
								>
									<SocialIcon
										className="w-[2rem] h-[2rem]"
										iconUrl={link.iconUrl}
									></SocialIcon>
								</a>
							))}
						</div>
					</div>
				</CenterHeadingSection>
			</SectionContainer>
		</main>
	);
}
