import React, { useContext } from "react";
import { Button, Row } from "features/ui";
import CartContext from "context/cart/CartContext";
import useCartTotal from "hooks/useCartTotal";
import { Item } from "./Item";
import cx from "classnames";
import useGrandTotal from "features/checkout/hooks/useGrandTotal";
import { SHIPPING, VAT_PERCENT } from "../constants";

interface SummaryProps {
	className?: string;
}

export const Summary: React.FC<SummaryProps> = ({ className }) => {
	const { cartItems } = useContext(CartContext);
	const total = useCartTotal(cartItems);
	const vat = total * VAT_PERCENT;
	const grandTotal = useGrandTotal(total);

	return (
		<div className={cx("summary", className)}>
			<h2 className="uppercase fw-bold">Summary</h2>
			<div className="summary__products grid">
				{cartItems.length < 1 && <p>No items in cart</p>}
				{cartItems.map((product) => (
					<Row
						cartImage={product.attributes.cartImage}
						shortName={product.attributes.shortName}
						price={product.attributes.price}
						key={product.id}
						className="item-start"
					>
						<span className="fs-body-content text-primary-900 opacity-50 push-right">
							x{product.attributes.quantity}
						</span>
					</Row>
				))}
			</div>
			<div className="summary__total">
				<Item name="total" amount={total} />
				<Item name="shipping" amount={SHIPPING} />
				<Item name="vat" amount={vat} />
			</div>
			<Item
				name="grand total"
				amount={grandTotal}
				className="summary__grandTotal"
			/>
			{/* The form triggers the submit of the Fom Component */}
			<Button className="w-full uppercase" form="checkout-form" type="submit">
				Continue & Pay
			</Button>
		</div>
	);
};
