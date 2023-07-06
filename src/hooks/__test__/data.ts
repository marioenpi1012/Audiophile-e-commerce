import { CartProductPreview } from "types";

export const testItems: CartProductPreview[] = [
	{
		id: "1",
		attributes: {
			price: 20,
			quantity: 1,
			shortName: "test1",
			cartImage: {
				data: { id: 1, attributes: { url: "test.jpeg" } },
			},
		},
	},
	{
		id: "2",
		attributes: {
			price: 30,
			quantity: 1,
			shortName: "test2",
			cartImage: {
				data: { id: 1, attributes: { url: "test.jpeg" } },
			},
		},
	},
];
