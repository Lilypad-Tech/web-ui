import Map, { Layer, Source } from "react-map-gl/maplibre";
import type { FeatureCollection } from "geojson";
import { getStyle } from "./protomaps/style";
import { PropsWithChildren } from "react";

const geojson: FeatureCollection = {
	type: "FeatureCollection",
	features: [
		{
			type: "Feature",
			properties: [],
			geometry: { type: "Point", coordinates: [-122.4, 37.8] },
		},
	],
};

export default function ActiveNodesWorldMap({
	protomapsApiKey,
}: PropsWithChildren<{ protomapsApiKey: string }>) {
	return (
		<div className="relative h-[60vh] w-full">
			<Map
				initialViewState={{
					latitude: 20,
					longitude: 0,
					zoom: 1,
				}}
				style={{
					width: "100%",
					height: "100%",
					overflow: "hidden",
				}}
				mapStyle={getStyle(protomapsApiKey)}
			>
				<Source type="geojson" data={geojson}>
					<Layer
						type="circle"
						paint={{
							"circle-radius": 3,
							"circle-color": "#66E1DE",
							"circle-opacity": 1,
						}}
					/>
					<Layer
						type="circle"
						paint={{
							"circle-radius": 9,
							"circle-color": "#66E1DE",
							"circle-opacity": 0.2,
						}}
					/>
					<Layer
						type="circle"
						paint={{
							"circle-radius": 15,
							"circle-color": "#66E1DE",
							"circle-opacity": 0.1,
						}}
					/>
				</Source>
			</Map>
		</div>
	);
}
