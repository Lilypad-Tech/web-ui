import { publicClient } from "./client";
import { abi } from "./abi";
import { getContract } from "viem";

export const lilypadNetworkContractaddress =
	"0x0352485f8a3cB6d305875FaC0C40ef01e0C06535";

export const contract = getContract({
	address: lilypadNetworkContractaddress,
	abi,
	client: publicClient,
});
