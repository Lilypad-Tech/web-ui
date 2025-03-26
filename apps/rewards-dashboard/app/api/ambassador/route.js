import { promises as fs } from 'fs'
import path from 'path'

const DISCORD_TOKEN = process.env.DISCORD_TOKEN

async function fetchDiscordUser(discordUserId) {
    const discordAPIBase = 'https://discord.com/api/v10'

    try {
        const response = await fetch(
            `${discordAPIBase}/users/${discordUserId}`,
            {
                headers: {
                    Authorization: `Bot ${DISCORD_TOKEN}`,
                },
            }
        )

        if (!response.ok) {
            const errorBody = await response.text()
            throw new Error(
                `Failed to fetch Discord user with ID: ${discordUserId}. Status: ${response.status}. Body: ${errorBody}`
            )
        }

        const data = await response.json()
        return {
            username: data?.global_name ?? data?.username,
            avatar: data.avatar
                ? `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png`
                : null,
        }
    } catch (error) {
        console.error(
            `Error fetching Discord user with ID ${discordUserId}:`,
            error
        )
        return null
    }
}

async function parseCSVFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8')
        const lines = data.trim().split('\n')
        const headers = lines[0].split(',')
        return lines.slice(1).map((line) => {
            const values = line.split(',')
            return headers.reduce((obj, header, index) => {
                obj[header.trim()] = values[index] ? values[index].trim() : null
                return obj
            }, {})
        })
    } catch (error) {
        console.error('Error reading or parsing CSV file:', error)
        throw error
    }
}

export async function GET(req) {
    const csvFilePath = path.join(
        process.cwd(),
        'public',
        'ambassador_rewards.csv'
    )

    if (!DISCORD_TOKEN) {
        console.error('Bot token not set in environment variables')
        return new Response('Server configuration error: Bot token not set', {
            status: 500,
        })
    }

    try {
        const ambassadors = await parseCSVFile(csvFilePath)

        const enrichedAmbassadors = await Promise.all(
            ambassadors.map(async (ambassador) => {
                if (ambassador.id) {
                    const discordUser = await fetchDiscordUser(ambassador.id)
                    return {
                        id: ambassador.id,
                        username: discordUser?.username ?? 'Unknown',
                        avatar: discordUser?.avatar ?? null,
                        wallet_address: ambassador.wallet_address,
                        rewards: ambassador?.rewards,
                        contributions: null,
                    }
                } else {
                    console.warn(`Ambassador ${ambassador.username} has no ID`)
                    return null
                }
            })
        )

        return new Response(JSON.stringify(enrichedAmbassadors), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        })
    } catch (error) {
        console.error('Error processing ambassadors:', error)
        return new Response(
            JSON.stringify({
                error: 'Error processing ambassadors',
                details: error.message,
            }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        )
    }
}
