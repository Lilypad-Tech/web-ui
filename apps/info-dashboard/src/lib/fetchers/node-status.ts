import { ascending, sort } from "d3";

export type NodeStatusReturnType = {
	Wallet: string;
	Status: string;
	"Available ETH": number;
	"Available LP": number;
	Chain: string;
	"Connected since": Date;
	"Last POW submitted": Date;
}[];
import * as m from "../../paraglide/messages";

import { NodesEndpointReturnType } from "./nodes";
import { Balances, PowSubmissions } from "./node-chain-data";
import { DateTime } from "luxon";

export async function fetchNodeStatus() {
	const API_HOST = process.env.NEXT_PUBLIC_API_HOST;
	const leaderboard_url = `${API_HOST}metrics-dashboard/leaderboard`;
	const raw = await fetch(leaderboard_url);
	return (await raw.json()) as NodeStatusReturnType;
}

export function toTableData({
	nodeStatusData,
	nodesData,
	lpBalances,
	ethBalances,
	powSubmissions,
}: {
	nodeStatusData: NodeStatusReturnType;
	nodesData: NodesEndpointReturnType;
	lpBalances: Balances;
	ethBalances: Balances;
	powSubmissions: PowSubmissions;
}) {
	return sort(nodeStatusData, (a, b) =>
		ascending(Number(a.Wallet), Number(b.Wallet))
	).map(({ Wallet }) => {
		const nodes = nodesData.find((nodeData) => nodeData.ID === Wallet);
		const online = nodes?.Online;
		const connectedSince = nodes?.ConnectedSince;
		const lastSubmissionComplete = powSubmissions.find(
			(s) => s.address === Wallet
		)?.lastSubmission.complete_timestamp;

		const lastSubmissionComleteIsoDate = lastSubmissionComplete
			? DateTime.fromSeconds(lastSubmissionComplete)
					.toUTC()
					.set({ second: 0, millisecond: 0 })
			: undefined;

		const connectedSinceIsoDate = connectedSince
			? DateTime.fromMillis(connectedSince)
					.toUTC()
					.set({ second: 0, millisecond: 0 })
			: undefined;

		const lastPowSubmittedTime = lastSubmissionComleteIsoDate
			? `${lastSubmissionComleteIsoDate.toISODate()} ${lastSubmissionComleteIsoDate.toISOTime(
					{
						suppressMilliseconds: true,
						suppressSeconds: true,
						includeOffset: false,
					}
			  )}`
			: "n.a.";

		const connectedSinceTime = connectedSinceIsoDate
			? `${connectedSinceIsoDate.toISODate()} ${connectedSinceIsoDate.toISOTime(
					{
						suppressMilliseconds: true,
						suppressSeconds: true,
						includeOffset: false,
					}
			  )}`
			: "n.a.";

		return {
			Wallet: Wallet.toLowerCase(),
			Status: (() => {
				return {
					online,
					color: online
						? lastSubmissionComplete
							? "success"
							: "warning"
						: "gray",
					translation:
						online === undefined
							? m.node_status_node_overview_table_no_data_status()
							: online
							? lastSubmissionComplete
								? m.node_status_node_overview_table_online_status()
								: m.node_status_node_overview_table_warning_status()
							: m.node_status_node_overview_table_offline_status(),
				} as const;
			})(),
			"Available ETH": ethBalances.find(
				(balance) => balance.address === Wallet
			)?.balance,
			"Available LP": lpBalances.find(
				(balance) => balance.address === Wallet
			)?.balance,
			"Last POW submitted": lastPowSubmittedTime,
			"Connected since": connectedSinceTime,
			Chain: "Arbitrum Sepolia",
		};
	});
}

export function getHeaderData() {
	return [
		{
			name: "Wallet",
			translation: m.node_status_header_titles_wallet(),
			tooltip: undefined,
		},
		/* {
			name: "Status",
			translation: m.node_status_header_titles_status(),
			tooltip: {
				title: m.node_status_header_tooltip_title_status(),
				description: m.node_status_header_tooltip_description_status(),
			},
		}, */
		{
			name: "Available ETH",
			translation: m.node_status_header_titles_available_eth(),
			tooltip: {
				title: m.node_status_header_tooltip_title_available_eth(),
				description:
					m.node_status_header_tooltip_description_available_eth(),
			},
		},
		{
			name: "Available LP",
			translation: m.node_status_header_titles_available_lp(),
			tooltip: {
				title: m.node_status_header_tooltip_title_available_lp(),
				description:
					m.node_status_header_tooltip_description_available_lp(),
			},
		},
		{
			name: "Last POW submitted",
			translation: m.node_status_header_titles_last_pow_submitted(),
			tooltip: {
				title: m.node_status_header_tooltip_title_last_pow_submitted(),
				description:
					m.node_status_header_tooltip_description_last_pow_submitted(),
			},
		},
		/* {
			name: "Connected since",
			translation: m.node_status_header_titles_connected_since(),
			tooltip: {
				title: m.node_status_header_tooltip_title_connected_since(),
				description:
					m.node_status_header_tooltip_description_connected_since(),
			},
		}, */

		{
			name: "Chain",
			translation: m.node_status_header_titles_chain(),
			tooltip: {
				title: m.node_status_header_tooltip_title_chain(),
				description: m.node_status_header_tooltip_description_chain(),
			},
		},
	] as const;
}
