import { HTMLAttributes } from "react";
import Avatar from "../Avatar/Avatar";
import { SocialIcon } from "@lilypad/shared-components";

interface TeamMemberProps extends HTMLAttributes<HTMLDivElement> {
	src?: string;
	name?: string;
	position?: string;
	description?: string;
	socialIcons?: { iconUrl: string; href: string }[];
}

const TeamMember = ({
	src,
	name,
	position,
	description,
	socialIcons,
}: TeamMemberProps) => {
	return (
		<div className="text-center flex flex-col items-center justify-center max-w-[19rem] md:max-w-[15rem] ">
			{src && (
				<Avatar
					className="mb-uui-xl md:mb-uui-2xl"
					size="team-member-card"
					avatarImageProps={{
						type: "default",
						alt: name ?? "Team Member",
						src: src,
					}}
				></Avatar>
			)}

			{name && (
				<h3 className="uui-text-lg font-semibold antialiased text-uui-text-primary-900 ">
					{name}
				</h3>
			)}
			{position && (
				<p className="font-regular text-uui-text-brand-secondary-700 uui-text-md antialiased">
					{position}
				</p>
			)}
			{description && (
				<p className="mt-uui-md font-regular uui-text-md text-uui-text-tertiary-600 antialiased">
					{description}
				</p>
			)}
			{socialIcons && (
				<div className="flex items-center justify-center space-x-uui-xl mt-uui-xl">
					{socialIcons.map((icon, index) => (
						<a key={index} href={icon.href} target="_blank">
							<SocialIcon iconUrl={icon.iconUrl}></SocialIcon>
						</a>
					))}
				</div>
			)}
		</div>
	);
};
export default TeamMember;
