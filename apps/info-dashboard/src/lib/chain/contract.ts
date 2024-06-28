import { publicClient } from "./client";
import { erc20ABI as abi } from "./abi";
import { getContract } from "viem";

const address = "0x0352485f8a3cB6d305875FaC0C40ef01e0C06535";

export const contract = getContract({ address, abi, client: publicClient });
