import { useEffect, useState } from "react";

export interface StrapiContext {
	strapi: StrapiCmsInfo;
}

interface StrapiCmsInfo {
	mission_statement: string;
}
interface StrapiResponse {
	strapi: StrapiCmsInfo;
	isLoading: Boolean;
}
interface StrapiProps {
	pathname: string;
}

function useStrapi({ pathname }: StrapiProps): StrapiResponse {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [strapi, setStrapi] = useState<StrapiCmsInfo>({
		mission_statement: "",
	});
	const getApiName = () => {
		switch (pathname) {
			case "/":
				return "website-homepage";
		}
	};
	useEffect(() => {
		const apiName = getApiName();
		fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/${apiName}`, {
			headers: {
				authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_API}`,
			},
		}).then((data) => {
			data.json()
				.then(({ data: info }) => {
					setStrapi(info);
				})
				.finally(() => {
					setIsLoading(false);
				});
		});
	}, []);
	return { strapi, isLoading };
}

export default useStrapi;
