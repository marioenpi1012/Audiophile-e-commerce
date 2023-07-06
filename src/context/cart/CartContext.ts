import { CartContextType } from "context/cart/CartTypes";

import { createContext } from "react";

const CartContext = createContext<CartContextType>({
	cartItems: [],
	addToCart: () => {},
	removeAllFromCart: () => {},
	inCreaseQty: () => {},
	decreaseQty: () => {},
	clearCart: () => {},
});

export default CartContext;
