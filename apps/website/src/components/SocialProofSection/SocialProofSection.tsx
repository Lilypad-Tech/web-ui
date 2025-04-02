import { useContext } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { PageContext } from '../../app/clientLayout'
import { HomePageCmsInfo } from '../../app/hooks/strapi/types'
import { supporters } from '@/data/team'

const SocialProofSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 5 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 4 },
            },
            {
                breakpoint: 576,
                settings: { slidesToShow: 3 },
            },
        ],
    }

    return (
        <div className="space-y-uui-xl flex w-full flex-col items-center">
            <span className="text-uui-text-brand-secondary-700 uui-text-md md:uui-text-lg font-semibold antialiased">
                Partners & Supporters
            </span>
            <Slider {...settings} className="w-full">
                {supporters.map(({ name, website, image }, index) => (
                    <div
                        key={index}
                        className="single-partner-item px-4 md:px-0"
                    >
                        <a
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                width={128}
                                height={80}
                                src={image}
                                alt={`${name} Partner Logo`}
                                className="mx-auto h-20 w-32 object-contain md:h-24 md:w-36"
                            />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default SocialProofSection
