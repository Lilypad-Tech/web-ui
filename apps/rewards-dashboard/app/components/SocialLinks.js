const socialLinks = [
  { href: "https://twitter.com/lilypad_tech", iconUrl: "/x.svg" },
  { href: "https://discord.com/invite/ywSEGd3d84", iconUrl: "/discord.svg" },
  { href: "https://t.me/lilypadnetwork", iconUrl: "/telegram.svg" },
  { href: "https://github.com/Lilypad-Tech", iconUrl: "/github.svg" },
  { href: "https://www.linkedin.com/company/lilypad-network/", iconUrl: "/linkedin.svg" },
  { href: "https://www.youtube.com/@LilypadNetwork/featured", iconUrl: "/youtube.svg" }
];

export default function SocialLinks({currentView}) {
  return (
    <div className="md:flex md:justify-between container w-full py-12 md:py-4">
      <div className="cta md:order-2 text-center md:text-left mb-8 md:mb-0">
        <div className="cta-text mb-4">
          <h3 className="cta-title text-xl font-bold">Get involved!</h3>
          {currentView === "openSource" ?
          <p className="cta-subtitle text-md">Join the Lilypad open source initiative now.</p>
          :
          <p className="cta-subtitle text-md">Explore the Lilypad ambassador program now.</p>
          }
        </div>
        <a
          href={currentView === "openSource" ?
            "https://blog.lilypadnetwork.org/lilypad-launches-open-source-initiative-as-part-of-incentivenet"
            :
            "https://lilypadnetwork.notion.site/Lilypad-Ambassadors-f11f73e91f684fa192fc2fab7985fe0d"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button bg-[#095856] text-[#E0FFF9] px-4 py-2 rounded-md hover:bg-[#0c7472]"
        >
          Find out more!
        </a>
      </div>

      <div className="flex order-1 md:order-1 gap-4 justify-center md:justify-start items-center">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            <img src={link.iconUrl} alt="social icon" />
          </a>
        ))}
      </div>
    </div>
  );
}
