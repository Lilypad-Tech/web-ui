import { useEffect, useState } from "react";
import { getHomepageInfo, getTrustedBy } from "./requests";
import { HomePageCmsInfo, StrapiProps, StrapiResponse } from "./types";

function useStrapi({ pathname }: StrapiProps): StrapiResponse {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [strapi, setStrapi] = useState<HomePageCmsInfo | Object>({});
	const getData = () => {
		switch (pathname) {
			case "/":
				Promise.allSettled([getHomepageInfo(), getTrustedBy()])
					.then((results) => {
						const homepageInfoResp =
							results[0] as PromiseFulfilledResult<unknown>;
						const trustedByResp =
							results[1] as PromiseFulfilledResult<unknown>;
						if (
							homepageInfoResp.status === "fulfilled" &&
							trustedByResp.status === "fulfilled"
						) {
							setStrapi((prevState: HomePageCmsInfo) => {
								return {
									...prevState,
									mission_statement: homepageInfoResp.value,
									trusted_bies: trustedByResp.value,
								};
							});
						}
					})
					.catch(() => {
						throw new Error("Failed to fetch strapi data");
					})
					.finally(() => {
						setIsLoading(false);
					});
				break;
			case "/team":
				Promise.allSettled([getTrustedBy()])
					.then((results) => {
						const trustedByResp =
							results[0] as PromiseFulfilledResult<unknown>;
						if (trustedByResp.status === "fulfilled") {
							setStrapi((prevState: HomePageCmsInfo) => {
								return {
									...prevState,
									trusted_bies: trustedByResp.value,
								};
							});
						}
					})
					.finally(() => {
						setIsLoading(false);
					});
				break;
			default:
				setIsLoading(false);
		}
	};
	useEffect(() => {
		getData();
	}, []);
	return { strapi, isLoading };
}

export default useStrapi;
