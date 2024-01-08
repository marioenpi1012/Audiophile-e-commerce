import { INestedImages } from "types";

export type Hero = {
	attributes: {
		category: string;
		description: string;
		name: string;
		new: boolean;
		image: INestedImages;
		slug: string;
	};

	id: number;
};
