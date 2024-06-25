import { ascending, sort } from "d3";
export type LeaderboardReturnType = {
	Points: string;
	Rank: string;
	Energy: string;
	Wallet: string;
}[];
import * as m from "@/paraglide/messages.js";
import {
	developmentCpuChip02,
	editorMagicWand02,
	financeAndEcommerceDiamond01,
	weatherLightning02,
} from "@frontline-hq/untitledui-icons";

export async function fetchLeaderboard() {
	//const api_host = process.env.NEXT_PUBLIC_API_HOST;
	const api_host = "https://api-testnet.lilypad.tech/";
	const leaderboard_url = `${api_host}metrics-dashboard/leaderboard`;
	const raw = await fetch(leaderboard_url);
	return (await raw.json()) as LeaderboardReturnType;
}

export function toTableData(data: LeaderboardReturnType) {
	return sort(data, (a, b) => ascending(Number(a.Rank), Number(b.Rank))).map(
		({ Rank, Wallet, Energy, Points }) => ({
			Rank,
			Wallet,
			Level: (() => {
				const rankNumber = Number(Rank);
				const result =
					rankNumber < 5
						? ({
								color: "warning",
								icon: weatherLightning02,
								text: m.leaderboard_node_provider_table_first_level(),
						  } as const)
						: rankNumber < 15
						? ({
								color: "pink",
								icon: financeAndEcommerceDiamond01,
								text: m.leaderboard_node_provider_table_second_level(),
						  } as const)
						: rankNumber < 35
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
			"Energy Provided": Energy,
			"Reward Points": Points,
			Status: (() => {
				const online = Math.random() > 0.5 ? true : false;
				return {
					online,
					color: online ? "success" : "error",
					translation: online
						? m.leaderboard_node_provider_table_online_status()
						: m.leaderboard_node_provider_table_offline_status(),
				} as const;
			})(),
			Share: {
				translation: "share",
				getUrl: ({ currentUrl }: { currentUrl: string }) => {
					const normalShareText = encodeURIComponent(
						m.leaderboard_node_provider_table_share_x_tweet_shareText()
					);
					return `https://twitter.com/intent/tweet?text=${normalShareText}&url=${currentUrl}?wallet_id=${Wallet}`;
				},
			},
		})
	);
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
			name: "Energy Provided",
			translation: m.leaderboard_header_titles_energy_provided(),
			tooltip: {
				title: m.leaderboard_header_tooltip_title_energy_provided(),
				description:
					m.leaderboard_header_tooltip_description_energy_provided(),
			},
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
			tooltip: undefined,
		},
		{
			name: "Share",
			translation: m.leaderboard_header_titles_share(),
			tooltip: undefined,
		},
	] as const;
}
