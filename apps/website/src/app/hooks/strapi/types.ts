export interface StrapiContext {
    strapi: HomePageCmsInfo | TeamPageCmsInfo | Object
}

export interface HomePageCmsInfo {
    badge_url: string
    badge_badge: string
    badge_icon: string
    badge_message: string
    badge_text: string
    mission_statement: string
    header_image_alt: string
    header_image_url?: string | null
    header_lottie?: { url: string } | null
    trusted_bies: {
        src: string
        alt: string
        href: string
    }[]
}

export interface TeamPageCmsInfo {
    trusted_bies: {
        src: string
        alt: string
    }[]
    teamMembers: {
        id: number
        documentId: string
        Name: string
        Title: string
        experience: string
        blurb: string
        twitter: string
        linkedin: string
        website: string
        Image?: { url: string } | null
        order: number
    }[]
    advisors: {
        id: number
        documentId: string
        Name: string
        Title: string
        experience: string
        blurb: string
        twitter: string
        linkedin: string
        website: string
        Image?: { url: string } | null
        order: number
    }[]
    partners: {
        id: number
        documentId: string
        Name: string
        Title: string
        blurb: string
        twitter: string
        linkedin: string
        website: string
        Image?: { url: string } | null
    }[]
}

export interface TeamMemberInfo {
    name: string
    image: string
    title: string
    experience: string
    blurb: string
    twitter?: string
    linkedin?: string
    website?: string
}

export interface TrustedByInfo {
    alt: string
    image: {
        url: string
    }
    href: string
}

export interface StrapiResponse {
    strapi: HomePageCmsInfo | TeamPageCmsInfo | Object
    isLoading: boolean
}

export interface StrapiProps {
    pathname: string
}
