export type LeaderboardReturnType = {
  Points: string;
  Rank: string;
  Energy: string;
  Wallet: string;
}[];

export async function fetchLeaderboard() {
  const api_host = process.env.NEXT_PUBLIC_API_HOST;
  const leaderboard_url = `${api_host}metrics-dashboard/leaderboard`;
  const raw = await fetch(leaderboard_url);
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
