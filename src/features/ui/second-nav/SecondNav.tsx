import React from "react";
import SecondNavCard, { SecondNavCardProps } from "./SecondNavCard";
import HeadphonesImg from "assets/shared/desktop/image-headphones.png";
import SpeakerImg from "assets/shared/desktop/image-speakers.png";
import EarphonesImg from "assets/shared/desktop/image-earphones.png";
import cx from "classnames";
interface SecondNavProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLElement>,
		HTMLElement
	> {
	className?: string;
}

export const SecondNav: React.FC<SecondNavProps> = ({ className, ...rest }) => {
	const cards: SecondNavCardProps[] = [
		{
			title: "Headphones",
			url: "/headphones",
			image: HeadphonesImg,
		},
		{
			title: "Speakers",
			url: "/speakers",
			image: SpeakerImg,
		},
		{
			title: "Earphones",
			url: "/earphones",
			image: EarphonesImg,
		},
	];
	return (
		// ! Do not remove data-id. it's used in Home for flow purposes
		<nav
			className={cx("body-padding-inline", className)}
			data-id="second-nav"
			{...rest}
		>
			<ul role="list" className="second-nav even-columns">
				{cards.map((card) => (
					<li key={card.title}>
						<SecondNavCard
							title={card.title}
							url={card.url}
							image={card.image}
						/>
					</li>
				))}
			</ul>
		</nav>
	);
};
