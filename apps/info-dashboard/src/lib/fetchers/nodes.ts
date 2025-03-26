import { FeatureCollection } from 'geojson'

export type NodesEndpointReturnElement = {
    ID: string
    CPU: number
    GPU: number
    RAM: number
    Online: boolean
    ConnectedSince: number
    CountryCode: string
    Region: string
    City: string
    Latitude: number
    Longitude: number
}

export type NodesEndpointReturnType = NodesEndpointReturnElement[]

export async function fetchNodes() {
    const API_HOST = (process.env.NEXT_PUBLIC_API_HOST || '').replace(/\/$/, '')
    try {
        const URL = `${API_HOST}/metrics-dashboard/nodes`
        console.log('Fetching nodes from:', URL) // Debug log
        const raw = await fetch(URL)
        if (!raw.ok) {
            throw new Error(`HTTP error! status: ${raw.status}`)
        }
        const res = (await raw.json()) as NodesEndpointReturnType
        return res
    } catch (error) {
        console.error('Error fetching nodes:', error)
        throw error
    }
}

export function toGeoJson(data: NodesEndpointReturnType) {
    const geojson: FeatureCollection = {
        type: 'FeatureCollection',
        features: data
            // filter out "null-island", nodes at 0 long and 0 lat
            .filter((d) => d.Latitude !== 0 || d.Longitude !== 0)
            .map((d) => ({
                type: 'Feature',
                properties: [],
                geometry: {
                    type: 'Point',
                    coordinates: [d.Longitude, d.Latitude],
                },
            })),
    }
    return geojson
}
