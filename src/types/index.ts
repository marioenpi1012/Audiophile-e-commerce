interface IProductsImage {
	data: {
		attributes: {
			url: string;
		};
		id: number;
	};
}
export interface INestedImages {
	desktop: {
		data: {
			attributes: {
				url: string;
			};
		};
	};
	tablet: {
		data: {
			attributes: {
				url: string;
			};
		};
	};
	mobile: {
		data: {
			attributes: {
				url: string;
			};
		};
	};
}
interface IGalleryImage {
	first: INestedImages;
	second: INestedImages;
	third: INestedImages;
}

export interface IProduct {
	attributes: {
		slug: string;
		name: string;
		shortName: string;
		image: INestedImages;
		cartImage: IProductsImage;
		category: string;
		categoryImage: INestedImages;
		new: boolean;
		price: number;
		description: string;
		features: string;
		includedItems: Array<{ quantity: number; item: string }>;
		gallery: IGalleryImage;
		others: Others;
	};
	id: string;
}

export type ProductPreview = Pick<
	IProduct["attributes"],
	"image" | "name" | "new" | "description"
>;

export type CartProductPreview = {
	attributes: Pick<
		IProduct["attributes"],
		"shortName" | "price" | "cartImage"
	> & {
		quantity: number;
	};
	id: string;
};

export type Others = {
	id: number;
	name: string;
	slug: string;
	image: INestedImages;
}[];
