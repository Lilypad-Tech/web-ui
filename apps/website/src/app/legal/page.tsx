import ContentItem from '@/components/ContentItem/ContentItem'
import PrivacyPolicy from '@/components/Legal/PrivacyPolicy'
import Terms from '@/components/Legal/Terms'

const Legal = () => {
    return (
        <div className="max-w-uui-width-xxs mx-auto md:mx-0 md:max-w-none">
            <div className="relative">
                <div className="py-uui-4xl mx-auto max-w-[45rem]">
                    <ContentItem
                        size="md"
                        paragraph="This document outlines the Privacy Policy and Terms of Use for the IncentiveNet provided by Lilypad Network Inc. By accessing or using the IncentiveNet, you agree to the practices described in the Privacy Policy and the rules outlined in the Terms of Use. If you do not agree to any part of this document, please refrain from using the IncentiveNet."
                    />
                </div>
                <PrivacyPolicy />
                <Terms />
            </div>
        </div>
    )
}
export default Legal
