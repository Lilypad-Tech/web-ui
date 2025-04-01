import IconAtom from '../IconAtom/IconAtom'
import { NewsletterForm } from '../Forms/NewsletterForm'

export function CallToActions() {
    return (
        <>
            <a
                href="mailto:contact@lilypad.tech"
                className="hover:bg-uui-bg-secondary_hover mb-uui-xl bg-uui-bg-secondary p-uui-6xl lg:p-uui-7xl group relative flex h-full flex-col items-start justify-between rounded-2xl text-left"
            >
                <h3 className="text-uui-text-primary-900 uui-display-sm font-semibold antialiased">
                    Got questions?
                </h3>
                <p className="text-uui-text-tertiary-600 font-regular text-uui-lg md:text-uui-xl">
                    We’re here to help
                </p>
                <span className="text-uui-text-tertiary-600 underline underline-offset-4">
                    contact@lilypad.tech
                </span>
            </a>

            <a
                href="https://blog.lilypad.tech/"
                target="_blank"
                className="hover:bg-uui-bg-secondary_hover mb-uui-xl bg-uui-bg-secondary p-uui-6xl lg:p-uui-7xl group relative flex h-full flex-col items-start justify-between rounded-2xl text-left"
            >
                <h3 className="text-uui-text-primary-900 uui-display-xs md:uui-display-sm font-semibold antialiased">
                    Stay ahead with Lilypad
                </h3>
                <div className="text-uui-text-tertiary-600 font-regular text-uui-lg md:uui-text-xl flex flex-col antialiased">
                    <span>
                        Discover the latest advancements in AI and decentralized
                        computing on the Lilypad blog.
                    </span>
                    <span className="font-regular pt-4 underline underline-offset-4">
                        Explore Now
                    </span>
                </div>
                <div className="m-uui-3xl bg-uui-bg-tertiary p-uui-lg absolute right-0 top-0 w-fit rounded-full">
                    <IconAtom iconUrl="/book-open-01.svg"></IconAtom>
                </div>
            </a>
            <NewsletterForm />
        </>
    )
}
