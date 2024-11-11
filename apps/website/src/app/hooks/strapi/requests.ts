import { TrustedByInfo } from "./types";

const cms_base_url = process.env.NEXT_PUBLIC_STRAPI_URL;
const cms_home_url = cms_base_url?.replace("/api", "");

export function getHomepageInfo() {
  return new Promise((resolve, reject) => {
    fetch(
      `${cms_base_url}/website-homepage?populate[header_image][fields][0]=url&populate[header_lottie][fields][0]=url`, 
      {
        headers: {
          authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API}`,
        },
      }
    )
      .then((data) => {
        data.json().then(({ data: info }) => {
          const homepageInfo = {
            ...info,
            header_image_url: info.header_image ? info.header_image.url : null,
            header_lottie: info.header_lottie ? { url: info.header_lottie.url } : null,
          };
          resolve(homepageInfo); // Return the updated homepage info with header image and Lottie file URLs
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

export function getTeamAdvisors() {
  return new Promise((resolve, reject) => {
    fetch(`${cms_base_url}/team-advisors?populate[Image][fields][0]=url`, {
      headers: { authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API}` },
    })
      .then((data) => data.json())
      .then(({ data }) => {
        const advisorsData = data.map((advisor: any) => ({
          id: advisor.id,
          documentId: advisor.documentId,
          Name: advisor.Name,
          Title: advisor.Title,
          blurb: advisor.blurb,
          twitter: advisor.twitter,
          linkedin: advisor.linkedin,
          website: advisor.website,
          Image: advisor.Image ? { url: advisor.Image.url } : null, // Extract Image URL if present
        }));
        resolve(advisorsData);
      })
      .catch((err) => reject(err));
  });
}

export function getTeamPartners() {
  return new Promise((resolve, reject) => {
    fetch(`${cms_base_url}/team-partners?populate[Image][fields][0]=url`, {
      headers: { authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API}` },
    })
      .then((data) => data.json())
      .then(({ data }) => {
        const partnersData = data.map((partner: any) => ({
          id: partner.id,
          documentId: partner.documentId,
          Name: partner.Name,
          Title: partner.Title,
          blurb: partner.blurb,
          twitter: partner.twitter,
          linkedin: partner.linkedin,
          website: partner.website,
          Image: partner.Image ? { url: partner.Image.url } : null, // Extract Image URL if present
        }));
        resolve(partnersData);
      })
      .catch((err) => reject(err));
  });
}

export function getTeamCore() {
	return new Promise((resolve, reject) => {
		fetch(
			`${cms_base_url}/team-cores?populate[Image][fields][0]=url`, // Ensure Image field is populated
			{
				headers: {
					authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API}`,
				},
			}
		)
			.then((data) => data.json())
			.then(({ data }) => {
				const teamCoreData = data.map((member: any) => ({
					id: member.id,
					documentId: member.documentId,
					Name: member.Name,
					Title: member.Title,
					blurb: member.blurb,
					twitter: member.twitter,
					linkedin: member.linkedin,
					website: member.website,
					Image: member.Image ? { url: member.Image.url } : null, // Extract Image URL if present
				}));
				resolve(teamCoreData);
			})
			.catch((err) => reject(err));
	});
}
