export interface StrapiContext {
	strapi: HomePageCmsInfo | TeamPageCmsInfo | Object;
}

export interface HomePageCmsInfo {
	badge_url: string;
	badge_badge: string;
	badge_icon: string;
	badge_message: string;
	badge_text: string;
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
	teamMembers: {
		id: number;
		documentId: string;
		Name: string;
		Title: string;
		blurb: string;
		twitter: string;
		linkedin: string;
		website: string;
		Image?: { url: string } | null;
	}[];
	advisors: {
		id: number;
		documentId: string;
		Name: string;
		Title: string;
		blurb: string;
		twitter: string;
		linkedin: string;
		website: string;
		Image?: { url: string } | null;
	}[];
	partners: {
		id: number;
		documentId: string;
		Name: string;
		Title: string;
		blurb: string;
		twitter: string;
		linkedin: string;
		website: string;
		Image?: { url: string } | null;
	}[];
}

export interface TeamMemberInfo {
	name: string;
	image: string;
	title: string;
	blurb: string;
	twitter?: string;
	linkedin?: string;
	website?: string;
}

export interface TrustedByInfo {
	alt: string;
	image: {
		url: string;
	};
}

export interface StrapiResponse {
	strapi: HomePageCmsInfo | TeamPageCmsInfo | Object;
	isLoading: boolean;
}

export interface StrapiProps {
	pathname: string;
}
