export type LeaderboardReturnType = {
	Points: string;
	Rank: string;
	Energy: string;
	Wallet: string;
}[];

export async function fetchLeaderboard() {
	const API_HOST = process.env.NEXT_PUBLIC_API_HOST;
	const LEADERBOARD_URL = `${API_HOST}metrics-dashboard/leaderboard`;
	const raw = await fetch(LEADERBOARD_URL);
	const res = (await raw.json()) as LeaderboardReturnType;
	const mapped = res
		.sort((a, b) => Number(b.Points) - Number(a.Points))
		.map(({ Rank, Wallet, Energy, Points }) => ({
			Rank,
			Wallet,
			"Energy Provided": Energy,
			"Reward Points": Points,
			Share: "share",
		}));
	return mapped;
}
