import { HTMLAttributes } from 'react'
import Avatar from '../Avatar/Avatar'
import { SocialIcon } from '@lilypad/shared-components'

interface AdvisorProps extends HTMLAttributes<HTMLDivElement> {
    src?: string
    name?: string
    position?: string
    description?: string
    experience?: string
    socialIcons?: { iconUrl?: string; href?: string }[]
}

const Advisor = ({
    src,
    name,
    position,
    description,
    experience,
    socialIcons,
}: AdvisorProps) => {
    return (
        <div className="flex h-full max-w-[19rem] flex-col items-center rounded-lg bg-inherit p-4 text-center md:max-w-[15rem]">
            {src && (
                <Avatar
                    className="md:mb-uui-2xl"
                    size="team-member-card"
                    avatarImageProps={{
                        type: 'default',
                        alt: name ?? 'Team Member',
                        src: src,
                    }}
                />
            )}

            <div className="flex flex-grow flex-col items-center">
                {name && (
                    <h3 className="uui-text-lg text-uui-text-primary-900 font-semibold antialiased">
                        {name}
                    </h3>
                )}

                {position && (
                    <p className="font-regular text-uui-text-brand-secondary-700 uui-text-sm antialiased">
                        {position}
                    </p>
                )}

                {description && (
                    <p className="mt-uui-md font-regular uui-text-sm text-uui-text-tertiary-600 line-clamp-3 antialiased">
                        {description}
                    </p>
                )}

                {experience && (
                    <p className="mt-uui-md font-regular uui-text-sm text-uui-text-tertiary-600 antialiased">
                        {experience}
                    </p>
                )}
            </div>

            {socialIcons && socialIcons.length > 0 && (
                <div className="space-x-uui-xl mt-uui-xl flex items-center justify-center">
                    {socialIcons.map((icon, index) =>
                        icon.iconUrl ? (
                            <a
                                key={index}
                                href={icon.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SocialIcon iconUrl={icon.iconUrl} />
                            </a>
                        ) : null
                    )}
                </div>
            )}
        </div>
    )
}

export default Advisor
