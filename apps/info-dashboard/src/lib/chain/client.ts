import { http, createPublicClient } from "viem";
import { arbitrumSepolia } from "viem/chains";

export const publicClient = createPublicClient({
  chain: arbitrumSepolia,
  batch: {
    multicall: true,
  },
  transport: http(process.env.NEXT_PUBLIC_RPC_URL, { batch: true }),
});
