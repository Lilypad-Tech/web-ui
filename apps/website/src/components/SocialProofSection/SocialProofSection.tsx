import { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PageContext } from "../../app/clientLayout";
import { HomePageCmsInfo } from "../../app/hooks/strapi/types";

interface SocialProofSectionProps {
	title: string;
}

const SocialProofSection = ({ title }: SocialProofSectionProps) => {
	const { strapi } = useContext(PageContext) as { strapi: HomePageCmsInfo };

	// Use trustedBies from the context
	const trustedByArray = strapi?.trusted_bies || [];

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
				settings: { slidesToShow: 3 },
			},
			{
				breakpoint: 576,
				settings: { slidesToShow: 2 },
			},
		],
	};

	return (
		<div className="flex flex-col w-full items-center space-y-uui-2xl lg:space-y-uui-4xl">
			<span className="uui-text-sm md:uui-text-md font-medium text-uui-text-primary-900 antialiased">
				{title}
			</span>
			<Slider {...settings} className="w-full">
				{trustedByArray?.map(({ src, alt, href }, index) => (
					<div key={index} className="flex items-center px-4">
						<a href={href} target="_blank" rel="noopener noreferrer">
							<img
								src={src}
								alt={alt}
								className="flex items-center w-52 h-24 object-contain transition-opacity duration-300 opacity-80 hover:opacity-100"
							/>
						</a>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default SocialProofSection;