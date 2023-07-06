import React, { useContext, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import checkIcon from "assets/shared/desktop/icon-check-mark.svg";
import useCartTotal from "hooks/useCartTotal";
import { formatCurrency } from "utils/formatCurrency";
import { Modal } from "features/modal";
import { Button, LinkButton, Row } from "features/ui";
import { useCheckout } from "features/checkout/api/getOrder";
import CartContext from "context/cart/CartContext";
import cx from "classnames";
import { CartProductPreview } from "types";
import useGrandTotal from "features/checkout/hooks/useGrandTotal";

interface ModalProps {}

export const CheckoutModal: React.FC<ModalProps> = () => {
	const [searchParams] = useSearchParams();
	const session_id = searchParams.get("session_id");

	const { clearCart } = useContext(CartContext);

	const { data } = useCheckout({ session_id });
	const [showAllProduct, setShowAllProducts] = useState<boolean>(false);

	const items: CartProductPreview[] = data || [];

	const total = useCartTotal(items);
	const grandTotal = useGrandTotal(total);
	const ref = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		// when checkout completed we returned an id
		// so, check if an id has been returned and if true clear cart else do nothing
		if (session_id) {
			clearCart();
		}
		!ref.current?.open && ref.current?.showModal();
	}, []);

	return (
		<Modal className="checkout-modal flow" ref={ref}>
			<img src={checkIcon} alt="" />
			<h2 className="checkout-modal__title fw-bold uppercase">
				Thank you <br /> for your order
			</h2>
			<p className="checkout-modal__confirmation-msg fs-body-content opacity-50 ">
				You will receive an email confirmation shortly.
			</p>
			{data && (
				<div className="order-information even-columns bg-neutral-300">
					<div className="products-container">
						<div className="products grid">
							{data.map(
								(product, index) =>
									(showAllProduct || index === 0) && (
										<Row
											key={product.id}
											className="order-information__product"
											shortName={product.attributes.shortName}
											price={product.attributes.price}
											cartImage={product.attributes.cartImage}
										>
											<p
												className="fs-body-content fw-bold opacity-50"
												aria-label="quantity"
											>
												x{product.attributes.quantity}
											</p>
										</Row>
									)
							)}
						</div>

						{data.length > 1 && (
							<>
								<div className="line"></div>

								<Button
									variant="text"
									size="sm"
									className="opacity-50"
									style={{ textTransform: "none" }}
									onClick={() => setShowAllProducts(!showAllProduct)}
								>
									{showAllProduct
										? "View less"
										: ` and ${data?.length - 1} other item(s)`}
								</Button>
							</>
						)}
					</div>
					<div
						className={cx(
							"grand-total flex bg-primary-900 fs-body-content text-neutral-200",
							{ "grand-total--justify-end": showAllProduct }
						)}
					>
						<p className="uppercase opacity-50">Grand Total</p>
						<p className="fs-600">{formatCurrency(grandTotal)}</p>
					</div>
				</div>
			)}
			<LinkButton
				to="/"
				className="uppercase"
				onClick={() => ref?.current?.close()}
			>
				Back to Home
			</LinkButton>
		</Modal>
	);
};
