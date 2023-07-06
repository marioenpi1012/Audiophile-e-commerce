import React from "react";
import desktopImage from "assets/shared/desktop/image-best-gear.jpg";
import tabletImage from "assets/shared/tablet/image-best-gear.jpg";
import mobileImage from "assets/shared/mobile/image-best-gear.jpg";
interface CtaProps {}

export const Cta: React.FC<CtaProps> = () => {
	return (
		<div className="Cta body-padding-inline">
			<picture>
				<source srcSet={desktopImage} media="(min-width: 1200px)" />
				<source srcSet={tabletImage} media="(min-width: 768px)" />
				<img className="Cta__image" src={mobileImage} alt="Best Gear" />
			</picture>
			<div className="Cta-container text-center extra-body-padding-inline">
				<h2 className="Cta-container__title fs-secondary-heading uppercase fw-bold">
					Bringing you the <span className="text-accent-700">best</span> audio
					gear.
				</h2>
				<p className="fs-body-content">
					Located at the heart of New York City, Audiophile is the premier store
					for high end headphones, earphones, speakers, and audio accessories.
					We have a large showroom and luxury demonstration rooms available for
					you to browse and experience a wide range of our products. Stop by our
					store to meet some of the fantastic people who make Audiophile the
					best place to buy your portable audio equipment.
				</p>
			</div>
		</div>
	);
};
