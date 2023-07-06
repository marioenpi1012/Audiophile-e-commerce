import { INestedImages } from "types";

export type Hero = {
	attributes: {
		category: string;
		description: string;
		name: string;
		new: boolean;
		image: INestedImages;
	};

	id: number;
};
