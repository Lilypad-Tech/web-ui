import { publicClient } from "../chain/client";
import { balanceContract, powContract } from "../chain/contracts";
import { formatEther } from "viem";

export async function getNodeLPBalances(addresses: string[]) {
	const balanceInWei = await Promise.all(
		addresses.map((address) =>
			balanceContract.read.balanceOf([address as `0x${string}`])
		)
	);
	const balanceInEther = balanceInWei.map((wei) => formatEther(wei as any));
	return addresses.map((address, index) => ({
		address,
		balance: balanceInEther[index],
	}));
}

export async function getNodeEthBalances(addresses: string[]) {
	const balanceInWei = await Promise.all(
		addresses.map((address) =>
			publicClient.getBalance({ address: address as `0x${string}` })
		)
	);
	const balanceInEther = balanceInWei.map((wei) => formatEther(wei));
	return addresses.map((address, index) => ({
		address,
		balance: balanceInEther[index],
	})) as Balances;
}
export type Balances = {
	address: string;
	balance: string;
}[];

export type PowSubmissions = {
	address: string;
	lastSubmission: {
		complete_timestamp: number;
	};
}[];

export async function getNodesPowSubmissions(addresses: string[]) {
	const nodesSubmissionCounts = (await Promise.all(
		addresses.map((address) =>
			powContract.read.getMinerPowSubmissionCount([address])
		)
	)) as bigint[];
	const nodesLastSubmissions = (await Promise.all(
		nodesSubmissionCounts.map((count, i) => {
			return Number(count) > 0
				? powContract.read.powSubmissions([
						addresses[i],
						Number(count) - 1,
				  ])
				: undefined;
		})
	)) as (
		| [
				`0x${string}`, // wallet address
				string, // node id
				bigint, // nonce
				bigint, // start_timestamp
				bigint, // complete_timestamp
				string, // challenge
				bigint // difficulty
		  ]
		| undefined
	)[];

	return addresses.map((address, index) => ({
		address,
		lastSubmission: {
			complete_timestamp: Number(
				nodesLastSubmissions[index]?.[4] ?? null
			),
		},
	})) as PowSubmissions;
}
