import { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomePageCmsInfo } from "../../app/hooks/strapi/types";

interface SocialProofProps {
	strapi: HomePageCmsInfo;
}

const SocialProofSection = ({ strapi }: SocialProofProps) => {
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
				settings: { slidesToShow: 4 },
			},
			{
				breakpoint: 576,
				settings: { slidesToShow: 3 },
			},
		],
	};

	return (
		<div className="flex flex-col w-full items-center space-y-uui-xl">
			<span className="text-uui-text-brand-secondary-700 font-semibold antialiased uui-text-md md:uui-text-lg">
				Trusted by
			</span>
			<Slider {...settings} className="w-full">
				{trustedByArray?.map(({ src, alt, href }, index) => (
					<div key={index} className="single-partner-item">
						<a href={href} target="_blank" rel="noopener noreferrer">
							<img
								src={src}
								alt={`${alt} Partner Logo` || "Partner Logo"}
								className="w-32 h-20 md:w-36 md:h-24 object-contain mx-auto"
							/>
						</a>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default SocialProofSection;