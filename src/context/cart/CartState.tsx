import React, { ReactNode, useReducer } from "react";
import CartContext from "context/cart/CartContext";
import CartTypes, { initialState } from "context/cart/CartTypes";
import CartReducer from "context/cart/CartReducer";
import { CartProductPreview } from "types";
import { useNotification } from "stores/notification";

interface CartStateProps {
	children: ReactNode;
}

const CartState: React.FC<CartStateProps> = ({ children }) => {
	const [state, dispatch] = useReducer(CartReducer, initialState);
	const { addNotification } = useNotification();
	const addToCart = (payload: CartProductPreview) => {
		addNotification({
			type: "success",
			title: `Product ${payload.attributes.shortName} added to cart.`,
		});

		dispatch({ type: CartTypes.ADD_TO_CART, payload });
	};

	const inCreaseQty = (payload: string) => {
		dispatch({ type: CartTypes.INCREASE_QTY, payload });
	};

	const decreaseQty = (payload: string) => {
		dispatch({ type: CartTypes.DECREASE_QTY, payload });
	};

	const removeALLFromCart = () => {
		dispatch({ type: CartTypes.REMOVE_ALL_FROM_CART });
	};

	const clearCart = () => {
		dispatch({ type: CartTypes.CLEAR_CART });
	};

	return (
		<CartContext.Provider
			value={{
				cartItems: state.cartItems,
				addToCart,
				removeAllFromCart: removeALLFromCart,
				inCreaseQty,
				decreaseQty,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartState;
