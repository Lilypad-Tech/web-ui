import { useEffect, useState } from "react";
import { getHomepageInfo, getTrustedBy, getTeamCore, getTeamAdvisors, getTeamPartners } from "./requests";
import { HomePageCmsInfo, TeamPageCmsInfo, StrapiProps, StrapiResponse } from "./types";

function useStrapi({ pathname }: StrapiProps): StrapiResponse {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [strapi, setStrapi] = useState<HomePageCmsInfo | TeamPageCmsInfo | Object>({});

	const getData = () => {
		switch (pathname) {
			case "/":
				Promise.allSettled([getHomepageInfo(), getTrustedBy()])
					.then((results) => {
						const homepageInfoResp = results[0];
						const trustedByResp = results[1];

						if (homepageInfoResp.status === "fulfilled" && trustedByResp.status === "fulfilled") {
							const homepageData = homepageInfoResp.value as HomePageCmsInfo;
							setStrapi((prevState) => ({
								...prevState,
								...homepageData,
								trusted_bies: trustedByResp.value || [],
								header_lottie: homepageData.header_lottie || null,
							}));
						}
					})
					.finally(() => setIsLoading(false));
				break;

			case "/team":
			  Promise.allSettled([getTeamCore(), getTeamAdvisors(), getTeamPartners()])
			    .then((results) => {
			      const teamCoreResp = results[0];
			      const advisorsResp = results[1];
			      const partnersResp = results[2];

			      setStrapi((prevState) => ({
			        ...prevState,
			        teamMembers: teamCoreResp.status === "fulfilled" ? teamCoreResp.value : [],
			        advisors: advisorsResp.status === "fulfilled" ? advisorsResp.value : [],
			        partners: partnersResp.status === "fulfilled" ? partnersResp.value : [],
			      }));
			    })
			    .finally(() => setIsLoading(false));
			  break;

			default:
				setIsLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, [pathname]);

	return { strapi, isLoading };
}

export default useStrapi;
