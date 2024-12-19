"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Table from "@/components/Table/Table";
import FeaturedIcon from "@/components/FeaturedIcon";
import {
	generalLoading01,
	alertAndFeedbackAlertCircle,
	generalSearchLg,
	generalSearchMd,
	generalCopy07,
	generalLinkExternal02,
	generalCheck,
} from "@frontline-hq/untitledui-icons";
import CardHeader from "@/components/CardHeader";
import { InputField } from "@lilypad/shared-components";
import { SectionContainer } from "@lilypad/shared-components";
import TableLeadText from "@/components/Table/TableLeadText";
import TableHeaderCell from "@/components/Table/TableHeaderCell";
import HeadingSection from "@/components/HeadingSection";
import { SocialIcon } from "@lilypad/shared-components";
import * as m from "@/paraglide/messages.js";
import Head from "next/head";
import {
	fetchLeaderboard,
	getHeaderData,
	toTableData,
} from "@/lib/fetchers/leaderboard";
import EmptyState from "@/components/EmptyState/EmptyState";
import Tooltip from "@/components/Tooltip/Tooltip";
import { fetchNodes } from "@/lib/fetchers/nodes";
import CardWithBorder from "@/components/CardWithBorder/CardWithBorder";
import RandomHexSpan from "@/components/Random/RandomHexSpan";
import { Badge, Anchor } from "@lilypad/shared-components";

// `${API_HOST}metrics-dashboard/metrics` is the endpoint for the metrics dashboard

