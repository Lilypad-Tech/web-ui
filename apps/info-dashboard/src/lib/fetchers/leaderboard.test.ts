import { describe, expect, test } from "vitest";
import { LeaderboardReturnType, toTableData } from "./leaderboard";

describe("toTableData", () => {
	test("sort", () => {
		const data = [
			{ Points: "300", Energy: "500", Rank: "2", Wallet: "a" },
			{ Points: "500", Energy: "700", Rank: "1", Wallet: "b" },
		] as LeaderboardReturnType;
		const result = toTableData(data);
		expect(result).toMatchInlineSnapshot(`
			[
			  {
			    "Energy Provided": "700",
			    "Rank": "1",
			    "Reward Points": "500",
			    "Share": "share",
			    "Wallet": "b",
			  },
			  {
			    "Energy Provided": "500",
			    "Rank": "2",
			    "Reward Points": "300",
			    "Share": "share",
			    "Wallet": "a",
			  },
			]
		`);
	});
});
