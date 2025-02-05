import { FeatureCollection } from "geojson";
import { fetchFromApi } from "./api";

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

export async function fetchNodes(): Promise<NodesEndpointReturnType> {
  return fetchFromApi<NodesEndpointReturnType>(
    "/metrics-dashboard/nodes",
    "nodes"
  );
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
