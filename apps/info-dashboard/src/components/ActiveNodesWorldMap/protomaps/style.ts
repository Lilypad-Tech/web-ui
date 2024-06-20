import { MapStyle } from "react-map-gl/dist/esm/exports-maplibre";
import layers from "./layers.json";

export function getStyle(key: string) {
	return {
		version: 8,
		glyphs: "https://protomaps.github.io/basemaps-assets/fonts/{fontstack}/{range}.pbf",
		sprite: "https://protomaps.github.io/basemaps-assets/sprites/v3/black",
		sources: {
			protomaps: {
				attribution:
					'<a href="https://github.com/protomaps/basemaps">Protomaps</a> © <a href="https://openstreetmap.org">OpenStreetMap</a>',
				type: "vector",
				tiles: [
					`https://api.protomaps.com/tiles/v3/{z}/{x}/{y}.mvt?key=${key}`,
				],
				maxzoom: 15,
			},
		},
		layers: layers,
	} as MapStyle;
}
