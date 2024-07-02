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
	const nodesSubmissions = (await Promise.all(
		addresses.map((address) => {
			return powContract.read.getMinerPowSubmissions([address]);
		})
	)) as (
		| {
				walletAddress: `0x${string}`; // wallet address
				nodeId: string; // node Id
				nonce: bigint; // nonce
				start_timestamp: bigint; // start timestamp (unix epoch)
				complete_timestamp: bigint; // complete timestamp (unix epoch)
				challenge: string; // challenge
				difficulty: bigint; // difficulty
		  }
		| undefined
	)[][];

	const nodesLastSubmissions = nodesSubmissions.map((submissions) => {
		return submissions[submissions.length - 1];
	});

	/* const nodesSubmissionCounts = await Promise.all(
		addresses.map((address) =>
			powContract.read.getMinerPowSubmissionCount([address])
		)
	); */

	return addresses.map((address, index) => ({
		address,
		lastSubmission: {
			complete_timestamp: Number(
				nodesLastSubmissions[index]?.complete_timestamp ?? null
			),
		},
	})) as PowSubmissions;
}
