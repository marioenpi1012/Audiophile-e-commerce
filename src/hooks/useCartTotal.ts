import { CartProductPreview } from "types";
import { useMemo } from "react";

const useCartTotal = (items: CartProductPreview[]): number => {
	const total = useMemo(
		() =>
			items.reduce(
				(total, product) =>
					total + product.attributes.price * product.attributes.quantity,
				0
			),
		[items]
	);

	return total;
};

export default useCartTotal;
