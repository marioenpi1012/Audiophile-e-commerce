import React from "react";
import zx9ImageMobile from "assets/home/mobile/image-speaker-zx9.png";
import zx9ImageTablet from "assets/home/tablet/image-speaker-zx9.png";
import zx9ImageDesktop from "assets/home/desktop/image-speaker-zx9.png";
import zx7ImageMobile from "assets/home/mobile/image-speaker-zx7.jpg";
import zx7ImageTablet from "assets/home/tablet/image-speaker-zx7.jpg";
import zx7ImageDesktop from "assets/home/desktop/image-speaker-zx7.jpg";
import yx1ImageMobile from "assets/home/mobile/image-earphones-yx1.jpg";
import yx1ImageTablet from "assets/home/tablet/image-earphones-yx1.jpg";
import yx1ImageDesktop from "assets/home/desktop/image-earphones-yx1.jpg";
import background from "assets/home/desktop/pattern-circles.svg";
import { LinkButton } from "features/ui";

import { Card } from "./card";

interface CategoryShowcaseProps {}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = () => {
	const description =
		"Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.";
	return (
		// ! Do not remove data-id. is used in home for flow purpose
		<div
			className="CategoryShowcase body-padding-inline"
			data-id="category-showcase"
		>
			<div className="card-list flow">
				<Card className="bg-accent-700">
					<article
						className="product  flex flex-col bg-image bg-image--card-product"
						style={{ backgroundImage: `url(${background})` }}
					>
						<Card.Image
							mobile={zx9ImageMobile}
							tablet={zx9ImageTablet}
							desktop={zx9ImageDesktop}
							className="product__image"
							alt=""
						/>
						<div className="product__content flow text-neutral-200 text-center">
							<Card.Heading heading="zx9 Speaker" />
							<Card.Description
								description={description}
								className="opacity-75"
							/>
							<LinkButton to="/speakers/zx9-speaker" variant="secondary-filled">
								See Product
							</LinkButton>
						</div>
					</article>
				</Card>
				<Card>
					<Card.Image
						mobile={zx7ImageMobile}
						tablet={zx7ImageTablet}
						desktop={zx7ImageDesktop}
						alt=""
					/>
					<div className="content--absolute flex flex-col">
						<Card.Heading heading="zx7 Speaker" />
						<LinkButton to="/speakers/zx7-speaker" variant="secondary">
							See Product
						</LinkButton>
					</div>
				</Card>
				<Card className="even-columns">
					<Card.Image
						mobile={yx1ImageMobile}
						tablet={yx1ImageTablet}
						desktop={yx1ImageDesktop}
						alt=""
					/>
					<div className="content fw-bold flex bg-neutral-300">
						<Card.Heading heading="YX1 Earphone" />
						<LinkButton to="/earphones/yx1-earphone" variant="secondary">
							See Product
						</LinkButton>
					</div>
				</Card>
			</div>
		</div>
	);
};
