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
import { useEffect, useState } from "react";
import CenterHeadingSection from "@/components/CenterHeadingSection/CenterHeadingSection";
import SocialProofSection from "@/components/SocialProofSection/SocialProofSection";
import IconAtom from "@/components/IconAtom/IconAtom";
import BlogPostCard from "@/components/BlogPostCard/BlogPostCard";
import Roadmap from "@/components/Roadmap/Roadmap";
import RoadmapItem from "@/components/Roadmap/RoadmapItem";

export default function Teams() {
	const trustedByArray = [
		{ src: "/bacalhau.svg", alt: "Bacalhau" },
		{ src: "/bacalhau.svg", alt: "Filecoin" },
		{ src: "/bacalhau.svg", alt: "Holon" },
		{ src: "/bacalhau.svg", alt: "Protocol Labs" },
		{ src: "/bacalhau.svg", alt: "Rare Compute" },
		{ src: "/bacalhau.svg", alt: "Spheron" },
		{ src: "/bacalhau.svg", alt: "Swan" },
	];

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

			<main className="overflow-hidden ">
				<SectionContainer>
					<CenterHeadingSection
						className="[&&]:bg-uui-bg-primary  pt-uui-7xl lg:pt-uui-9xl"
						header="Lilypad team"
						title="Meet our innovators"
						subtitle="Learn more about the company and the world-class team behind Lilypad."
					>
						<div className="w-full flex items-center justify-center pt-uui-7xl lg:pt-uui-9xl  "></div>
					</CenterHeadingSection>
				</SectionContainer>

				<SectionContainer>
					<div className="grid grid-cols-1 lg:grid-cols-2 py-uui-9xl gap-uui-3xl">
						<button className="group relative hover:bg-uui-bg-secondary_hover mb-uui-xl h-full text-left rounded-2xl bg-uui-bg-secondary p-uui-6xl lg:p-uui-7xl flex flex-col items-start justify-between">
							<h3 className=" text-uui-text-primary-900 uui-display-xs md:uui-display-sm font-semibold antialiased">
								Reach Out
							</h3>
							<div className="text-uui-text-tertiary-600 gap-uui-xs flex flex-wrap antialiased font-regular text-uui-lg md:uui-text-xl">
								<span>Get in touch with us at</span>
								<span className="font-regular underline underline-offset-4 ">
									{"more more"}
								</span>
							</div>
							<div className="rounded-full m-uui-3xl w-fit bg-uui-bg-tertiary p-uui-lg absolute right-0 top-0 cursor-pointer">
								<IconAtom iconUrl={generalCheck}></IconAtom>
							</div>
						</button>

						<button className="group relative hover:bg-uui-bg-secondary_hover mb-uui-xl h-full text-left rounded-2xl bg-uui-bg-secondary p-uui-6xl lg:p-uui-7xl flex flex-col items-start justify-between">
							<h3 className=" text-uui-text-primary-900 uui-display-xs md:uui-display-sm font-semibold antialiased">
								Read our blog
							</h3>
							<div className="text-uui-text-tertiary-600 flex flex-col antialiased font-regular text-uui-lg md:uui-text-xl">
								<span>
									Check out our latest news on the Lilypad
									blog!
								</span>
								<span className="font-regular underline underline-offset-4 ">
									Read more -{">"}
								</span>
							</div>
							<div className="rounded-full m-uui-3xl w-fit bg-uui-bg-tertiary p-uui-lg absolute right-0 top-0">
								<IconAtom
									iconUrl={educationBookOpen01}
								></IconAtom>
							</div>
						</button>
						{/* TODO turn into newsletter signup form */}
						<div className="lg:col-span-2 mb-uui-xl h-full text-left rounded-2xl bg-uui-bg-secondary gap-uui-2xl lg:gap-uui-4xl p-uui-6xl lg:p-uui-7xl flex flex-col lg:flex-row  items-start justify-start">
							<div className="lg:w-1/2">
								<h3 className="text-uui-text-primary-900 mb-uui-xl uui-display-xs md:uui-display-sm font-semibold antialiased">
									Be the first to know
								</h3>
								<div className=" text-uui-text-tertiary-600 flex flex-col antialiased font-regular text-uui-lg md:uui-text-xl">
									<span>
										Stay in the loop with everything you
										need to know.
									</span>
								</div>
							</div>
							<form className="lg:w-1/2 flex space-x-uui-xl w-full">
								<InputField
									inputSize="md"
									destructive={false}
									placeholder="Enter your e-mail"
									className="flex-1"
								>
									{{
										hint: (
											<span className="">
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
									onClick={(e) => {
										e.preventDefault();
										console.log("click");
									}}
								>
									Subscribe
								</Button>
							</form>
						</div>
					</div>
				</SectionContainer>
			</main>
		</>
	);
}
