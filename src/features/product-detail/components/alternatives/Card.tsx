import React from "react";
import { LinkButton, Image } from "features/ui";
import { Others } from "types";
import { API_URL } from "config";

type others = Pick<Others[0], "id" | "image" | "name" | "slug">;

interface cardProps extends others {}

const Card: React.FC<cardProps> = (props) => {
	const { name, image, slug } = props;

	return (
		<div className="card text-center">
			<Image mobile={`${API_URL}${image.data.attributes.url}`} />
			<div className="card__content">
				<h2>{name}</h2>
				<LinkButton to={`/${slug}`}>See Product</LinkButton>
			</div>
		</div>
	);
};

export default Card;
