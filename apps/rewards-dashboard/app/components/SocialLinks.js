const socialLinks = [
    { href: 'https://twitter.com/lilypad_tech', iconUrl: '/x.svg' },
    { href: 'https://discord.gg/WtHbjMP5UB', iconUrl: '/discord.svg' },
    { href: 'https://t.me/lilypadnetwork', iconUrl: '/telegram.svg' },
    { href: 'https://github.com/Lilypad-Tech', iconUrl: '/github.svg' },
    {
        href: 'https://www.linkedin.com/company/lilypad-network/',
        iconUrl: '/linkedin.svg',
    },
    {
        href: 'https://www.youtube.com/@LilypadNetwork/featured',
        iconUrl: '/youtube.svg',
    },
]

export default function SocialLinks({ currentView }) {
    const ctaConfig = {
        openSource: {
            title: 'Get involved!',
            description: 'Join the Lilypad open source initiative now.',
            link: 'https://blog.lilypadnetwork.org/lilypad-launches-open-source-initiative-as-part-of-incentivenet',
        },
        ambassador: {
            title: 'Get involved!',
            description: 'Explore the Lilypad ambassador program now.',
            link: 'https://lilypadnetwork.notion.site/Lilypad-Ambassadors-f11f73e91f684fa192fc2fab7985fe0d',
        },
        modules: {
            title: 'Create a Lilypad module!',
            description: 'Package your AI model to run on Lilypad',
            link: 'https://docs.lilypad.tech/lilypad/developer-resources/lilypad-modules',
        },
    }
    const currentCTA = ctaConfig[currentView]

    return (
        <div className="container w-full py-12 md:flex md:justify-between md:py-4">
            <div className="cta mb-8 text-center md:order-2 md:mb-0 md:text-left">
                <div className="cta-text mb-4">
                    <h3 className="cta-title text-xl font-bold">
                        {currentCTA.title}
                    </h3>
                    <p className="cta-subtitle text-md">
                        {currentCTA.description}
                    </p>
                </div>
                <a
                    href={currentCTA.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button rounded-md bg-[#095856] px-4 py-2 text-[#E0FFF9] hover:bg-[#0c7472]"
                >
                    Find out more!
                </a>
            </div>

            <div className="order-1 flex items-center justify-center gap-4 md:order-1 md:justify-start">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={link.iconUrl} alt="social icon" />
                    </a>
                ))}
            </div>
        </div>
    )
}
