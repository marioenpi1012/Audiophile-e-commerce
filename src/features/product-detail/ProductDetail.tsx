import React, { useContext, useState } from "react";
import { Button, NumberInput } from "features/ui";
import { CartProductPreview, IProduct } from "types";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import { Alternatives } from "./components/alternatives";
import { useNavigate } from "react-router-dom";
import { Product } from "features/ui";
import { formatCurrency } from "utils/formatCurrency";
import CartContext from "context/cart/CartContext";

interface ProductDetailProps {
	data: IProduct;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ data }) => {
	const { addToCart } = useContext(CartContext);
	const navigate = useNavigate();

	const [qty, setQty] = useState(1);

	const handleIncreaseQty = () => {
		setQty(qty + 1);
	};

	const handleDecreaseQty = () => {
		if (qty <= 1) return;
		setQty((qty) => qty - 1);
	};

	const handleAddToCart = () => {
		if (!data) {
			return;
		}
		const product: CartProductPreview = {
			attributes: {
				cartImage: data.attributes.cartImage,
				shortName: data.attributes.shortName,
				price: data.attributes.price,
				quantity: qty,
			},
			id: data.id,
		};
		addToCart(product);
	};
	return (
		<div className="product-detail  body-padding-inline flow">
			<Button
				onClick={() => navigate(-1)}
				className="fs-body-content capitalize opacity-50 padding-0"
				variant="text"
			>
				Go Back
			</Button>

			<Product
				image={data.attributes.image}
				name={data.attributes.name}
				new={data.attributes.new}
				description={data.attributes.description}
				className="product-detail__product "
			>
				<p className="product-detail__price fw-bold">
					{formatCurrency(data.attributes.price)}
				</p>
				<div className="flex">
					<NumberInput
						amount={qty}
						onDecrease={handleDecreaseQty}
						onIncrease={handleIncreaseQty}
					/>
					<Button onClick={handleAddToCart}>Add to Cart</Button>
				</div>
			</Product>
			<Features
				features={data.attributes.features}
				includedItems={data.attributes.includedItems}
			/>
			<Gallery
				first={data.attributes.gallery.first}
				second={data.attributes.gallery.second}
				third={data.attributes.gallery.third}
			/>
			<Alternatives others={data.attributes.others} />
		</div>
	);
};
