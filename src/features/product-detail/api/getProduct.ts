import { useQuery } from "react-query";
import { AxiosResponse } from "axios";

import { axios } from "lib/axios";
import { IProduct } from "types";
import { populateConfig } from "config";

const getProductBySlug = (slug: string | undefined): Promise<IProduct> => {
	return axios
		.get<IProduct>(
			`/api/product/find-by-slug/${slug}?populate=${populateConfig}`
		)
		.then((response: AxiosResponse) => {
			return response.data.data;
		});
};

export const useProduct = (slug: string | undefined) => {
	return useQuery<IProduct, Error>(["product", slug], () =>
		getProductBySlug(slug)
	);
};
