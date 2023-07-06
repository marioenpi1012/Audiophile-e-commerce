import React, { useContext, useEffect, useRef } from "react";
import CartContext from "context/cart/CartContext";
import { Modal } from "features/modal";
import { LinkButton, NumberInput, Button, Row } from "features/ui";
import { formatCurrency } from "utils/formatCurrency";
import emptyCart from "assets/cart/empty-cart.png";
import { useCartModal } from "stores/cartModal";
import useCartItemsCount from "hooks/useCartItemsCount";
import useCartTotal from "hooks/useCartTotal";
import { motion } from "framer-motion";

interface CartModalProps {}

export const CartModal: React.FC<CartModalProps> = () => {
	const { cartItems, clearCart, inCreaseQty, decreaseQty } =
		useContext(CartContext);
	const { isOpen, closeModal } = useCartModal();
	const itemsCount = useCartItemsCount();
	const total = useCartTotal(cartItems);
	const ref = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		const modal = ref.current;
		if (isOpen) {
			!modal?.open && modal?.showModal();
		}
		return () => modal?.close();
	}, [isOpen]);

	const handleCloseDialog = (event: React.MouseEvent<HTMLDialogElement>) => {
		// Dialog will close when click outside
		if (event.target === ref.current) {
			ref.current.close();
			// will set to false since its doing the opposite of what it is
			closeModal();
		}
	};

	const ulVariants = {
		open: {
			transition: { staggerChildren: 0.07, delayChildren: 0.2 },
		},
		closed: {
			transition: { staggerChildren: 0.05, staggerDirection: -1 },
		},
	};
	const liVariants = {
		open: {
			y: 0,
			opacity: 1,
			transition: {
				y: { stiffness: 1000, velocity: -100 },
			},
		},
		closed: {
			y: 50,
			opacity: 0,
			transition: {
				y: { stiffness: 1000 },
			},
		},
	};
	return (
		<motion.div
			className="wrapper"
			initial={false}
			animate={isOpen ? "open" : "closed"}
		>
			<Modal className="cart-modal flow" ref={ref} onClick={handleCloseDialog}>
				{cartItems.length > 0 ? (
					<>
						<div className="cart-modal__header">
							<h3 className="fs-body-content fs-600 fw-bold uppercase">
								Cart {itemsCount > 0 && <span>({itemsCount})</span>}
							</h3>
							<Button variant="link" className="capitalize" onClick={clearCart}>
								<span className="fs-body-content opacity-50">Remove all</span>
							</Button>
						</div>
						<motion.ul className="grid" variants={ulVariants}>
							{cartItems.map((product) => (
								<motion.li
									variants={liVariants}
									key={product.id}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
								>
									<Row
										key={product.id}
										shortName={product.attributes.shortName}
										price={product.attributes.price}
										cartImage={product.attributes.cartImage}
									>
										<NumberInput
											amount={product.attributes.quantity}
											onDecrease={() => decreaseQty(product.id)}
											onIncrease={() => inCreaseQty(product.id)}
										/>
									</Row>
								</motion.li>
							))}
						</motion.ul>
						<div className="cart-modal__total fs-body-content">
							<p className="text-primary-900 uppercase opacity-50">total</p>
							<p className="fs-600 fw-bold ">{formatCurrency(total)}</p>
						</div>
						<LinkButton
							to="/checkout"
							className="uppercase"
							onClick={closeModal}
						>
							Checkout
						</LinkButton>
					</>
				) : (
					<div className="cart-modal--empty text-center">
						<p>your cart is empty</p>
						<img src={emptyCart} alt="" />
					</div>
				)}
			</Modal>
		</motion.div>
	);
};
