"use client";
import GroupBadge from "@/components/GroupBadge/GroupBadge";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Anchor, Badge, SectionContainer } from "@lilypad/shared-components";
import { SocialIcon } from "@lilypad/shared-components";
import Image from "next/image";

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

	return (
		<main className=" ">
			<SectionContainer>
				<div className="bg-uui-bg-primary flex mx-auto justify-between items-center  space-x-uui-7xl px-uui-4xl">
					<div className="items-start flex flex-col">
						<GroupBadge
							badge="leading"
							color="error"
							message="Whats up"
							text="badge text"
							size="lg"
							theme="modern"
						>
							yea
						</GroupBadge>
						<Badge
							badgeType="Badge modern"
							color="success"
							size="md"
							icon={{ type: "dot" }}
						>
							Whats new
						</Badge>
						<div className="pt-uui-xl pb-uui-3xl flex space-x-uui-xl uui-display-xl font-semibold text-uui-text-primary-900 ">
							<h1>AI that’s</h1>
							<h1 className="text-uui-text-quarterary-500">
								truly
							</h1>
							<h1>open</h1>
						</div>
						<h5 className="pb-uui-6xl uui-text-xl font-regular text-uui-text-tertiary-600">
							Serverless Distributed Compute for AI
						</h5>
						<Anchor
							className="[&&]:rounded-full"
							color="color"
							destructive={false}
							hierarchy="primary"
							size="2xl"
						>
							Get started
						</Anchor>
						<div className="pt-uui-9xl">ddsd</div>
					</div>
					<Image
						objectFit="contain"
						height={400}
						width={400}
						alt="Lilypad Header"
						src="/lilypad-placeholder.png"
					/>
				</div>
				<div className=" bg-uui-bg-secondary py-uui-9xl ">
					<div
						className="text-center mx-auto  max-w-uui-width-2xl
					"
					>
						<h5 className="text-uui-text-brand-secondary-700 font-semibold antialiased uui-text-md">
							Mission Statement
						</h5>
						<h2 className="text-uui-text-primary-900 pb-uui-2xl pt-uui-lg uui-display-lg font-semibold">
							We create an AI-driven decentralized network that
							uses underutilized resources to make efficient,
							sustainable technology accessible to everyone.
						</h2>
					</div>
				</div>
				<div className=" py-uui-9xl">
					<div className="text-center mx-auto mb-uui-7xl">
						<h5 className="text-uui-text-brand-secondary-700 font-semibold antialiased uui-text-md">
							Innovate. Build. Compute.
						</h5>
						<h2 className="text-uui-text-primary-900 pb-uui-2xl pt-uui-lg uui-display-md font-semibold">
							Use the LilyPad network
						</h2>
						<span className="text-uui-text-tertiary-600 uui-text-xl font-regular">
							We offer three paths of interaction with LilyPad.
						</span>
					</div>
					<div className="flex flex-col lg:flex-row space-y-uui-4xl lg:space-y-uui-none lg:space-x-uui-4xl">
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
				</div>
				<div className=" bg-uui-bg-secondary py-uui-9xl ">
					<div
						className="text-center mx-auto  max-w-uui-width-xl
					"
					>
						<h5 className="text-uui-text-brand-secondary-700 font-semibold antialiased uui-text-md">
							Coming in Q4 2024
						</h5>
						<h2 className="text-uui-text-primary-900 pb-uui-2xl pt-uui-lg uui-display-md font-semibold">
							Introducing Lilypad Token: Power your projects and
							fuel innovation with the currency of decentralized
							computing.
						</h2>
						<span className="text-uui-text-tertiary-600 uui-text-xl font-regular">
							Be the first to know about the token release, join
							our socials
						</span>
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
					</div>
				</div>
			</SectionContainer>
		</main>
	);
}
