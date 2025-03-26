import { publicClient } from './client'
import { abis } from './abi'
import { getContract } from 'viem'

export const lilypadNetworkBalanceContractAddress =
    '0x0352485f8a3cB6d305875FaC0C40ef01e0C06535'

export const lilypadNetworkPowContractAddress =
    '0x8B852BA45293d6dd51B10c57625C6c5f25ADFB40'

export const balanceContract = getContract({
    address: lilypadNetworkBalanceContractAddress,
    abi: abis[lilypadNetworkBalanceContractAddress],
    client: publicClient,
})

export const powContract = getContract({
    address: lilypadNetworkPowContractAddress,
    abi: abis[lilypadNetworkPowContractAddress],
    client: publicClient,
})
