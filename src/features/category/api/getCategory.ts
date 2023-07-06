import { useQuery } from "react-query";
import { AxiosResponse } from "axios";

import { axios } from "lib/axios";
import { CategoryTypes } from "../types";
import { IProduct } from "types";
import { populateConfig } from "config";

const getProducts = (): Promise<IProduct[]> => {
	return axios
		.get(`/api/products?populate=${populateConfig}`)
		.then((response: AxiosResponse) => {
			return response.data.data;
		});
};

const getCategory = (category: string, data: IProduct[] | undefined) => {
	let products: IProduct[] | undefined;
	switch (category) {
		case CategoryTypes.EARPHONES:
			products = data?.filter(
				(product) =>
					product.attributes.category === CategoryTypes.EARPHONES.toLowerCase()
			);
			break;
		case CategoryTypes.HEADPHONES:
			products = data?.filter(
				(product) =>
					product.attributes.category === CategoryTypes.HEADPHONES.toLowerCase()
			);
			break;
		case CategoryTypes.SPEAKERS:
			products = data?.filter(
				(product) =>
					product.attributes.category === CategoryTypes.SPEAKERS.toLowerCase()
			);
			break;
		default:
			break;
	}
	return products;
};

export const useCategory = (category: string) => {
	const { data, error, isLoading } = useQuery<IProduct[], Error>(
		["products"],
		getProducts
	);

	const products = getCategory(category, data);

	return { products, error, isLoading };
};
