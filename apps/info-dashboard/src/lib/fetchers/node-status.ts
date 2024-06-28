import { ascending, sort } from "d3";
import {Web3} from "web3";

const web3 = new Web3({
	provider: 'https://sepolia-rollup.arbitrum.io/rpc',
	config: {
	  defaultTransactionType: '0x0',
	},
  });

// export async function fetchEthBalance() {
// 	const address = "0x230115404c551Fcd0B6d447DE1DaD3afca230E07";
// }

// const account  = web3.eth.accounts.

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

export async function fetchNodeStatus() {
	//const api_host = process.env.NEXT_PUBLIC_API_HOST;
	const API_HOST = "https://api-testnet.lilypad.tech/";
	const leaderboard_url = `${API_HOST}metrics-dashboard/leaderboard`;
	const raw = await fetch(leaderboard_url);
	return (await raw.json()) as NodeStatusReturnType; 
}

export function toTableData({
	nodeStatusData,
	nodesData,
}: {
	nodeStatusData: NodeStatusReturnType;
	nodesData: NodesEndpointReturnType;
}) {
	return sort(nodeStatusData, (a, b) =>
		ascending(Number(a.Wallet), Number(b.Wallet))
	).map(({ Wallet }) => ({
		Wallet,
		Status: (() => {
			const online = nodesData.find(
				(nodeData) => nodeData.ID === Wallet
			)?.Online;
			return {
				online,
				color: online ? "success" : "gray",
				translation:
					online === undefined
						? m.node_status_node_overview_table_no_data_status()
						: online
						? m.node_status_node_overview_table_online_status()
						: m.node_status_node_overview_table_offline_status(),
			} as const;
		})(),
		"Available ETH": "2",
		"Available LP": "2",
		Chain: "Arbitrum Sepolia",
		"Connected since": new Date().toLocaleDateString(),
		"Last POW submitted": new Date().toLocaleDateString(),
	}));
}

export function getHeaderData() {
	return [
		{
			name: "Wallet",
			translation: m.node_status_header_titles_wallet(),
			tooltip: undefined,
		},
		{
			name: "Status",
			translation: m.node_status_header_titles_status(),
			tooltip: {
				title: m.node_status_header_tooltip_title_status(),
				description: m.node_status_header_tooltip_description_status(),
			},
		},
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
			name: "Chain",
			translation: m.node_status_header_titles_chain(),
			tooltip: {
				title: m.node_status_header_tooltip_title_chain(),
				description: m.node_status_header_tooltip_description_chain(),
			},
		},
		{
			name: "Connected since",
			translation: m.node_status_header_titles_connected_since(),
			tooltip: {
				title: m.node_status_header_tooltip_title_connected_since(),
				description:
					m.node_status_header_tooltip_description_connected_since(),
			},
		},
		{
			name: "Last POW submitted",
			translation: m.node_status_header_titles_last_pow_submitted(),
			tooltip: {
				title: m.node_status_header_tooltip_title_law_pow_submitted(),
				description:
					m.node_status_header_tooltip_description_last_pow_submitted(),
			},
		},
	] as const;
}

