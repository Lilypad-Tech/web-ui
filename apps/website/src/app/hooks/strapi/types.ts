export interface StrapiContext {
	strapi: HomePageCmsInfo | Object;
}

export interface HomePageCmsInfo {
	mission_statement: string;
	trusted_bies: {
		src: string;
		alt: string;
	}[];
}
export interface TeamPageCmsInfo {
	trusted_bies: {
		src: string;
		alt: string;
	}[];
}
export interface TrustedByInfo {
	alt: string;
	image: {
		url: string;
	};
}
export interface StrapiResponse {
	strapi: HomePageCmsInfo | Object;
	isLoading: Boolean;
}
export interface StrapiProps {
	pathname: string;
}
