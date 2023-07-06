import React from "react";
import { Hero } from "features/hero";
import { Cta, SecondNav } from "features/ui";

import { CategoryShowcase } from "features/category-showcase";
import { ContentLayout } from "features/layout/ContentLayout";
import { Transition } from "features/page-transition";

export type IHero = {
	attributes: {
		category: string;
		description: string;
		name: string;
		new: boolean;
		image: {
			data: {
				attributes: {
					url: string;
				};
			}[];
		};
	};

	id: number;
};

export const Home: React.FC = () => {
	return (
		<Transition>
			<ContentLayout title="">
				<div className="Home flow">
					<Hero />
					<SecondNav />
					<CategoryShowcase />
					<Cta />
				</div>
			</ContentLayout>
		</Transition>
	);
};

// export default Transition(Home)
