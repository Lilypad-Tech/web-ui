import { TrustedByInfo } from "./types";

const cms_base_url = process.env.NEXT_PUBLIC_STRAPI_URL;
//remove /api from base_url and to home_url variable
const cms_home_url = cms_base_url?.replace("/api", "");
export function getHomepageInfo() {
	return new Promise((resolve, reject) => {
		fetch(`${cms_base_url}/website-homepage`, {
			headers: {
				authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_API}`,
			},
		})
			.then((data) => {
				data.json().then(({ data: info }) => {
					resolve(info.mission_statement);
				});
			})
			.catch((err) => {
				reject(err);
			});
	});
}

export function getTrustedBy() {
	return new Promise((resolve, reject) => {
		fetch(
			`${cms_base_url}/website-trusted-bies?populate[image][fields][0]=url`,
			{
				headers: {
					authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_API}`,
				},
			}
		).then((data) => {
			data.json()
				.then(({ data: infos }) => {
					const trustedBies = infos.map((infos: TrustedByInfo) => ({
						alt: infos.alt,
						src: cms_home_url + infos.image.url,
					}));
					resolve(trustedBies);
				})
				.catch((err) => {
					reject(err);
				});
		});
	});
}
