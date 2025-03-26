import Map, { Layer, Source } from 'react-map-gl/maplibre'
import type { FeatureCollection } from 'geojson'
import { getStyle } from './protomaps/style'
import { PropsWithChildren } from 'react'

export default function ActiveNodesWorldMap({
    protomapsApiKey,
    geojson,
}: PropsWithChildren<{ protomapsApiKey: string; geojson: FeatureCollection }>) {
    return (
        <div className="relative h-[60vh] w-full">
            <Map
                onError={(evt) => console.error(evt.error)}
                initialViewState={{
                    latitude: 20,
                    longitude: 0,
                    zoom: 1,
                }}
                style={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                }}
                mapStyle={getStyle(protomapsApiKey)}
                cooperativeGestures={true}
                cursor="pointer"
            >
                <Source type="geojson" data={geojson}>
                    <Layer
                        type="circle"
                        paint={{
                            'circle-radius': 3,
                            'circle-color': '#66E1DE',
                            'circle-opacity': 1,
                        }}
                    />
                    <Layer
                        type="circle"
                        paint={{
                            'circle-radius': 9,
                            'circle-color': '#66E1DE',
                            'circle-opacity': 0.2,
                        }}
                    />
                    <Layer
                        type="circle"
                        paint={{
                            'circle-radius': 15,
                            'circle-color': '#66E1DE',
                            'circle-opacity': 0.1,
                        }}
                    />
                </Source>
            </Map>
        </div>
    )
}
