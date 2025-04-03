'use client'
import { useState, useEffect, Fragment } from 'react'
import SocialLinks from './components/SocialLinks'
import { LoadingIcon } from './components/loadingIcon'
import ContributionList from './components/ContributorList'
import { sortByRewards, sortByContributions } from './utils/sort'

export default function Home() {
    const [contributors, setContributors] = useState([])
    const [currentView, setCurrentView] = useState('openSource')
    const [sortOption, setSortOption] = useState('')
    const [loading, setLoading] = useState(true)
    const [expandedRow, setExpandedRow] = useState(null)

    const fetchContributors = async (view) => {
        setContributors([])
        setLoading(true)
        try {
            const res = await fetch(`/api/${view}`)
            const data = await res.json()

            setTimeout(() => {
                setContributors(data)
                setLoading(false)
            }, 250)
        } catch (error) {
            console.error('Error fetching data:', error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchContributors(currentView)
    }, [currentView])

    const handleSortChange = (event) => {
        const selectedOption = event.target.value
        setSortOption(selectedOption)

        if (selectedOption === 'rewards') {
            sortByRewards(contributors, setContributors)
        } else if (selectedOption === 'contributions') {
            sortByContributions(contributors, setContributors)
        } else if (selectedOption === 'modules') {
            sortByContributions(contributors, setContributors)
        }
    }

    const renderContributors = () => {
        const toggleRow = (rowId) => {
            setExpandedRow((prev) => (prev === rowId ? null : rowId))
        }

        return contributors.map((contributor) => {
            const isAmbassador = currentView === 'ambassador'
            const isExpanded =
                expandedRow === contributor?.id ||
                expandedRow === contributor?.username

            return (
                <Fragment key={contributor?.id || contributor?.username}>
                    <tr
                        className={`cursor-pointer border-b border-gray-700 hover:bg-gray-800 ${
                            isExpanded ? 'bg-gray-900' : ''
                        }`}
                        onClick={() =>
                            !isAmbassador &&
                            toggleRow(contributor?.id || contributor?.username)
                        }
                    >
                        <td className="px-4 py-2">
                            <div className="flex items-center gap-2">
                                <img
                                    className="contributor-avatar h-8 w-8 rounded-full"
                                    src={
                                        contributor.avatar ||
                                        `https://github.com/${contributor.username}.png`
                                    }
                                    alt={`Avatar of ${contributor.username}`}
                                    loading="lazy"
                                />
                                <div>
                                    <div className="contributor-name text-sm font-semibold">
                                        {contributor.username}
                                    </div>
                                    {!isAmbassador && (
                                        <a
                                            href={`https://github.com/${contributor?.username}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-xs text-blue-500 underline"
                                            aria-label={`Visit ${contributor?.username}'s GitHub profile`}
                                        >
                                            GitHub Profile
                                        </a>
                                    )}
                                </div>
                            </div>
                        </td>
                        <td className="px-4 py-2 text-center">
                            {contributor.rewards || '0'}
                        </td>
                        {!isAmbassador && (
                            <td className="px-4 py-2 text-center">
                                {contributor.contributions
                                    ?.split(';')
                                    .filter((item) => item).length || '0'}
                            </td>
                        )}
                        <td className="px-4 py-2 text-center">
                            {contributor.wallet_address || 'N/A'}
                        </td>
                    </tr>

                    {!isAmbassador && isExpanded && (
                        <tr>
                            <td colSpan="4" className="px-4 py-4">
                                <div className="rounded-lg p-4">
                                    <ol className="menu bg-base-200 rounded-box">
                                        {contributor?.contributions && (
                                            <ContributionList
                                                contributions={
                                                    contributor.contributions
                                                }
                                            />
                                        )}
                                    </ol>
                                </div>
                            </td>
                        </tr>
                    )}
                </Fragment>
            )
        })
    }

    const viewTitles = {
        openSource: 'Open Sourcerors',
        ambassador: 'Ambassadors',
        modules: 'Module Creators',
    }

    return (
        <div className="px-4 py-3 text-[#e0fff9] md:px-0">
            <main className="border-secondary container mx-auto mt-4 rounded-xl">
                <nav className="navbar mb-6 flex flex-col items-center justify-between gap-4 md:mb-12 md:w-full md:flex-row">
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <img
                            src="/lilypad-logo.svg"
                            alt="Lilypad Logo"
                            className="mx-auto md:mx-0"
                        />
                        <h1 className="text-xl font-bold text-[#b8f4f3]">
                            {viewTitles[currentView] || 'Default Title'}
                        </h1>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4">
                        <button
                            className={`cursor-pointer rounded p-1 text-center text-sm hover:bg-[#272d35] md:px-4 md:py-2 md:text-lg ${
                                currentView === 'openSource'
                                    ? 'border bg-[#272D35] text-[#e0fff9]'
                                    : 'text-text-color bg-[#181c21]'
                            }`}
                            onClick={() => setCurrentView('openSource')}
                        >
                            Open Source
                        </button>
                        <button
                            className={`cursor-pointer rounded p-1 text-center text-sm hover:bg-[#272d35] md:px-4 md:py-2 md:text-lg ${
                                currentView === 'ambassador'
                                    ? 'border bg-[#272D35] text-[#e0fff9]'
                                    : 'text-text-color bg-[#181c21]'
                            }`}
                            onClick={() => setCurrentView('ambassador')}
                        >
                            Ambassadors
                        </button>
                        <button
                            className={`cursor-pointer rounded p-1 text-center text-sm hover:bg-[#272d35] md:px-4 md:py-2 md:text-lg ${
                                currentView === 'modules'
                                    ? 'border bg-[#272D35] text-[#e0fff9]'
                                    : 'text-text-color bg-[#181c21]'
                            }`}
                            onClick={() => setCurrentView('modules')}
                        >
                            Module Creators
                        </button>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div
                            className="md:text-md text-center text-sm font-semibold leading-7 text-[#E0FFF9] antialiased"
                            style={{ minWidth: '200px' }}
                        >
                            {loading ? (
                                <span aria-live="polite">Loading...</span>
                            ) : currentView !== 'ambassador' ? (
                                <span>
                                    {`Total Contributions: ${contributors.reduce(
                                        (total, contributor) => {
                                            const count =
                                                contributor?.contributions
                                                    ?.split(';')
                                                    .filter(Boolean).length || 0
                                            return total + count
                                        },
                                        0
                                    )}`}
                                </span>
                            ) : (
                                <span>{`Total Contributors: ${
                                    contributors?.length || 0
                                }`}</span>
                            )}
                        </div>
                        {currentView !== 'ambassador' && (
                            <label className="block">
                                <span className="sr-only">
                                    Sort contributions
                                </span>
                                <select
                                    className="font-inter text-text-color cursor-pointer rounded border border-[#0c7471] bg-[#181c21] p-1 text-sm"
                                    value={sortOption}
                                    onChange={handleSortChange}
                                    aria-label="Sort contributors by"
                                >
                                    <option value="rewards">
                                        Sort by rewards
                                    </option>
                                    <option value="contributions">
                                        Sort by contributions
                                    </option>
                                </select>
                            </label>
                        )}
                    </div>
                </nav>

                <section
                    className={`my-auto flex w-full flex-col overflow-x-auto bg-[#181c21] transition-opacity duration-300 md:min-h-[60vh]`}
                >
                    {loading ? (
                        <span className="my-auto flex flex-col items-center text-center">
                            <LoadingIcon />
                            <p className="text-lg font-semibold">
                                Loading entries
                            </p>
                            <p className="text-sm text-[#0f9491]">
                                This might take a moment!
                            </p>
                        </span>
                    ) : (
                        <div className="table-container w-full overflow-x-auto">
                            <table className="contributors-table w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-600">
                                        <th className="px-4 py-2 text-left">
                                            Contributor
                                        </th>
                                        <th className="px-4 py-2 text-center">
                                            Lilybit Rewards
                                        </th>
                                        {currentView !== 'ambassador' && (
                                            <th className="px-4 py-2 text-center">
                                                Contributions
                                            </th>
                                        )}
                                        <th className="px-4 py-2 text-center">
                                            Wallet ID
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>{renderContributors()}</tbody>
                            </table>
                        </div>
                    )}
                </section>
            </main>
            <SocialLinks currentView={currentView} />
        </div>
    )
}
