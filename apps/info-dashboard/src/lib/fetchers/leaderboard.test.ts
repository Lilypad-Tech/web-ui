import { describe, expect, test } from "vitest";
import { LeaderboardReturnType, toTableData } from "./leaderboard";
import { NodesEndpointReturnType } from "./nodes";

describe("toTableData", () => {
	test("sort", () => {
		const leaderboardData = [
			{ Points: "300", Energy: "500", Rank: "2", Wallet: "a" },
			{ Points: "500", Energy: "700", Rank: "1", Wallet: "b" },
		] as LeaderboardReturnType;
		const nodesData = [
			{
				ID: "a",
				CPU: 0,
				GPU: 0,
				RAM: 0,
				Online: true,
				ConnectedSince: 0,
				CountryCode: "AU",
				Region: "Region",
				City: "City",
				Latitude: 0,
				Longitude: 0,
			},
			{
				ID: "b",
				CPU: 0,
				GPU: 0,
				RAM: 0,
				Online: false,
				ConnectedSince: 0,
				CountryCode: "AU",
				Region: "Region",
				City: "City",
				Latitude: 0,
				Longitude: 0,
			},
		] as NodesEndpointReturnType;
		const result = toTableData({ leaderboardData, nodesData });
		expect(result).toMatchInlineSnapshot(`
			[
			  {
			    "Hashrate": "700",
			    "Level": {
			      "color": "warning",
			      "icon": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjI0OTUgMkg4LjQ5Mzk1QzguMzE0NDcgMiA4LjIyNDczIDIgOC4xNDU1MSAyLjAyNzMzQzguMDc1NDQgMi4wNTE0OSA4LjAxMTYzIDIuMDkwOTMgNy45NTg2OCAyLjE0Mjc5QzcuODk4ODEgMi4yMDE0MyA3Ljg1ODY4IDIuMjgxNyA3Ljc3ODQxIDIuNDQyMjNMMy41Nzg0MSAxMC44NDIyQzMuMzg2NzMgMTEuMjI1NiAzLjI5MDg5IDExLjQxNzMgMy4zMTM5MSAxMS41NzMxQzMuMzM0MDEgMTEuNzA5MSAzLjQwOTI3IDExLjgzMDkgMy41MjE5NyAxMS45MDk3QzMuNjUxMDQgMTIgMy44NjUzNCAxMiA0LjI5Mzk1IDEySDEwLjQ5OTVMNy40OTk1MyAyMkwxOS42OTI2IDkuMzU1MzFDMjAuMTA0IDguOTI4NyAyMC4zMDk3IDguNzE1NCAyMC4zMjE3IDguNTMyODhDMjAuMzMyMSA4LjM3NDQ2IDIwLjI2NjcgOC4yMjA0OSAyMC4xNDU0IDguMTE4MDNDMjAuMDA1NyA4IDE5LjcwOTQgOCAxOS4xMTY3IDhIMTEuOTk5NUwxNC4yNDk1IDJaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
			      "text": "Lily Titan",
			    },
			    "Rank": "1",
			    "Reward Points": "n.a.",
			    "Share": {
			      "getUrl": [Function],
			      "translation": "share",
			    },
			    "Status": {
			      "color": "error",
			      "online": false,
			      "translation": "Offline",
			    },
			    "Wallet": "b",
			  },
			  {
			    "Hashrate": "500",
			    "Level": {
			      "color": "warning",
			      "icon": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjI0OTUgMkg4LjQ5Mzk1QzguMzE0NDcgMiA4LjIyNDczIDIgOC4xNDU1MSAyLjAyNzMzQzguMDc1NDQgMi4wNTE0OSA4LjAxMTYzIDIuMDkwOTMgNy45NTg2OCAyLjE0Mjc5QzcuODk4ODEgMi4yMDE0MyA3Ljg1ODY4IDIuMjgxNyA3Ljc3ODQxIDIuNDQyMjNMMy41Nzg0MSAxMC44NDIyQzMuMzg2NzMgMTEuMjI1NiAzLjI5MDg5IDExLjQxNzMgMy4zMTM5MSAxMS41NzMxQzMuMzM0MDEgMTEuNzA5MSAzLjQwOTI3IDExLjgzMDkgMy41MjE5NyAxMS45MDk3QzMuNjUxMDQgMTIgMy44NjUzNCAxMiA0LjI5Mzk1IDEySDEwLjQ5OTVMNy40OTk1MyAyMkwxOS42OTI2IDkuMzU1MzFDMjAuMTA0IDguOTI4NyAyMC4zMDk3IDguNzE1NCAyMC4zMjE3IDguNTMyODhDMjAuMzMyMSA4LjM3NDQ2IDIwLjI2NjcgOC4yMjA0OSAyMC4xNDU0IDguMTE4MDNDMjAuMDA1NyA4IDE5LjcwOTQgOCAxOS4xMTY3IDhIMTEuOTk5NUwxNC4yNDk1IDJaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
			      "text": "Lily Titan",
			    },
			    "Rank": "2",
			    "Reward Points": "n.a.",
			    "Share": {
			      "getUrl": [Function],
			      "translation": "share",
			    },
			    "Status": {
			      "color": "success",
			      "online": true,
			      "translation": "Online",
			    },
			    "Wallet": "a",
			  },
			]
		`);
	});
});
