import { TrustedByInfo } from "./types";

const cms_base_url = process.env.NEXT_PUBLIC_STRAPI_URL!;
const cms_home_url = cms_base_url.replace("/api", "");

const fetchWithAuth = async (url: string) => {
  const response = await fetch(url, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }

  return response.json();
};

export async function getHomepageInfo() {
  try {
    const { data: info } = await fetchWithAuth(
      `${cms_base_url}/website-homepage?populate[header_image][fields][0]=url&populate[header_lottie][fields][0]=url`
    );

    return {
      ...info,
      header_image_url: info.header_image?.url || null,
      header_lottie: info.header_lottie ? { url: info.header_lottie.url } : null,
    };
  } catch (err) {
    console.error("Error fetching homepage info:", err);
    throw err;
  }
}

export async function getTrustedBy() {
  try {
    const { data: infos } = await fetchWithAuth(
      `${cms_base_url}/website-trusted-bies?populate[image][fields][0]=url`
    );

    return infos.map((info: TrustedByInfo) => ({
      alt: info.alt,
      src: cms_home_url + info.image?.url,
    }));
  } catch (err) {
    console.error("Error fetching trusted by info:", err);
    throw err;
  }
}

export async function getTeamAdvisors() {
  try {
    const { data } = await fetchWithAuth(
      `${cms_base_url}/team-advisors?populate[Image][fields][0]=url`
    );

    return data.map((advisor: any) => ({
      id: advisor.id,
      documentId: advisor.documentId,
      Name: advisor.Name,
      Title: advisor.Title,
      blurb: advisor.blurb,
	  experience: advisor.experience,
      twitter: advisor.twitter,
      linkedin: advisor.linkedin,
      website: advisor.website,
      Image: advisor.Image?.url || null,
    }));
  } catch (err) {
    console.error("Error fetching team advisors:", err);
    throw err;
  }
}

export async function getTeamPartners() {
  try {
    const { data } = await fetchWithAuth(
      `${cms_base_url}/team-partners?populate[Image][fields][0]=url`
    );

    return data.map((partner: any) => ({
      id: partner.id,
      documentId: partner.documentId,
      Name: partner.Name,
      Title: partner.Title,
      blurb: partner.blurb,
      twitter: partner.twitter,
      linkedin: partner.linkedin,
      website: partner.website,
      Image: partner.Image?.url || null,
    }));
  } catch (err) {
    console.error("Error fetching team partners:", err);
    throw err;
  }
}

export async function getTeamCore() {
  try {
    const { data } = await fetchWithAuth(
      `${cms_base_url}/team-cores?populate[Image][fields][0]=url`
    );

    return data.map((member: any) => ({
      id: member.id,
      documentId: member.documentId,
      Name: member.Name,
      Title: member.Title,
      blurb: member.blurb,
	  experience: member.experience,
      twitter: member.twitter,
      linkedin: member.linkedin,
      website: member.website,
      Image: member.Image?.url || null,
	  order: member.order
    }));
  } catch (err) {
    console.error("Error fetching team core members:", err);
    throw err;
  }
}
