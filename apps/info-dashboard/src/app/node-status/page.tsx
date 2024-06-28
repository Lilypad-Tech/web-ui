"use client";

import HeadingSection from "@/components/HeadingSection";

import { fetchNodes } from "@/lib/fetchers/nodes";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { useEffect, useState } from "react";
import * as m from "@/paraglide/messages";
import SectionContainer from "@/components/SectionContainer";
import Table from "@/components/Table/Table";
import CardHeader from "@/components/CardHeader";
import InputField from "@/components/InputField/Inputfield";
import {
	alertAndFeedbackAlertCircle,
	generalLoading01,
	generalSearchLg,
	generalSearchMd,
} from "@frontline-hq/untitledui-icons";
import EmptyState from "@/components/EmptyState/EmptyState";
import FeaturedIcon from "@/components/FeaturedIcon";
import TableHeaderCell from "@/components/Table/TableHeaderCell";
import Tooltip from "@/components/Tooltip/Tooltip";
import TableLeadText from "@/components/Table/TableLeadText";
import Badge from "@/components/Badge/Badge";
import {
	fetchNodeStatus,
	getHeaderData,
	toTableData,
} from "@/lib/fetchers/node-status";
import {
	getNodeEthBalances,
	getNodeLPBalances,
} from "@/lib/fetchers/node-balances";

export default function NodeStatus() {
	const [walletAddress, setWalletAddress] = useState("");
	const {
		data: nodeStatusData,
		isLoading: nodeStatusIsloading,
		isError: nodeStatusIsError,
	} = useQuery({
		queryFn: fetchNodeStatus,
		queryKey: ["nodeStatus"], //Array according to Documentation
	});
	const {
		data: nodesData,
		isLoading: nodesIsLoading,
		isError: nodesIsError,
	} = useQuery({
		queryFn: fetchNodes,
		queryKey: ["nodes"], //Array according to Documentation
	});
	const {
		data: nodesLPBalancesData,
		isLoading: nodesLPBalancesIsLoading,
		isError: nodesLPBalancesIsError,
	} = useQuery({
		queryFn: async () =>
			getNodeLPBalances(nodesData?.map((n) => n.ID) ?? []),
		queryKey: ["nodesLPBalances", nodesData?.map((n) => n.ID)], //Array according to Documentation
		enabled: !!nodesData,
		retry: false,
	});
	const {
		data: nodesEthBalancesData,
		isLoading: nodesEthBalancesIsLoading,
		isError: nodesEthBalancesIsError,
	} = useQuery({
		queryFn: async () =>
			getNodeEthBalances(nodesData?.map((n) => n.ID) ?? []),
		queryKey: ["nodesEthBalances", nodesData?.map((n) => n.ID)], //Array according to Documentation
		enabled: !!nodesData,

		retry: false,
	});

	const [currentUrl, setCurrentUrl] = useState("");

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
					Lilypad Node Status - Monitor Your Node Performance!
				</title>
				<meta
					name="description"
					content="Get the latest status updates on your Lilypad nodes. Ensure your nodes are running optimally."
				/>
				<meta name="robots" content="index, follow" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="canonical" href="/" />
				<meta
					property="og:title"
					content="Lilypad Node Status - Monitor Your Node Performance!"
				/>
				<meta
					property="og:description"
					content="Get the latest status updates on your Lilypad nodes. Monitor performance, uptime, and ensure your nodes are running optimally."
				/>
				<meta property="og:url" content="/" />
				<meta property="og:type" content="website" />
			</Head>
			<div className=" ">
				<HeadingSection
					className="pt-uui-6xl"
					title={m.node_status_heading_title()}
					subtitle={m.node_status_heading_subtitle()}
				/>
				<SectionContainer className="sm:pt-uui-container-padding-desktop mx-auto pt-uui-container-padding-mobile">
					<Table className="max-h-[70vh] min-h-[70vh] relative">
						{{
							cardHeader: (
								<CardHeader
									className="sticky bg-uui-bg-primary left-0 right-0 top-0 z-10 box-border"
									headerTitle={m.node_status_node_overview_table_cardHeader_headerTitle()}
									subtitle={m.node_status_node_overview_table_cardHeader_subTitle()}
									trailingField={
										<div className="w-full md:w-[26.188rem] ">
											<InputField
												value={walletAddress}
												onChange={(e) =>
													setWalletAddress(
														e.target.value
													)
												}
												placeholder={m.node_status_node_overview_table_inputField_placeholder()}
												iconUrl={generalSearchMd}
											/>
										</div>
									}
								/>
							),
							tableSubstitute:
								nodeStatusIsloading ||
								nodesIsLoading ||
								nodesEthBalancesIsLoading ||
								nodesLPBalancesIsLoading ||
								nodeStatusIsError ||
								nodesIsError ||
								nodesEthBalancesIsError ||
								nodesLPBalancesIsError ||
								nodeStatusData?.filter((d) =>
									walletAddress
										? d.Wallet.includes(walletAddress)
										: true
								).length === 0 ? (
									<EmptyState
										header={
											nodeStatusIsloading ||
											nodesIsLoading ||
											nodesEthBalancesIsLoading ||
											nodesLPBalancesIsLoading
												? m.node_status_node_overview_table_loadingState_loadingText()
												: nodeStatusIsError ||
												  nodesIsError ||
												  nodesEthBalancesIsError ||
												  nodesLPBalancesIsError
												? m.node_status_node_overview_table_errorState_errorText()
												: m.node_status_node_overview_table_emptyState_emptyText()
										}
										description={
											nodeStatusIsloading ||
											nodesIsLoading ||
											nodesEthBalancesIsLoading ||
											nodesLPBalancesIsLoading
												? m.node_status_node_overview_table_loadingState_loadingHint()
												: nodeStatusIsError ||
												  nodesIsError ||
												  nodesEthBalancesIsError ||
												  nodesLPBalancesIsError
												? m.node_status_node_overview_table_errorState_errorHint()
												: m.node_status_node_overview_table_emptyState_emptyHint()
										}
									>
										<FeaturedIcon
											spinIcon={
												nodeStatusIsloading ||
												nodesIsLoading ||
												nodesEthBalancesIsLoading ||
												nodesLPBalancesIsLoading
											}
											iconUrl={
												nodeStatusIsloading ||
												nodesIsLoading ||
												nodesEthBalancesIsLoading ||
												nodesLPBalancesIsLoading
													? generalLoading01
													: nodeStatusIsError ||
													  nodesIsError ||
													  nodesEthBalancesIsError ||
													  nodesLPBalancesIsError
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
											nodeStatusData:
												nodeStatusData ?? [],
											nodesData: nodesData ?? [],
											lpBalances:
												nodesLPBalancesData ?? [],
											ethBalances:
												nodesEthBalancesData ?? [],
										})
											.filter((d) =>
												walletAddress
													? d.Wallet.includes(
															walletAddress
													  )
													: true
											)
											.map((row, rowIndex) => (
												<tr key={rowIndex}>
													<td>
														<TableLeadText
															title={
																row["Wallet"]
															}
														/>
													</td>
													<td>
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
																	"Available ETH"
																]
															}
														/>
													</td>
													<td>
														<TableLeadText
															title={
																row[
																	"Available LP"
																]
															}
														/>
													</td>
													<td>
														<TableLeadText
															className="whitespace-nowrap"
															title={row["Chain"]}
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
													</td>
													{/* <td>
														<TableLeadText
															title={
																row[
																	"Last POW submitted"
																]
															}
														/>
													</td> */}
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
