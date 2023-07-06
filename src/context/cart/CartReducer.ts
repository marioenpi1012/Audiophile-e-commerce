import CartTypes from "context/cart/CartTypes";
import { CartAction, initialState } from "context/cart/CartTypes";

const CartReducer = (state: initialState, action: CartAction) => {
	switch (action.type) {
		case CartTypes.ADD_TO_CART:
			// check if product exist in cartItems
			const existingProductId = state.cartItems.find(
				(product) => product.id === action.payload.id
			);
			// if product exist in cartItems => update the quantity => return updated product + rest of products
			if (existingProductId) {
				const updatedCartProducts = state.cartItems.map((product) => {
					if (product.id === action.payload.id) {
						return {
							...product,
							attributes: {
								...product.attributes,
								quantity:
									product.attributes.quantity +
									action.payload.attributes.quantity,
							},
						};
					}
					return product;
				});
				// save in local storage
				localStorage.setItem("cartItems", JSON.stringify(updatedCartProducts));
				return {
					...state,
					cartItems: updatedCartProducts,
				};
			}
			// else add the product and return previous products + new product
			const cartItems = [...state.cartItems, { ...action.payload }];
			// save in local storage
			localStorage.setItem("cartItems", JSON.stringify(cartItems));
			return {
				...state,
				cartItems: cartItems,
			};
		case CartTypes.CLEAR_CART:
			// clear local storage
			localStorage.clear();
			return {
				...state,
				cartItems: [],
			};
		case CartTypes.INCREASE_QTY:
			// update the quantity of the product and return the others product
			const updatedIncreaseQtyProducts = state.cartItems.map((product) => {
				if (product.id === action.payload) {
					return {
						...product,
						attributes: {
							...product.attributes,
							quantity: product.attributes.quantity + 1,
						},
					};
				}
				return product;
			});

			localStorage.setItem(
				"cartItems",
				JSON.stringify(updatedIncreaseQtyProducts)
			);
			return {
				...state,
				cartItems: updatedIncreaseQtyProducts,
			};
		case CartTypes.DECREASE_QTY:
			// update the quantity of the product and return the others product
			const updatedDecreaseQtyProducts = state.cartItems
				.map((product) => {
					if (product.id === action.payload) {
						if (product.attributes.quantity > 1) {
							return {
								...product,
								attributes: {
									...product.attributes,
									quantity: product.attributes.quantity - 1,
								},
							};
						}
						// if the quantity becomes 0 => return null
						return null;
					}
					return product;
				})
				// return non null products
				.filter((product) => product !== null);

			localStorage.setItem(
				"cartItems",
				JSON.stringify(updatedDecreaseQtyProducts)
			);
			return {
				...state,
				cartItems: updatedDecreaseQtyProducts,
			};
		default:
			return state;
	}
};

export default CartReducer;
