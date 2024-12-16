import { HTMLAttributes } from "react";
import Avatar from "../Avatar/Avatar";
import { SocialIcon } from "@lilypad/shared-components";

interface TeamMemberProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  name?: string;
  position?: string;
  description?: string;
  experience?: string;
  socialIcons?: { iconUrl?: string; href?: string }[];
}

const TeamMember = ({
  src,
  name,
  position,
  description,
  experience,
  socialIcons,
}: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center justify-between text-center bg-inherit p-4 rounded-lg h-full min-h-[24rem] max-w-[19rem] md:max-w-[19rem]">
      {src && (
        <Avatar
          className="md:mb-uui-2xl"
          size="team-member-card"
          avatarImageProps={{
            type: "default",
            alt: name ?? "Team Member",
            src: src,
          }}
        />
      )}

      {name && (
        <h3 className="uui-text-lg font-semibold antialiased text-uui-text-primary-900">
          {name}
        </h3>
      )}

      {position && (
        <p className="font-regular text-uui-text-brand-secondary-700 uui-text-sm antialiased">
          {position}
        </p>
      )}

      {description && (
        <p className="mt-uui-md font-regular uui-text-sm text-uui-text-tertiary-600 antialiased">
          {description}
        </p>
      )}

      {experience && (
        <p className="mt-uui-md font-regular uui-text-sm text-uui-text-tertiary-600 antialiased">
          {experience}
        </p>
      )}

      {socialIcons && socialIcons.length > 0 && (
        <div className="flex items-center justify-center space-x-uui-xl mt-uui-xl">
          {socialIcons
            .filter((icon) => icon.href !== null)
            .map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon iconUrl={icon.iconUrl} />
              </a>
            ))}
        </div>
      )}
    </div>
  );
};

export default TeamMember;
