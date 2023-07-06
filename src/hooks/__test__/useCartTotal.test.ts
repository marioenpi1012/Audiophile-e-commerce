import { renderHook } from "@testing-library/react";
import useCartTotal from "hooks/useCartTotal";
import { CartProductPreview } from "types";

describe("useCartTotal_function", () => {
	// Tests that the function returns 0 when the cart is empty
	it("test_empty_cart", () => {
		const items: CartProductPreview[] = [];

		const { result } = renderHook(() => useCartTotal(items));
		expect(result.current).toBe(0);
	});

	// Tests that the function returns the correct total for a cart with a single item
	it("test_single_item_cart", () => {
		const items = [
			{
				attributes: {
					shortName: "item1",
					price: 10,
					quantity: 1,
					cartImage: {
						data: { id: 1, attributes: { url: "test_image.jpeg" } },
					},
				},
				id: "1",
			},
		];
		const { result } = renderHook(() => useCartTotal(items));
		expect(result.current).toBe(10);
	});

	// Tests that the function returns the correct total for a cart with multiple items
	it("test_multiple_items_cart", () => {
		const items = [
			{
				attributes: {
					shortName: "item1",
					price: 10,
					cartImage: {
						data: { id: 1, attributes: { url: "test_image.jpeg" } },
					},
					quantity: 1,
				},
				id: "1",
			},
			{
				attributes: {
					shortName: "item2",
					price: 20,
					cartImage: {
						data: { id: 2, attributes: { url: "test_image.jpeg" } },
					},
					quantity: 2,
				},
				id: "2",
			},
		];

		const { result } = renderHook(() => useCartTotal(items));
		expect(result.current).toBe(50);
	});

	// Tests that the function correctly handles items with zero quantity
	it("test_zero_quantity_item", () => {
		const items = [
			{
				attributes: {
					shortName: "item1",
					price: 10,
					cartImage: {
						data: { id: 1, attributes: { url: "test_image.jpeg" } },
					},
					quantity: 0,
				},
				id: "1",
			},
		];
		const { result } = renderHook(() => useCartTotal(items));
		expect(result.current).toBe(0);
	});

	// Tests that the function correctly handles items with negative price
	it("test_negative_price_item", () => {
		const items = [
			{
				attributes: {
					shortName: "item1",
					price: -10,
					cartImage: {
						data: { id: 1, attributes: { url: "test_image.jpeg" } },
					},
					quantity: 1,
				},
				id: "1",
			},
		];

		const { result } = renderHook(() => useCartTotal(items));
		expect(result.current).toBe(-10);
	});
});
