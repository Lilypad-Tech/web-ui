export const sortByRewards = (contributors, setContributors) => {
  const sortedContributors = [...contributors].sort((a, b) => {
    return parseInt(b.rewards, 10) - parseInt(a.rewards, 10); // Sort numerically by rewards
  });
  setContributors(sortedContributors);
};

export const sortByContributions = (contributors, setContributors) => {
  const sortedContributors = [...contributors].sort((a, b) => {
    const aContributions = a.contributions.split(";").filter(Boolean).length;
    const bContributions = b.contributions.split(";").filter(Boolean).length;
    return bContributions - aContributions; // Sort by the number of contributions
  });
  setContributors(sortedContributors);
};
