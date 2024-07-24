import { ascending, sort } from "d3";
import { DateTime } from "luxon";
import { getTimeDiff } from "../time/time";
export type LeaderboardReturnType = {
	Points: string;
	Rank: string;
	ConnectedSince: string;
	Wallet: string;
}[];
import * as m from "../../paraglide/messages";
import {
	developmentCpuChip02,
	editorMagicWand02,
	financeAndEcommerceDiamond01,
	weatherLightning02,
} from "@frontline-hq/untitledui-icons";
import { NodesEndpointReturnType } from "./nodes";

export async function fetchLeaderboard() {
	//const api_host = process.env.NEXT_PUBLIC_API_HOST;
	const API_HOST = "https://api-testnet.lilypad.tech/";
	const leaderboard_url = `${API_HOST}metrics-dashboard/leaderboard`;
	const raw = await fetch(leaderboard_url);
	return (await raw.json()) as LeaderboardReturnType;
}

export function toTableData({
	leaderboardData,
	nodesData,
}: {
	leaderboardData: LeaderboardReturnType;
	nodesData: NodesEndpointReturnType;
}) {
	return sort(leaderboardData, (a, b) =>
		ascending(Number(a.Rank), Number(b.Rank))
	).map(({ Rank, Wallet, Points }) => {
		const nodeData = nodesData.find((nodeData) => nodeData.ID === Wallet);
		const connectedSince = nodeData ? nodeData.ConnectedSince : null;

		return {
			Rank,
			Wallet,
			Level: (() => {
				const rankNumber = Number(Rank);
				const result =
					rankNumber < 6
						? ({
								color: "warning",
								icon: weatherLightning02,
								text: m.leaderboard_node_provider_table_first_level(),
						  } as const)
						: rankNumber < 16
						? ({
								color: "pink",
								icon: financeAndEcommerceDiamond01,
								text: m.leaderboard_node_provider_table_second_level(),
						  } as const)
						: rankNumber < 36
						? ({
								color: "brand",
								icon: editorMagicWand02,
								text: m.leaderboard_node_provider_table_third_level(),
						  } as const)
						: ({
								color: "gray",
								icon: developmentCpuChip02,
								text: m.leaderboard_node_provider_table_last_level(),
						  } as const);
				return result;
			})(),
			"Reward Points": "n.a.",

			Status: (() => {
				const online = nodesData.find(
					(nodeData) => nodeData.ID === Wallet
				)?.Online;
				return {
					online,
					color: online ? "success" : "gray",
					translation:
						online === undefined
							? m.leaderboard_node_provider_table_no_data_status()
							: online
							? m.leaderboard_node_provider_table_online_status()
							: m.leaderboard_node_provider_table_offline_status(),
				} as const;
			})(),
			// TODO update how we want to display the Connected since time
			"Connected since": connectedSince
				? ((startMillis) => {
						const start = DateTime.fromMillis(startMillis);
						const now = DateTime.now();
						const diff = now.diff(start, "hours");
						return diff.hours.toFixed(0) + " hours";
				  })(connectedSince)
				: "n.a.",

			Share: {
				translation: "share",
				getUrl: ({
					currentUrl,
					currentLevel,
				}: {
					currentUrl: string;
					currentLevel: string;
				}) => {
					const linkText =
						m.leaderboard_node_provider_table_share_x_tweet_shareText() +
						"\n" +
						m.leaderboard_node_provider_table_share_x_tweet_shareText2() +
						currentLevel +
						(currentLevel.includes("Titan")
							? " ⚡️"
							: currentLevel.includes("Legend")
							? " 💎"
							: currentLevel.includes("Wizard")
							? " 🪄"
							: " 🤖" + "!") +
						"\n";
					const normalShareText = encodeURIComponent(linkText);
					return `https://twitter.com/intent/tweet?text=${normalShareText}&url=${currentUrl}?wallet_id=${Wallet}`;
				},
			},
		};
	});
}

export function getHeaderData() {
	return [
		{
			name: "Rank",
			translation: m.leaderboard_header_titles_rank(),
			tooltip: undefined,
		},
		{
			name: "Level",
			translation: m.leaderboard_header_titles_level(),
			tooltip: {
				title: m.leaderboard_header_tooltip_title_level(),
				description: m.leaderboard_header_tooltip_description_level(),
			},
		},
		{
			name: "Wallet",
			translation: m.leaderboard_header_titles_wallet(),
			tooltip: undefined,
		},
		{
			name: "Reward Points",
			translation: m.leaderboard_header_titles_reward_points(),
			tooltip: {
				title: m.leaderboard_header_tooltip_title_reward_points(),
				description:
					m.leaderboard_header_tooltip_description_reward_points(),
			},
		},

		{
			name: "Status",
			translation: m.leaderboard_header_titles_status(),
			tooltip: {
				title: m.leaderboard_header_tooltip_title_status(),
				description: m.leaderboard_header_tooltip_description_status(),
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
			name: "Share",
			translation: m.leaderboard_header_titles_share(),
			tooltip: undefined,
		},
	] as const;
}
