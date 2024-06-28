import { publicClient } from "../chain/client";
import { contract } from "../chain/contract";
import { formatEther } from "viem";

export async function getNodeLPBalances(addresses: string[]) {
	const balanceInWei = await Promise.all(
		addresses.map((address) => contract.read.balanceOf([address]))
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
	}));
}
export type Balances = {
	address: string;
	balance: string;
}[];
