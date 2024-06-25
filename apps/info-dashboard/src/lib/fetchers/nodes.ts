export type NodesEndpointReturnElement = {
	ID: string;
	CPU: number;
	GPU: number;
	RAM: number;
	Online: boolean;
	ConnectedSince: number;
	CountryCode: string;
	Region: string;
	City: string;
	Latitude: number;
	Longitude: number;
};

export type NodesEndpointReturnType = NodesEndpointReturnElement[];

export async function fetchNodes() {
	//const api_host = process.env.NEXT_PUBLIC_API_HOST;
	const API_HOST = "https://api-testnet.lilypad.tech/";
	const URL = `${API_HOST}metrics-dashboard/nodes`;
	const raw = await fetch(URL);
	const res = (await raw.json()) as NodesEndpointReturnType;
	return res;
}
