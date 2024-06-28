// ERC20 ABI to interact with the token contract

export const erc20ABI = [
	{
		constant: true,
		inputs: [{ name: "_owner", type: "address" }],
		name: "balanceOf",
		outputs: [{ name: "balance", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
];
