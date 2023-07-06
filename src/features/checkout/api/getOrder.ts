import { useQuery } from "react-query";

import { axios } from "lib/axios";

import { Order } from "../types";
import { CartProductPreview, IProduct } from "types";
import { populateConfig } from "config";

const getOrder = ({ session_id }: { session_id: string }): Promise<Order> => {
	return axios.get(`/api/orders/${session_id}`).then((response) => {
		return response.data.data;
	});
};

const getProduct = (id: number): Promise<IProduct> => {
	return axios
		.get(`/api/products/${id}?populate=${populateConfig}`)
		.then((response) => {
			return response.data.data;
		});
};

const getOrderProducts = ({
	order,
}: {
	order: Order;
}): Promise<CartProductPreview[]> => {
	const orderProductPromise = order.attributes.products.map(async (product) => {
		const orderProduct = await getProduct(product.id);
		const productData = {
			...orderProduct,
			attributes: {
				...orderProduct.attributes,
				quantity: product.quantity,
			},
		};
		return productData;
	});

	return Promise.all(orderProductPromise);
};

export const getCheckout = ({
	session_id,
}: {
	session_id: string | null;
}): Promise<CartProductPreview[]> => {
	if (session_id === null) return Promise.resolve([]);
	return getOrder({ session_id }).then((response) => {
		const order = response;
		return getOrderProducts({ order });
	});
};

export const useCheckout = ({ session_id }: { session_id: string | null }) => {
	return useQuery<CartProductPreview[]>({
		queryKey: ["checkout", session_id],
		queryFn: () => getCheckout({ session_id }),
	});
};
