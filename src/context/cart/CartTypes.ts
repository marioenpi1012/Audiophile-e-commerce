import { CartProductPreview } from "types";

enum CartTypes {
	ADD_TO_CART = "ADD_TO_CART",
	REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART",
	CLEAR_CART = "CLEAR_CART",
	INCREASE_QTY = "INCREASE_QTY",
	DECREASE_QTY = "DECREASE_QTY",
}

export type initialState = {
	cartItems: CartProductPreview[];
};

export type CartContextType = {
	cartItems: CartProductPreview[];
	addToCart: (payload: CartProductPreview) => void;
	removeAllFromCart: () => void;
	inCreaseQty: (payload: string) => void;
	decreaseQty: (payload: string) => void;
	clearCart: () => void;
};

export type CartAction =
	| { type: CartTypes.ADD_TO_CART; payload: any }
	| { type: CartTypes.CLEAR_CART }
	| { type: CartTypes.DECREASE_QTY; payload: string }
	| { type: CartTypes.INCREASE_QTY; payload: string }
	| { type: CartTypes.REMOVE_ALL_FROM_CART };

const getCartItemsInitialState = (): CartProductPreview[] => {
	// retrieve cart items from local storage if exists, else return empty array.
	const localStorageCartItems = localStorage.getItem("cartItems");
	if (localStorageCartItems) {
		return JSON.parse(localStorageCartItems);
	}
	return [];
};

export const initialState: initialState = {
	cartItems: getCartItemsInitialState(),
};

export default CartTypes;
