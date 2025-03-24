// ERC20 ABI to interact with the token contract

import { erc20Abi } from "viem";

export const abis = {
  "0xacDf1005fAb67C13603C19aC5471F0c7dDBc90b2": [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bytes32",
          name: "challenge",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "difficulty",
          type: "uint256",
        },
      ],
      name: "GenerateChallenge",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint8",
          name: "version",
          type: "uint8",
        },
      ],
      name: "Initialized",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [],
      name: "NewPowRound",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "walletAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "string",
          name: "nodeId",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "nonce",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "timestamp",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "challenge",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "difficulty",
          type: "uint256",
        },
      ],
      name: "ValidPOWSubmitted",
      type: "event",
    },
    {
      inputs: [],
      name: "TARGET_DIFFICULTY",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "calculate_difficulty",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "checkTimeWindow",
      outputs: [],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "nodeId",
          type: "string",
        },
      ],
      name: "generateChallenge",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "getMiners",
      outputs: [
        {
          internalType: "address[]",
          name: "",
          type: "address[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "lastChallenges",
      outputs: [
        {
          internalType: "bytes32",
          name: "challenge",
          type: "bytes32",
        },
        {
          internalType: "uint256",
          name: "difficulty",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "nodeId",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "timestamp",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "minerSubmissionCount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "miners",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "powSubmissions",
      outputs: [
        {
          internalType: "address",
          name: "walletAddress",
          type: "address",
        },
        {
          internalType: "string",
          name: "nodeId",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "nonce",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "start_timestap",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "complete_timestap",
          type: "uint256",
        },
        {
          internalType: "bytes32",
          name: "challenge",
          type: "bytes32",
        },
        {
          internalType: "uint256",
          name: "difficulty",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "startTime",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "nonce",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "nodeId",
          type: "string",
        },
      ],
      name: "submitWork",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "triggerNewPowRound",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "validProofs",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "window_end",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "window_start",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  "0x8B852BA45293d6dd51B10c57625C6c5f25ADFB40": [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bytes32",
          name: "challenge",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "difficulty",
          type: "uint256",
        },
      ],
      name: "GenerateChallenge",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint8",
          name: "version",
          type: "uint8",
        },
      ],
      name: "Initialized",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [],
      name: "NewPowRound",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "walletAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "string",
          name: "nodeId",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "nonce",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "start_timestamp",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "complete_timestamp",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "challenge",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "difficulty",
          type: "uint256",
        },
      ],
      name: "ValidPOWSubmitted",
      type: "event",
    },
    {
      inputs: [],
      name: "calculate_difficulty",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "difficulty",
          type: "uint256",
        },
      ],
      name: "change_difficulty",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "checkTimeWindow",
      outputs: [],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "nodeId",
          type: "string",
        },
      ],
      name: "generateChallenge",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "getMinerCount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "addr",
          type: "address",
        },
      ],
      name: "getMinerPowSubmissionCount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "addr",
          type: "address",
        },
      ],
      name: "getMinerPowSubmissions",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "walletAddress",
              type: "address",
            },
            {
              internalType: "string",
              name: "nodeId",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "nonce",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "start_timestamp",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "complete_timestamp",
              type: "uint256",
            },
            {
              internalType: "bytes32",
              name: "challenge",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "difficulty",
              type: "uint256",
            },
          ],
          internalType: "structLilypadPow.POWSubmission[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getMiners",
      outputs: [
        {
          internalType: "address[]",
          name: "",
          type: "address[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "lastChallenges",
      outputs: [
        {
          internalType: "bytes32",
          name: "challenge",
          type: "bytes32",
        },
        {
          internalType: "uint256",
          name: "difficulty",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "nodeId",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "timestamp",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "miners",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "powSubmissions",
      outputs: [
        {
          internalType: "address",
          name: "walletAddress",
          type: "address",
        },
        {
          internalType: "string",
          name: "nodeId",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "nonce",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "start_timestamp",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "complete_timestamp",
          type: "uint256",
        },
        {
          internalType: "bytes32",
          name: "challenge",
          type: "bytes32",
        },
        {
          internalType: "uint256",
          name: "difficulty",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "startTime",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "nonce",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "nodeId",
          type: "string",
        },
      ],
      name: "submitWork",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "targetDifficulty",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "triggerNewPowRound",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "validProofs",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "window_end",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "window_start",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  "0xFEA5B410a374cE6f1c2265B2E2d1eE7C70e479f4": [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bytes32",
          name: "challenge",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "difficulty",
          type: "uint256",
        },
      ],
      name: "GenerateChallenge",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint8",
          name: "version",
          type: "uint8",
        },
      ],
      name: "Initialized",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [],
      name: "NewPowRound",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "walletAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "string",
          name: "nodeId",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "nonce",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "start_timestamp",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "complete_timestamp",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "challenge",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "difficulty",
          type: "uint256",
        },
      ],
      name: "ValidPOWSubmitted",
      type: "event",
    },
    {
      inputs: [],
      name: "calculate_difficulty",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "difficulty",
          type: "uint256",
        },
      ],
      name: "change_difficulty",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "checkTimeWindow",
      outputs: [],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "nodeId",
          type: "string",
        },
      ],
      name: "generateChallenge",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "addr",
          type: "address",
        },
      ],
      name: "getMinerPowSubmissions",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "walletAddress",
              type: "address",
            },
            {
              internalType: "string",
              name: "nodeId",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "nonce",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "start_timestamp",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "complete_timestamp",
              type: "uint256",
            },
            {
              internalType: "bytes32",
              name: "challenge",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "difficulty",
              type: "uint256",
            },
          ],
          internalType: "struct LilypadPow.POWSubmission[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getMiners",
      outputs: [
        {
          internalType: "address[]",
          name: "",
          type: "address[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "lastChallenges",
      outputs: [
        {
          internalType: "bytes32",
          name: "challenge",
          type: "bytes32",
        },
        {
          internalType: "uint256",
          name: "difficulty",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "nodeId",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "timestamp",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "miners",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "powSubmissions",
      outputs: [
        {
          internalType: "address",
          name: "walletAddress",
          type: "address",
        },
        {
          internalType: "string",
          name: "nodeId",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "nonce",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "start_timestamp",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "complete_timestamp",
          type: "uint256",
        },
        {
          internalType: "bytes32",
          name: "challenge",
          type: "bytes32",
        },
        {
          internalType: "uint256",
          name: "difficulty",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "startTime",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "nonce",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "nodeId",
          type: "string",
        },
      ],
      name: "submitWork",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "targetDifficulty",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "triggerNewPowRound",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "validProofs",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "window_end",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "window_start",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  "0x0352485f8a3cB6d305875FaC0C40ef01e0C06535": erc20Abi,
};
