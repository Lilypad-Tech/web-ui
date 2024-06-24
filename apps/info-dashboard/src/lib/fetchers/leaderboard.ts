import { ascending, sort } from "d3";
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
  return (await raw.json()) as LeaderboardReturnType;
}

export function toTableData(data: LeaderboardReturnType) {
  return sort(data, (a, b) => ascending(a.Rank, b.Rank)).map(
    ({ Rank, Wallet, Energy, Points }) => ({
      Rank,
      Wallet,
      "Energy Provided": Energy,
      "Reward Points": Points,
      Status: Math.random() > 0.5 ? true : false,
      Share: "share",
    })
  );
}
