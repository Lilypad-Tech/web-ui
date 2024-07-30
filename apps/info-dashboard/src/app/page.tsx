"use client";
import React from "react";
import * as m from "@/paraglide/messages.js";
import Head from "next/head";
import {
	Badge,
	ErrorBoundary,
	WebGLFallback,
} from "@lilypad/shared-components";
import MetricsCard from "@/components/MetricsCard/MetricsCard";
import HeadingSection from "@/components/HeadingSection";
import { SectionContainer } from "@lilypad/shared-components";
import {
	alertAndFeedbackAlertCircle,
	arrowsArrowDown,
	arrowsArrowUp,
	arrowsSwitchVertical01,
	generalLoading01,
	generalSearchLg,
} from "@frontline-hq/untitledui-icons";
import CardWithBorder from "@/components/CardWithBorder/CardWithBorder";
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import {
	fetchMetrics,
	toChartData,
	toFrontendData,
} from "@/lib/fetchers/metrics";
import RandomHexSpan from "@/components/Random/RandomHexSpan";
import FeaturedIcon from "@/components/FeaturedIcon";
import { DateTime } from "luxon";
import EmptyState from "@/components/EmptyState/EmptyState";
import ActiveNodesWorldMap from "@/components/ActiveNodesWorldMap/ActiveNodesWorldMap";
import { fetchNodes, toGeoJson } from "@/lib/fetchers/nodes";
export default function Home() {
	const {
		data: metricsData,
		isLoading: metricsIsLoading,
		isError: metricsIsError,
	} = useQuery({
		queryFn: fetchMetrics,
		queryKey: ["metrics"], //Array according to Documentation
	});
	const {
		data: nodesData,
		isLoading: nodesIsLoading,
		isError: nodesIsError,
	} = useQuery({
		queryFn: fetchNodes,
		queryKey: ["nodes"],
	});
	const metricsTransformedData = toFrontendData(metricsData);
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

			<div className="min-h-[55vh] ">
				<HeadingSection
					className="pt-uui-4xl uui-desktop:pt-uui-6xl"
					title={m.metrics_heading_title()}
					subtitle={m.metrics_heading_subtitle()}
				/>
				{/* <SectionContainer className=" mx-auto pt-uui-4xl w-full justify-between flex uui-desktop:gap-uui-3xl gap-uui-2xl sm:flex-row flex-col  snap-x overflow-x-auto no-scrollbar">
					{(
						[
							metricsTransformedData.jobsCompletedScalar,
							metricsTransformedData.nodesScalar,
							metricsTransformedData.totalHashrateScalar,
						] as const
					).map((scalar, index) => {
						return (
							<MetricsCard key={index} title={scalar.title}>
								{{
									badge: (
										<Badge
											icon={{
												type: "icon",
												leading:
													scalar.change === undefined
														? alertAndFeedbackAlertCircle
														: scalar.change > 0
														? arrowsArrowUp
														: scalar.change === 0
														? arrowsSwitchVertical01
														: arrowsArrowDown,
											}}
											badgeType="Pill color"
											color={
												scalar.change === undefined
													? "gray"
													: scalar.change > 0
													? "success"
													: scalar.change === 0
													? "gray"
													: "error"
											}
											size="md"
										>
											{metricsIsLoading
												? "0"
												: metricsIsError
												? "err"
												: scalar.change === undefined
												? "n.a."
												: scalar.change}
										</Badge>
									),
									header: metricsIsLoading ? (
										<RandomHexSpan
											length={4}
										></RandomHexSpan>
									) : metricsIsError ? (
										<span>!err</span>
									) : (
										<span>
											{scalar.Count ??
												m.coming_soon_metrics_card()}
										</span>
									),
								}}
							</MetricsCard>
						);
					})}
				</SectionContainer> */}
				{/* <SectionContainer className="mx-auto pt-uui-4xl w-full justify-between flex uui-desktop:gap-uui-3xl gap-uui-2xl sm:flex-row flex-col  snap-x overflow-x-auto no-scrollbar">
					{(["Nodes", "JobsCompleted"] as const).map((key, id) => {
						return (
							<CardWithBorder
								key={id}
								title={
									key === "Nodes"
										? m.metrics_active_nodes_chart_title()
										: m.metrics_total_jobs_completed_chart_title()
								}
							>
								<div className="flex h-[240px] items-center">
									{metricsIsLoading ||
									metricsIsError ||
									metricsData?.[key].length === 0 ? (
										<EmptyState
											header={
												metricsIsLoading
													? m.leaderboard_node_provider_table_loadingState_loadingText()
													: metricsIsError
													? m.leaderboard_node_provider_table_errorState_errorText()
													: m.leaderboard_node_provider_table_emptyState_emptyText()
											}
											description={
												metricsIsLoading
													? m.leaderboard_node_provider_table_loadingState_loadingHint()
													: metricsIsError
													? m.leaderboard_node_provider_table_errorState_errorHint()
													: m.leaderboard_node_provider_table_emptyState_emptyHint()
											}
										>
											<FeaturedIcon
												spinIcon={metricsIsLoading}
												iconUrl={
													metricsIsLoading
														? generalLoading01
														: metricsIsError
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
														data={metricsTransformedData[key]}
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
							</CardWithBorder>
						);
					})}
				</SectionContainer> */}
				<SectionContainer className=" mx-auto pt-uui-4xl w-full justify-between flex uui-desktop:gap-uui-3xl gap-uui-2xl sm:flex-row flex-col  snap-x overflow-x-auto no-scrollbar">
					<CardWithBorder
						title={m.metrics_active_nodes_world_map_title()}
					>
						{nodesIsLoading ||
						nodesIsError ||
						nodesData?.length === 0 ? (
							<EmptyState
								header={
									nodesIsLoading
										? m.leaderboard_node_provider_table_loadingState_loadingText()
										: nodesIsError
										? m.leaderboard_node_provider_table_errorState_errorText()
										: m.leaderboard_node_provider_table_emptyState_emptyText()
								}
								description={
									nodesIsLoading
										? m.leaderboard_node_provider_table_loadingState_loadingHint()
										: nodesIsError
										? m.leaderboard_node_provider_table_errorState_errorHint()
										: m.leaderboard_node_provider_table_emptyState_emptyHint()
								}
							>
								<FeaturedIcon
									spinIcon={nodesIsLoading}
									iconUrl={
										nodesIsLoading
											? generalLoading01
											: nodesIsError
											? alertAndFeedbackAlertCircle
											: generalSearchLg
									}
								/>
							</EmptyState>
						) : (
							<WebGLFallback
								fallback={
									<EmptyState
										header={m.good_patient_spider_amuse()}
										description={
											<span>
												{m.tangy_stout_guppy_loop()}
												<a>https://get.webgl.org/</a>
											</span>
										}
									>
										<FeaturedIcon
											spinIcon={false}
											iconUrl={
												alertAndFeedbackAlertCircle
											}
										/>
									</EmptyState>
								}
							>
								<ActiveNodesWorldMap
									geojson={toGeoJson(nodesData ?? [])}
									protomapsApiKey={
										process.env
											.NEXT_PUBLIC_PROTOMAPS_API_KEY as string
									}
								/>
							</WebGLFallback>
						)}
					</CardWithBorder>
				</SectionContainer>
			</div>
		</>
	);
}
