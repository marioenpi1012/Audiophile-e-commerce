import { act, renderHook } from "@testing-library/react";
import { useCartModal } from "../cartModal";

test("should open and close cart modal", () => {
	const { result } = renderHook(() => useCartModal());

	expect(result.current.isOpen).toBeFalsy();

	act(() => result.current.openModal());
	expect(result.current.isOpen).toBeTruthy();

	act(() => result.current.closeModal());
	expect(result.current.isOpen).toBeFalsy();
});
