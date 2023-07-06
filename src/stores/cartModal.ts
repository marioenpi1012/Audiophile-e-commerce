import { create } from "zustand";

type CartModalStore = {
	isOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
};

export const useCartModal = create<CartModalStore>((set) => ({
	isOpen: false,
	openModal: () => set({ isOpen: true }),
	closeModal: () => set({ isOpen: false }),
}));
