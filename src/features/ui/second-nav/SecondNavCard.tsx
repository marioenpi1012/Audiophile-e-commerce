import React from "react";
import { LinkButton } from "features/ui";
import arrow from "assets/shared/desktop/icon-arrow-right.svg";
export interface SecondNavCardProps {
	title: string;
	image: string;
	url: string;
}

const SecondNavCard: React.FC<SecondNavCardProps> = ({ title, image, url }) => {
	return (
		<div className="Card grid">
			<img src={image} className="Card__img" alt={`${title} image.`} />
			<div className="Card__container">
				<h2 className="Card__title">{title}</h2>
				<LinkButton to={url} variant="text">
					<span className="opacity-50">Shop</span>
					<img src={arrow} alt="arrow" />
				</LinkButton>
			</div>
		</div>
	);
};

export default SecondNavCard;
