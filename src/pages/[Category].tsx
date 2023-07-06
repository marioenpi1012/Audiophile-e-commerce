import React from "react";
import { useLocation } from "react-router-dom";
import { Products } from "features/category";
import { Cta, SecondNav } from "features/ui";
import { ContentLayout } from "features/layout/ContentLayout";
import { CategoryTypes } from "features/category/types";
import { Transition } from "features/page-transition";

interface categoryProps {}

export const Category: React.FC<categoryProps> = () => {
	const { pathname } = useLocation();

	let category: string = "";

	switch (pathname.replace("/", "")) {
		case CategoryTypes.EARPHONES.toLowerCase():
			category = CategoryTypes.EARPHONES;
			break;
		case CategoryTypes.HEADPHONES.toLowerCase():
			category = CategoryTypes.HEADPHONES;
			break;
		case CategoryTypes.SPEAKERS.toLowerCase():
			category = CategoryTypes.SPEAKERS;
			break;
		default:
			break;
	}

	return (
		<Transition>
			<ContentLayout title={category}>
				<div className="category flow">
					<Products category={category} />
					<SecondNav />
					<Cta />
				</div>
			</ContentLayout>
		</Transition>
	);
};
