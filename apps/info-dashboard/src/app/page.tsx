"use client";
import React from "react";
import * as m from "@/paraglide/messages.js";
import Head from "next/head";
import Badge from "@/components/Badge/Badge";
import MetricsCard from "@/components/MetricsCard/MetricsCard";
import HeadingSection from "@/components/HeadingSection";
import SectionContainer from "@/components/SectionContainer";
import {
	alertAndFeedbackAlertCircle,
	arrowsArrowDown,
	arrowsArrowUp,
	arrowsSwitchVertical01,
	generalLoading01,
	generalSearchLg,
} from "@frontline-hq/untitledui-icons";
import ChartCard from "@/components/ChartCard/ChartCard";
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import { fetchMetrics, toChartData } from "@/lib/fetchers/metrics";
import RandomHexSpan from "@/components/Random/RandomHexSpan";
import FeaturedIcon from "@/components/FeaturedIcon";
import { DateTime } from "luxon";
import EmptyState from "@/components/EmptyState/EmptyState";

export default function Home() {
	const { data, isLoading, isError } = useQuery({
		queryFn: fetchMetrics,
		queryKey: ["metrics"], //Array according to Documentation
	});
	const timeData = {
		Nodes: toChartData(data?.Nodes ?? []),
		JobsCompleted: toChartData(data?.JobsCompleted ?? []),
	};
	console.log(data);
	return (
		<>
			<Head>
				<title>
					Lilypad Metrics Dashboard - Monitor the Lilypad Network!
				</title>
				<meta
					name="description"
					content="Explore the metrics dashboard for the Lilypad network. Gain insights into the decentralized world of compute."
				/>
				<meta name="robots" content="index, follow" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="canonical" href="/" />
				<meta
					property="og:title"
					content="Node Provider Metrics Dashboard - Monitor the Lilypad Network!"
				/>
				<meta
					property="og:description"
					content="Explore the metrics dashboard for the Lilypad network. Gain insights into the decentralized world of compute."
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
					className="pt-uui-4xl uui-desktop:pt-uui-6xl"
					title={m.metrics_heading_title()}
					subtitle={m.metrics_heading_subtitle()}
				/>
				<SectionContainer className=" mx-auto pt-uui-4xl w-full justify-between flex uui-desktop:gap-uui-3xl gap-uui-2xl sm:flex-row flex-col  snap-x overflow-x-auto no-scrollbar">
					{(["TotalJobs", "TotalNodes", "TotalModules"] as const).map(
						(key, index) => {
							const percentage = isLoading || isError ? 0 : 100;

							return (
								<MetricsCard
									key={index}
									title={
										key === "TotalJobs"
											? m.metrics_card_1_title()
											: key === "TotalNodes"
											? m.metrics_card_2_title()
											: m.metrics_card_3_title()
									}
								>
									{{
										badge: (
											<Badge
												icon={{
													type: "icon",
													leading:
														percentage > 0
															? arrowsArrowUp
															: percentage === 0
															? arrowsSwitchVertical01
															: arrowsArrowDown,
												}}
												badgeType="Pill color"
												color={
													percentage > 0
														? "success"
														: percentage === 0
														? "gray"
														: "error"
												}
												size="md"
											>
												{isLoading
													? "0"
													: isError
													? "err"
													: percentage}
											</Badge>
										),
										header: isLoading ? (
											<RandomHexSpan
												length={4}
											></RandomHexSpan>
										) : isError ? (
											<span>!err</span>
										) : (
											<span>{data?.[key]}</span>
										),
									}}
								</MetricsCard>
							);
						}
					)}
				</SectionContainer>
				<SectionContainer className="mx-auto pt-uui-4xl w-full justify-between flex uui-desktop:gap-uui-3xl gap-uui-2xl sm:flex-row flex-col  snap-x overflow-x-auto no-scrollbar">
					{(["Nodes", "JobsCompleted"] as const).map((key, id) => {
						return (
							<ChartCard
								key={id}
								title={
									key === "Nodes"
										? m.metrics_active_nodes_chart_title()
										: m.metrics_total_jobs_completed_chart_title()
								}
							>
								<div className="flex h-[240px] items-center">
									{isLoading ||
									isError ||
									data?.[key].length === 0 ? (
										<EmptyState
											header={
												isLoading
													? m.leaderboard_node_provider_table_loadingState_loadingText()
													: isError
													? m.leaderboard_node_provider_table_errorState_errorText()
													: m.leaderboard_node_provider_table_emptyState_emptyText()
											}
											description={
												isLoading
													? m.leaderboard_node_provider_table_loadingState_loadingHint()
													: isError
													? m.leaderboard_node_provider_table_errorState_errorHint()
													: m.leaderboard_node_provider_table_emptyState_emptyHint()
											}
										>
											<FeaturedIcon
												spinIcon={isLoading}
												iconUrl={
													isLoading
														? generalLoading01
														: isError
														? alertAndFeedbackAlertCircle
														: generalSearchLg
												}
											/>
										</EmptyState>
									) : (
										<>
											<div className="uui-text-xs font-medium text-uui-text-tertiary-600 pb-uui-3xl h-full flex items-center">
												<div className="writing-mode-vertical-lr rotate-180">
													{key === "Nodes"
														? m.metrics_active_nodes_chart_title()
														: m.metrics_total_jobs_completed_chart_title()}
												</div>
											</div>
											<div className="flex flex-col items-center h-full w-full">
												<ResponsiveContainer
													width="100%"
													height="100%"
												>
													<AreaChart
														data={timeData[key]}
														margin={{
															top: 0,
															right: 0,
															left: 0,
															bottom: 0,
														}}
													>
														<defs>
															<linearGradient
																id="gradient1"
																x1="0"
																y1="0"
																x2="0"
																y2="1"
															>
																<stop
																	offset="30%"
																	style={{
																		stopColor:
																			"rgb(var(--colormodes-uui-utility-brand-600))",
																		stopOpacity: 0.1,
																	}}
																/>
																<stop
																	offset="100%"
																	style={{
																		stopColor:
																			"rgb(var(--color-uui-black))",
																		stopOpacity: 0,
																	}}
																/>
															</linearGradient>
														</defs>
														<XAxis
															tickMargin={12}
															tickSize={0}
															scale="time"
															type="number"
															tickFormatter={(
																epochMillis
															) =>
																DateTime.fromMillis(
																	epochMillis
																).toFormat(
																	"MM yyyy"
																)
															}
															domain={[
																"auto",
																"auto",
															]}
															dataKey="epochMillis"
														/>
														<YAxis
															tickMargin={8}
															tickSize={0}
														/>
														<CartesianGrid
															syncWithTicks
															vertical={false}
														/>
														<Area
															type="monotone"
															dataKey="Count"
															fillOpacity={1}
															fill="url(#gradient1)"
														/>
													</AreaChart>
												</ResponsiveContainer>
												<div className="uui-text-xs font-medium text-uui-text-tertiary-600 pt-1">
													<div className="">
														{m.metrics_dashboard_month_time_axis_label()}
													</div>
												</div>
											</div>
										</>
									)}
								</div>
							</ChartCard>
						);
					})}
				</SectionContainer>
			</div>
		</>
	);
}
