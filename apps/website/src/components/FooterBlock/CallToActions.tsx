import { educationBookOpen01 } from "@frontline-hq/untitledui-icons";
import IconAtom from "../IconAtom/IconAtom";
import { NewsletterForm } from "../Forms/NewsletterForm";

export function CallToActions() {
  return (
    <>
      <a
        href="mailto:contact@lilypad.tech"
        className="group relative hover:bg-uui-bg-secondary_hover mb-uui-xl h-full text-left rounded-2xl bg-uui-bg-secondary p-uui-6xl lg:p-uui-7xl flex flex-col items-start justify-between"
      >
        <h3 className="text-uui-text-primary-900 font-semibold antialiased uui-display-sm">
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
        className="group relative hover:bg-uui-bg-secondary_hover mb-uui-xl h-full text-left rounded-2xl bg-uui-bg-secondary p-uui-6xl lg:p-uui-7xl flex flex-col items-start justify-between"
      >
        <h3 className=" text-uui-text-primary-900 uui-display-xs md:uui-display-sm font-semibold antialiased">
          Stay ahead with Lilypad
        </h3>
        <div className="text-uui-text-tertiary-600 flex flex-col antialiased font-regular text-uui-lg md:uui-text-xl">
          <span>
            Discover the latest advancements in AI and decentralized computing
            on the Lilypad blog.
          </span>
          <span className="font-regular underline underline-offset-4 pt-4">
            Explore Now
          </span>
        </div>
        <div className="rounded-full m-uui-3xl w-fit bg-uui-bg-tertiary p-uui-lg absolute right-0 top-0">
          <IconAtom iconUrl={educationBookOpen01}></IconAtom>
        </div>
      </a>
      <NewsletterForm />
    </>
  );
}