export default function Leaderboard() {
	const [walletAddress, setWalletAddress] = useState("");
	const {
		data: leaderboardData,
		isLoading: leaderboardIsLoading,
		isError: leaderboardIsError,
	} = useQuery({
		queryFn: fetchLeaderboard,
		queryKey: ["leaderboard"], //Array according to Documentation
	});
	const {
		data: nodesData,
		isLoading: nodesIsLoading,
		isError: nodesIsError,
	} = useQuery({
		queryFn: fetchNodes,
		queryKey: ["nodes"], //Array according to Documentation
	});

	const [currentUrl, setCurrentUrl] = useState("");

	// Array to manage the copy badges
	const [copiedArray, setCopiedArray] = useState<
		| {
				walletId: string;
				timeoutId: ReturnType<typeof setTimeout>;
		  }[]
		| []
	>([]);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setCurrentUrl(
				encodeURIComponent(
					window.location.origin + window.location.pathname
				)
			);
			let searchParams = new URLSearchParams(window.location.search);
			const walletId = searchParams.get("wallet_id");
			if (walletId) setWalletAddress(walletId);
		}
	}, []);

	return (
		<>
			<Head>
				<title>
					Lilypad Leaderboard - Become the Top Node Provider!
				</title>
				<meta
					name="description"
					content="Check out the leaderboard for decentralized compute network node providers. Compare your rank, see your reward points, and aim to be the best!"
				/>
				<meta name="robots" content="index, follow" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="canonical" href="/" />
				<meta
					property="og:title"
					content="Node Provider Leaderboard - Become the Top Node Provider!"
				/>
				<meta
					property="og:description"
					content="Check out the leaderboard for decentralized compute network node providers. Compare your rank, see your reward points, and aim to be the best!"
				/>
				<meta property="og:url" content="/" />
				<meta property="og:type" content="website" />
			</Head>
			{/* <Helmet encodeSpecialCharacters={true}>
				<script type="application/ld+json">
					{JSON.stringify(jsonLd)}
				</script>
			</Helmet> */}
			<div className=" ">
				<HeadingSection
					className="pt-uui-6xl"
					title={m.leaderboard_heading_title()}
					subtitle={m.leaderboard_heading_subtitle()}
				/>
				<SectionContainer className="sm:pt-uui-container-padding-desktop mx-auto pt-uui-container-padding-mobile">
					{/* Set max height & min height to make table scrollable & minimize layout shifts on state changes */}
					<div className="flex flex-col mb-uui-xl md:mb-uui-4xl space-y-uui-xl md:space-y-uui-none md:flex-row md:space-x-uui-3xl">
						<CardWithBorder
							className="md:[&&]:w-1/2 "
							title={m.leaderboard_node_count_card_title()}
						>
							<div className="flex space-x-uui-5xl">
								<div className="flex-col flex space-y-uui-xs">
									<span className="uui-text-sm font-medium text-uui-text-tertiary-600">
										{m.leaderboard_node_count_online_title()}
									</span>
									<span className="text-uui-text-primary-900 uui-display-sm font-semibold">
										{/* Todo add api total Lilybit_rewards earned */}

										{nodesIsLoading ? (
											<RandomHexSpan
												length={2}
											></RandomHexSpan>
										) : nodesIsError ? (
											<span>!err</span>
										) : (
											<span>
												{
													nodesData?.filter(
														(node) => node.Online
													).length
												}
											</span>
										)}
									</span>
								</div>
							</div>
						</CardWithBorder>
						<CardWithBorder
							title={m.leaderboard_incentive_program_title()}
						>
							<div className="flex space-x-uui-5xl">
								<div className="flex-col flex space-y-uui-xs">
									<span className="uui-text-sm font-medium text-uui-text-tertiary-600">
										{m.leaderboard_incentive_program_total_title()}
									</span>
									<span className="text-uui-text-primary-900 uui-display-sm font-semibold">
										{/* Todo add api cumalative Lilybit_rewards earned */}
										{Math.trunc(
											leaderboardData
												? leaderboardData.reduce(
														(total, node) =>
															+node.Points +total, 0
												  )
												: 0
										).toLocaleString()}
									</span>
								</div>
								{/* Todo add api week total Lilybit_rewards earned */}
								{/* <div className="flex-col flex space-y-uui-xs">
									<span className="uui-text-sm font-medium text-uui-text-tertiary-600">
										{m.leaderboard_incentive_program_week_title()}
									</span>
									<span className="text-uui-text-primary-900 uui-display-sm font-semibold">
										n.a.
									</span>
								</div> */}
							</div>
						</CardWithBorder>
						<CardWithBorder
							className="gap-uui-3xl"
							title="Get started as a node provider today"
							subtitle="Check out our instructions and run a node!"
						>
							<Anchor
								href={m.leaderboard_get_started_node_provider_button_link()}
								target="_blank"
								color="color"
								destructive={false}
								hierarchy="primary"
								size="md"
								className="w-fit "
							>
								{m.leaderboard_get_started_node_provider_button_text()}
							</Anchor>
						</CardWithBorder>
					</div>

					<Table className="max-h-[70vh] min-h-[70vh] relative">
						{{
							cardHeader: (
								<CardHeader
									className="sticky bg-uui-bg-primary left-0 right-0 top-0 z-10 box-border"
									headerTitle={m.leaderboard_node_provider_table_cardHeader_headerTitle()}
									subtitle={m.leaderboard_node_provider_table_cardHeader_subtitle()}
									trailingField={
										<div className="w-full md:w-[26.188rem] ">
											<InputField
												value={walletAddress}
												onChange={(e) =>
													setWalletAddress(
														e.target.value
													)
												}
												inputSize="sm"
												placeholder={m.leaderboard_node_provider_table_inputField_placeholder()}
												iconUrl={generalSearchMd}
											/>
										</div>
									}
								/>
							),
							tableSubstitute:
								leaderboardIsLoading ||
								nodesIsLoading ||
								leaderboardIsError ||
								nodesIsError ||
								leaderboardData?.filter((d) =>
									walletAddress
										? d.Wallet.toLowerCase().includes(
												walletAddress.toLowerCase()
										  )
										: true
								).length === 0 ? (
									<EmptyState
										header={
											leaderboardIsLoading ||
											nodesIsLoading
												? m.leaderboard_node_provider_table_loadingState_loadingText()
												: leaderboardIsError ||
												  nodesIsError
												? m.leaderboard_node_provider_table_errorState_errorText()
												: m.leaderboard_node_provider_table_emptyState_emptyText()
										}
										description={
											leaderboardIsLoading ||
											nodesIsLoading
												? m.leaderboard_node_provider_table_loadingState_loadingHint()
												: leaderboardIsError ||
												  nodesIsError
												? m.leaderboard_node_provider_table_errorState_errorHint()
												: m.leaderboard_node_provider_table_emptyState_emptyHint()
										}
									>
										<FeaturedIcon
											spinIcon={
												leaderboardIsLoading ||
												nodesIsLoading
											}
											iconUrl={
												leaderboardIsLoading ||
												nodesIsLoading
													? generalLoading01
													: leaderboardIsError ||
													  nodesIsError
													? alertAndFeedbackAlertCircle
													: generalSearchLg
											}
										/>
									</EmptyState>
								) : null,
							tableRows: (
								<>
									<thead className="">
										{/* Translate -translate-y-[0.063rem] to close the 1px padding gap when sticky */}
										<tr className="sticky z-10 top-0 w-full after:w-full after:absolute after:inset-x-0 after:bottom-0 after:border-t-uui-1 after:border-t-uui-border-secondary">
											{getHeaderData().map(
												(
													{
														name,
														translation,
														tooltip,
													},
													i,
													a
												) => (
													<th
														key={name}
														className="p-0"
														colSpan={
															i === a.length - 1
																? 2
																: 1
														}
													>
														<TableHeaderCell
															title={translation}
														>
															{tooltip ? (
																<Tooltip
																	text={
																		tooltip.title
																	}
																	description={
																		tooltip.description
																	}
																/>
															) : null}
														</TableHeaderCell>
													</th>
												)
											)}
										</tr>
									</thead>
									<tbody>
										{toTableData({
											leaderboardData:
												leaderboardData ?? [],
											nodesData: nodesData ?? [],
										})
											.filter((d) =>
												walletAddress
													? d.Wallet.toLowerCase().includes(
															walletAddress.toLowerCase()
													  )
													: true
											)
											.map((row, rowIndex) => (
												<tr key={rowIndex}>
													<td>
														<TableLeadText
															title={row["Rank"]}
														/>
													</td>
													<td>
														<TableLeadText
															title={
																<Badge
																	badgeType="Pill outline"
																	color={
																		row
																			.Level
																			.color
																	}
																	size="sm"
																	icon={{
																		type: "icon",
																		leading:
																			row
																				.Level
																				.icon,
																	}}
																>
																	{
																		row
																			.Level
																			.text
																	}
																</Badge>
															}
														></TableLeadText>
													</td>
													<td>
														<TableLeadText
															title={
																<div className="flex space-x-uui-md">
																	<Badge
																		onClick={() => {
																			const url =
																				"https://sepolia.arbiscan.io/address/" +
																				row[
																					"Wallet"
																				];
																			window.open(
																				url,
																				"_blank"
																			);
																		}}
																		badgeType="Badge modern"
																		color={
																			"brand"
																		}
																		size="sm"
																		icon={{
																			type: "icon",
																			trailing:
																				generalLinkExternal02,
																		}}
																	>
																		{`${row[
																			"Wallet"
																		].slice(
																			0,
																			6
																		)}...${row[
																			"Wallet"
																		].slice(
																			-4
																		)}`}
																	</Badge>
																	<Badge
																		badgeType="Badge modern"
																		color="brand"
																		size="sm"
																		icon={{
																			type: "icon",
																			trailing:
																				copiedArray.find(
																					(
																						item
																					) =>
																						item.walletId ===
																						row[
																							"Wallet"
																						]
																				)
																					? generalCheck
																					: generalCopy07,
																		}}
																		onClick={() => {
																			setCopiedArray(
																				(
																					copiedArray
																				) => {
																					const existingItem =
																						copiedArray.find(
																							(
																								item
																							) =>
																								item.walletId ===
																								row[
																									"Wallet"
																								]
																						);

																					if (
																						existingItem
																					) {
																						// Cancel the previous timeout if it exists
																						clearTimeout(
																							existingItem.timeoutId
																						);
																					}

																					// Create a new timeout to remove the wallet ID after 2 seconds
																					const timeoutId =
																						setTimeout(
																							() => {
																								setCopiedArray(
																									(
																										copiedArray
																									) =>
																										copiedArray.filter(
																											(
																												item
																											) =>
																												item.walletId !==
																												row[
																													"Wallet"
																												]
																										)
																								);
																							},
																							2000
																						);

																					// Return the updated array
																					if (
																						existingItem
																					) {
																						// Replace the existing item with the new timeoutId
																						return copiedArray.map(
																							(
																								item
																							) =>
																								item.walletId ===
																								row[
																									"Wallet"
																								]
																									? {
																											walletId:
																												row[
																													"Wallet"
																												],
																											timeoutId,
																									  }
																									: item
																						);
																					} else {
																						// Add the new item to the array
																						return [
																							...copiedArray,
																							{
																								walletId:
																									row[
																										"Wallet"
																									],
																								timeoutId,
																							},
																						];
																					}
																				}
																			);
																			navigator.clipboard.writeText(
																				row[
																					"Wallet"
																				]
																			);
																		}}
																	>
																		{m.leaderboard_node_provider_table_wallet_id_copy_text()}
																	</Badge>
																</div>
															}
														/>
													</td>

													<td>
														<TableLeadText
															title={
																row[
																	"Reward Points"
																]
															}
														/>
													</td>
													{/* <td>
														<TableLeadText
															title={
																<Badge
																	badgeType="Badge modern"
																	color={
																		row[
																			"Status"
																		].color
																	}
																	size="sm"
																	icon={{
																		type: "dot",
																	}}
																>
																	{
																		row[
																			"Status"
																		]
																			.translation
																	}
																</Badge>
															}
														/>
													</td>
													<td>
														<TableLeadText
															title={
																row[
																	"Connected since"
																]
															}
														/>
													</td> */}
													<td>
														<TableLeadText
															title={
																<a
																	href={row[
																		"Share"
																	].getUrl({
																		currentUrl,
																		currentLevel:
																			row
																				.Level
																				.text,
																	})}
																	target="_blank"
																	rel="noopener noreferrer"
																>
																	<SocialIcon
																		className="[&&]:h-uui-xl [&&]:w-uui-xl"
																		iconUrl="/x.svg"
																	/>
																</a>
															}
														/>
													</td>
												</tr>
											))}
									</tbody>
								</>
							),
							// Todo add in pagination after we receive the paginated API
							// pagination: (
							//   <div className=" sticky bg-uui-bg-primary left-0 right-0 bottom-0 flex justify-between items-center z-10">
							//     <button>Left</button>
							//     <h1>Header</h1>
							//     <button>Right</button>
							//   </div>
							// ),
						}}
					</Table>
				</SectionContainer>
			</div>
		</>
	);
}
