import { SectionContainer } from '@lilypad/shared-components'
import ContentItem from '../ContentItem/ContentItem'

export default function PrivacyPolicy() {
    return (
        <SectionContainer>
            <div className="mx-auto max-w-[45rem]">
                <ContentItem size="xl" id="privacy" heading="Privacy Policy" />
                <section>
                    <ContentItem
                        size="md"
                        heading="Last updated: December 18, 2024"
                        paragraph={`Lilypad Network Inc. ("we," "our," "us") values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect the information you provide to us when using our website and services.`}
                    />
                    <ContentItem
                        size="md"
                        className="py-uui-4xl"
                        heading="1. Information We Collect"
                        paragraph="We collect only the minimal information necessary to provide and improve our services:"
                    />
                    <ul className="text-uui-text-tertiary-600 list-disc space-y-2 pl-5">
                        <li>
                            Cookies: Our website uses basic cookies to improve
                            functionality, track usage patterns, and enhance
                            user experience. You can manage cookie settings in
                            your browser at any time.
                        </li>
                        <li>
                            Newsletter Subscriptions: When subscribing to our
                            newsletter, we collect your email address to send
                            you updates and information about our services.
                        </li>
                        <li>
                            Website Analytics: We may use tools to collect
                            anonymized data, such as browser type, time spent on
                            the site, and pages visited.
                        </li>
                        <li>
                            Our website may contain links to documentation,
                            blogs, and other resources hosted on third-party
                            platforms but managed by Lilypad Network Inc. While
                            we make every effort to ensure the security and
                            privacy of these resources, please be aware that
                            accessing these resources may involve third-party
                            services (e.g., hosting or content delivery
                            networks) with their own privacy practices. Lilypad
                            Network Inc. is not responsible for the privacy
                            practices or policies of these third-party
                            platforms. We encourage users to review the privacy
                            policies of these platforms before interacting with
                            the content.
                        </li>
                    </ul>
                </section>
                <section>
                    <ContentItem
                        size="md"
                        className="py-uui-4xl"
                        heading="2. Use of Information"
                        paragraph="The information we collect is used for the following purposes:"
                    />
                    <ul className="text-uui-text-tertiary-600 list-disc space-y-2 pl-5">
                        <li>
                            To maintain and improve the functionality of our
                            website.
                        </li>
                        <li>
                            To communicate with you via the newsletter, if
                            subscribed.
                        </li>
                        <li>
                            To analyze website traffic and user behavior for
                            optimization.
                        </li>
                    </ul>
                    <ContentItem
                        size="md"
                        paragraph="We do not sell or share your personal information with third parties for marketing purposes."
                    />
                </section>
                <section>
                    <ContentItem
                        size="md"
                        id="cookies"
                        className="py-uui-4xl"
                        heading="3. Cookies and Tracking Technologies"
                        paragraph="Cookies are small text files stored on your device by your web browser. They allow us to:"
                    />
                    <ul className="text-uui-text-tertiary-600 list-disc space-y-2 pl-5">
                        <li>
                            Recognize your preferences when you visit our
                            website.
                        </li>
                        <li>
                            Analyze website traffic to improve performance and
                            usability.
                        </li>
                    </ul>
                    <ContentItem
                        size="md"
                        paragraph="You can disable cookies in your browser settings; however, some website features may not function properly."
                    />
                </section>
                <section>
                    <ContentItem
                        size="md"
                        className="py-uui-4xl"
                        heading="4. Newsletter Subscriptions"
                        paragraph="If you subscribe to our newsletter, we will use your email address to send you updates about our services, events, and resources. You can unsubscribe at any time by clicking the 'Unsubscribe' link in any email or by contacting us at contact@lilypad.tech."
                    />
                </section>
                <section>
                    <ContentItem
                        size="md"
                        className="py-uui-4xl"
                        heading="5. Links"
                        paragraph="Our website may contain links to documentation, blogs, and other resources hosted on third-party platforms but managed by Lilypad Network Inc. While we make every effort to ensure the security and privacy of these resources, please be aware that accessing these resources may involve third-party services (e.g., hosting or content delivery networks) with their own privacy practices. Lilypad Network Inc. is not responsible for the privacy practices or policies of these third-party platforms. We encourage users to review the privacy policies of these platforms before interacting with the content."
                    />
                </section>
                <section>
                    <ContentItem
                        size="md"
                        className="py-uui-4xl"
                        heading="6. Data Security"
                        paragraph="We take reasonable technical and organizational precautions to protect your personal information from unauthorized access, use, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee absolute data security."
                    />
                </section>
                <section>
                    <ContentItem
                        size="md"
                        className="py-uui-4xl"
                        heading="7. Your Privacy Choices"
                        paragraph="Cookies are small text files stored on your device by your web browser. They allow us to:"
                    />
                    <ul className="text-uui-text-tertiary-600 list-disc space-y-2 pl-5">
                        <li>
                            Managing Cookies: You can configure your browser to
                            refuse cookies or alert you when cookies are being
                            sent.
                        </li>
                        <li>
                            Unsubscribing from Emails: You can opt out of our
                            newsletter at any time by using the
                            &quot;Unsubscribe&quot; link or contacting us
                            directly.
                        </li>
                    </ul>
                </section>
                <section>
                    <ContentItem
                        size="md"
                        className="py-uui-4xl"
                        heading="8. Changes to This Policy"
                        paragraph="We may update this Privacy Policy periodically to reflect changes in our practices or legal obligations. Any updates will be posted on this page with the 'Effective Date' noted at the top."
                    />
                </section>
                <section>
                    <ContentItem
                        size="md"
                        className="py-uui-4xl"
                        heading="9. Contact Us"
                        paragraph="If you have any questions or concerns about this Privacy Policy, please contact us:"
                    />
                    <div className="p-6border max-w-md rounded-md border-gray-200 shadow-md">
                        <h2 className="text-uui-text-primary-900 text-xl font-semibold">
                            Lilypad Network Inc.
                        </h2>
                        <p className="text-uui-text-tertiary-600">
                            425 1st Street, San Francisco, CA 94105, United
                            States
                        </p>
                        <p className="text-uui-text-tertiary-600">
                            Email:
                            <a
                                href="mailto:contact@lilypad.tech"
                                className="hover:underline"
                            >
                                contact@lilypad.tech
                            </a>
                        </p>
                        <p className="text-uui-text-tertiary-600">
                            Website:
                            <a
                                href="https://lilypad.tech"
                                className="hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://lilypad.tech
                            </a>
                        </p>
                    </div>
                </section>
            </div>
        </SectionContainer>
    )
}
