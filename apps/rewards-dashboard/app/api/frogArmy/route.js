import { promises as fs } from 'fs'
import path from 'path'

export async function GET() {
    try {
        const csvFilePath = path.join(
            process.cwd(),
            'public',
            'galxe_rewards.csv'
        )
        const data = await fs.readFile(csvFilePath, 'utf8')
        const lines = data.trim().split('\n')
        const headers = lines[0].split(',')
        const contributors = lines.slice(1).map((line) => {
            const values = line.split(',')
            const contributor = {}
            headers.forEach((header, index) => {
                contributor[header.trim()] = values[index]
                    ? values[index].trim()
                    : null
            })

            // Map to unified structure that matches the expected format in the UI
            return {
                username: null, // Placeholder for Twitter username when available
                avatar: null,
                wallet_address: contributor.Wallet_20_Address,
                rewards: contributor.Point,
                ranking: contributor.Ranking,
                twitter: null, // Placeholder for Twitter account
            }
        })

        return new Response(JSON.stringify(contributors), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        })
    } catch (error) {
        console.error('Error reading CSV file:', error)
        return new Response('Error reading CSV file', { status: 500 })
    }
}
