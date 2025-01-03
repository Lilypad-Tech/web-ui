import { useState, useEffect } from "react";

const ContributionList = ({ contributions }) => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const fetchTitles = async () => {
		const fetchedTitles = await Promise.all(
		  contributions.split(";").map(async (contribution) => {
			try {
			  const apiUrl = contribution
				.replace('https://github.com/', 'https://api.github.com/repos/')
				.replace('/pull/', '/pulls/');

			
			  const res = await fetch(apiUrl);
			  if (!res.ok) {
				throw new Error(`Error ${res.status}: ${res.statusText}`);
			  }
			  const data = await res.json();
			  return data.title || "Unknown Title";
			} catch (error) {
			  console.error(`Error fetching title for ${contribution}:`, error);
			  return "Error Loading Title";
			}
		  })
		);
		setTitles(fetchedTitles);
	  };
	  

    fetchTitles();
  }, [contributions]);

  return (
    <ul>
      {contributions && contributions.split(";").map((contribution, index) => (
        <li key={index}>
          <a href={contribution} target="_blank" rel="noopener noreferrer">
		  	{titles[index] !== undefined
                ? `${index + 1}. ${titles[index]}`
                : "Loading..."}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ContributionList;