import Web3 from 'web3';
import { lpTokenAbi } from './lpTokenAbi';
import {powABI_old} from './powABI_old'
import { powAbi } from './powAbi';

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


//const web3 = new Web3(new Web3.providers.HttpProvider('https://sepolia-rollup.arbitrum.io/rpc'));

const web3 = new Web3(new Web3.providers.HttpProvider('https://arbitrum-sepolia.drpc.org/'));
const tokenAddress = '0x0352485f8a3cB6d305875FaC0C40ef01e0C06535'; // ERC20 Token contract address 0x0352485f8a3cB6d305875FaC0C40ef01e0C06535
// const tokenAddress = '0x152b0df80135c63b4cb1fbe00ddce7e9a8ffcb04';
const tokenContract = new web3.eth.Contract(erc20ABI, tokenAddress);

export async function getTokenBalance(walletAddress: string): Promise<string> {
    try {
        const balanceWei: string = await tokenContract.methods.balanceOf(walletAddress).call();
        const balance = web3.utils.fromWei(balanceWei, 'ether');
        console.log(`Token balance for ${walletAddress}: ${balance}`);
        return balance;
    } catch (error) {
        console.error('Error fetching token balance:', error);
        return '0';
    }
}

export async function getBalance(address: string): Promise<string> {
	try {
	  const balanceWei = await web3.eth.getBalance(address);
	  console.log("wei", balanceWei);
	  const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
	  return balanceEth;
	} catch (error) {
	  console.error('Error fetching balance:', error);
	  return '0';
	}
  }
  

export async function getBalances(addresses: string[]): Promise<string[]> {
	try {
	  const balancePromises = addresses.map(async (address) => {
		const balanceWei = await web3.eth.getBalance(address);
		const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
		return balanceEth;
	  });
  
	  return Promise.all(balancePromises);
	} catch (error) {
	  console.error('Error fetching balances:', error);
	  return [];
	}
}
  

export async function getBatchBalances(addresses: string[]): Promise<string[]> {
	const batchPromises: any = [];// Promise<string>[] | [] = [];
	const batchSize = 50; // Adjust batch size as needed
  
	// Function to fetch balances for a batch of addresses
	const fetchBatchBalances = async (batchAddresses: string[]): Promise<string[]> => {
		return Promise.all(batchAddresses.map(async (address) => {
		  const balanceWei = await web3.eth.getBalance(address);
		  const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
		  return balanceEth;
		}));
	  };
	
	  // Process addresses in batches
	  for (let i = 0; i < addresses.length; i += batchSize) {
		const batchAddresses = addresses.slice(i, i + batchSize);
		const batchPromise = fetchBatchBalances(batchAddresses); // Type correctly inferred here
		batchPromises.push(batchPromise);
	  }
	
	  try {
		const resultsArray = await Promise.all(batchPromises); // Array of arrays of balances
		const balances = resultsArray.flat(); // Flatten array of arrays into a single array of balances
		return balances;
	  } catch (error) {
		console.error('Error fetching balances:', error);
		return [];
	  }
  }


//const web3 = new Web3(new Web3.providers.HttpProvider('https://endpoints.omniatech.io/v1/arbitrum/sepolia/public'));
//const web3 = new Web3(new Web3.providers.HttpProvider('https://public.stackup.sh/api/v1/node/arbitrum-sepolia'));
//const web3 = new Web3(new Web3.providers.HttpProvider('https://arbitrum-sepolia.blockpi.network/v1/rpc/public'));
// const web3 = new Web3(new Web3.providers.HttpProvider('https://sepolia-rollup.arbitrum.io/rpc'));



///======CONTRACT POW

const powAddress = "0xacDf1005fAb67C13603C19aC5471F0c7dDBc90b2";
const powABI = powABI_old;

const contract = new web3.eth.Contract(powABI, powAddress);

export async function getPowSubmissions(walletAddress: string) {
    try {
        const submissionCount = await contract.methods.minerSubmissionCount(walletAddress).call();
        const submissions = [];

        for (let i = 0; i < submissionCount; i++) {
            const submission = await contract.methods.powSubmissions(walletAddress, i).call();
            submissions.push({
                walletAddress: submission.walletAddress,
                nodeId: submission.nodeId,
                nonce: Number(submission.nonce),
                startTimestamp: Number(submission.start_timestap),
                completeTimestamp: Number(submission.complete_timestap),
                challenge: submission.challenge,
                difficulty: Number(submission.difficulty)
            });
        }

        return submissions;
    } catch (error) {
        console.error('Error fetching POW submissions:', error);
        throw error;
    }
}

const newPowAddress = "0x8B852BA45293d6dd51B10c57625C6c5f25ADFB40";
const newPowABI = powAbi;

const newPowContract = new web3.eth.Contract(newPowABI, newPowAddress);

export async function fetchMinerPOWSubmissions(walletAddress: string) {
    try {
        const submissions = await newPowContract.methods.getMinerPowSubmissions(walletAddress).call();
        return submissions;
    } catch (error) {
        console.error('Error fetching POW submissions:', error);
        throw error;
    }
}