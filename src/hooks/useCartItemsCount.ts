import CartContext from "context/cart/CartContext";
import { useContext } from "react";

const useCartItemsCount = () => {
	const { cartItems } = useContext(CartContext);
	return cartItems.reduce(
		(total, product) => total + product.attributes.quantity,
		0
	);
};

export default useCartItemsCount;
