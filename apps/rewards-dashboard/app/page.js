"use client";
import { useState, useEffect } from "react";
import SocialLinks from "./components/SocialLinks";
import { LoadingIcon } from "./components/loadingIcon";
import { sortByRewards, sortByContributions } from "./utils/sort";

export default function Home() {
  const [contributors, setContributors] = useState([]);
  const [currentView, setCurrentView] = useState("openSource");
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchContributors = async (view) => {
    setContributors([]);
    setLoading(true);
    try {
      const res = await fetch(`/api/${view}`);
      const data = await res.json();

      setTimeout(() => {
        setContributors(data);
        setLoading(false);
      }, 250);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContributors(currentView);
  }, [currentView]);

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);

    if (selectedOption === "rewards") {
      sortByRewards(contributors, setContributors);
    } else if (selectedOption === "contributions") {
      sortByContributions(contributors, setContributors);
    }
  };

  const renderContributors = () => {
    return contributors.map((contributor) => {
      const isAmbassador = !contributor?.contributions;
      return (
        <tr key={contributor?.id || contributor?.username} className="border-b border-gray-700">
          <td className="px-4 py-2" title={contributor.id && `User ID: #${contributor.id}`}>
            <div className="flex items-center gap-2">
              <img
                className="contributor-avatar w-8 h-8 rounded-full"
                src={
                  isAmbassador
                    ? contributor.avatar || "/default-avatar.png"
                    : `https://github.com/${contributor.username}.png`
                }
                alt={`Avatar of ${contributor.username}`}
                loading="lazy"
              />
              <div>
                <div className="contributor-name text-sm font-semibold">
                  {contributor.username}
                </div>
                {currentView === "openSource" && (
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
          <td className="text-center px-4 py-2">{contributor.rewards || "0"}</td>
          {currentView === "openSource" && (
            <td className="text-center px-4 py-2">
              {contributor.contributions
                ?.split(";")
                .filter((item) => item).length || "0"}
            </td>
          )}
          <td className="text-center px-4 py-2">{contributor.wallet_address || "N/A"}</td>
        </tr>
      );
    });
  };

  return (
    <div className="px-4 md:px-0 text-[#e0fff9] py-3">
      <main className="container mx-auto rounded-xl border-secondary mt-4">
        <nav className="navbar md:w-full mb-6 md:mb-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <img src="/lilypad-logo.svg" alt="Lilypad Logo" className="mx-auto md:mx-0" />
            <h1 className="text-xl font-bold text-[#b8f4f3]">
              {currentView === "openSource" ? "Open Sourcerors" : "Ambassadors"}
            </h1>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <button
              className={`rounded p-1 md:px-4 md:py-2 text-sm md:text-lg text-center cursor-pointer hover:bg-[#272d35] ${
                currentView === "openSource"
                  ? "bg-[#272D35] text-[#e0fff9] border"
                  : "bg-[#181c21] text-text-color"
              }`}
              onClick={() => setCurrentView("openSource")}
            >
              Open Source Rewards
            </button>
            <button
              className={`rounded p-1 md:px-4 md:py-2 text-sm md:text-lg text-center cursor-pointer hover:bg-[#272d35] ${
                currentView === "ambassador"
                  ? "bg-[#272D35] text-[#e0fff9] border"
                  : "bg-[#181c21] text-text-color"
              }`}
              onClick={() => setCurrentView("ambassador")}
            >
              Ambassador Rewards
            </button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-center text-sm md:text-md leading-7 text-[#E0FFF9] font-semibold antialiased" style={{ minWidth: '200px' }}>
              {loading ? (
                <span aria-live="polite">Loading...</span>
              ) : currentView === "openSource" ? (
                <span>
                  {`Total Contributions: ${contributors.reduce((total, contributor) => {
                    const count = contributor?.contributions?.split(";").filter(Boolean).length || 0;
                    return total + count;
                  }, 0)}`}
                </span>
              ) : (
                <span>{`Total Contributors: ${contributors?.length || 0}`}</span>
              )}
            </div>
            {currentView === "openSource" && (
              <label className="block">
                <span className="sr-only">Sort contributions</span>
                <select
                  className="font-inter bg-[#181c21] text-text-color border border-[#0c7471] p-1 text-sm rounded cursor-pointer"
                  value={sortOption}
                  onChange={handleSortChange}
                  aria-label="Sort contributors by"
                >
                  <option value="rewards">Sort by rewards</option>
                  <option value="contributions">Sort by contributions</option>
                </select>
              </label>
            )}
          </div>
        </nav>

        <section className={`bg-[#181c21] md:min-h-[60vh] w-full flex flex-col my-auto overflow-x-auto transition-opacity duration-300`}>
          {loading ? (
            <span className="text-center flex flex-col my-auto items-center">
              <LoadingIcon />
              <p className="text-lg font-semibold">Loading entries</p>
              <p className="text-sm text-[#0f9491]">This might take a moment!</p>
            </span>
          ) : (
            <div className="table-container w-full overflow-x-auto">
              <table className="contributors-table w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left px-4 py-2">Contributor</th>
                    <th className="text-center px-4 py-2">Lilybit Rewards</th>
                    {currentView === "openSource" && (
                      <th className="text-center px-4 py-2">Contributions</th>
                    )}
                    <th className="text-center px-4 py-2">Wallet ID</th>
                  </tr>
                </thead>
                <tbody>{renderContributors()}</tbody>
              </table>
            </div>
          )}
        </section>
      </main>
      <SocialLinks currentView={currentView}/>
    </div>
  );
}
