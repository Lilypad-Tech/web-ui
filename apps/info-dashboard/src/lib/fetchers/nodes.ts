import { FeatureCollection } from "geojson";

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
	const API_HOST = process.env.NEXT_PUBLIC_API_HOST;
	const URL = `${API_HOST}metrics-dashboard/nodes`;
	const raw = await fetch(URL);
	const res = (await raw.json()) as NodesEndpointReturnType;
	return res;
}

export function toGeoJson(data: NodesEndpointReturnType) {
	const geojson: FeatureCollection = {
		type: "FeatureCollection",
		features: data
			// filter out "null-island", nodes at 0 long and 0 lat
			.filter((d) => d.Latitude !== 0 || d.Longitude !== 0)
			.map((d) => ({
				type: "Feature",
				properties: [],
				geometry: {
					type: "Point",
					coordinates: [d.Longitude, d.Latitude],
				},
			})),
	};
	return geojson;
}
