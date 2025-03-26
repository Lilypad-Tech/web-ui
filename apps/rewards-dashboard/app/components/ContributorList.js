import { useState, useEffect } from 'react'

const ContributionList = ({ contributions }) => {
    const [titles, setTitles] = useState([])

    useEffect(() => {
        if (!contributions) return

        const fetchTitles = async () => {
            const GITHUB_TOKEN = '' // Optional: Add your GitHub token if rate-limited
            const headers = GITHUB_TOKEN
                ? { Authorization: `token ${GITHUB_TOKEN}` }
                : {}

            const fetchedTitles = await Promise.all(
                contributions.split(';').map(async (contribution) => {
                    if (!contribution.trim()) return 'Invalid URL'

                    try {
                        let apiUrl,
                            isPullRequest = false,
                            isIssue = false

                        if (contribution.includes('/pull/')) {
                            // Handle Pull Requests
                            apiUrl = contribution
                                .replace(
                                    'https://github.com/',
                                    'https://api.github.com/repos/'
                                )
                                .replace('/pull/', '/pulls/')
                            isPullRequest = true
                        } else if (contribution.includes('/issues/')) {
                            // Handle Issues
                            apiUrl = contribution.replace(
                                'https://github.com/',
                                'https://api.github.com/repos/'
                            )
                            isIssue = true
                        } else {
                            // Handle Repositories (remove "/tree/..." if present)
                            apiUrl = contribution
                                .replace(
                                    'https://github.com/',
                                    'https://api.github.com/repos/'
                                )
                                .split('/tree/')[0] // Remove branch/tag path
                        }

                        console.log(`Fetching: ${apiUrl}`)

                        const res = await fetch(apiUrl, { headers })

                        if (!res.ok) {
                            throw new Error(
                                `HTTP ${res.status} - ${res.statusText}`
                            )
                        }

                        const data = await res.json()

                        return isPullRequest
                            ? data.title || 'Unknown PR Title'
                            : isIssue
                              ? data.title || 'Unknown Issue Title'
                              : data.full_name.split('/')[1] ||
                                'Unknown Repo Name' // Extracts only the repo name
                    } catch (error) {
                        console.error(
                            `Error fetching title for ${contribution}:`,
                            error
                        )
                        return `Error (${error.message})`
                    }
                })
            )

            setTitles(fetchedTitles)
        }

        fetchTitles()
    }, [contributions])

    return (
        <ul>
            {contributions &&
                contributions.split(';').map((contribution, index) => (
                    <li key={index}>
                        <a
                            href={contribution}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {titles[index] !== undefined
                                ? `${index + 1}. ${titles[index]}`
                                : 'Loading...'}
                        </a>
                    </li>
                ))}
        </ul>
    )
}

export default ContributionList
