import React from "react";
import Card from "./Card";
import { Others } from "types";

type alternativesCard = { others: Others };

export const Alternatives: React.FC<alternativesCard> = ({ others }) => {
	return (
		<div className="alternatives  text-center">
			<h3 className="fs-secondary-heading uppercase">You may also like</h3>
			<div className="even-columns">
				{others.map((other) => (
					<Card {...other} key={other.id} />
				))}
			</div>
		</div>
	);
};
