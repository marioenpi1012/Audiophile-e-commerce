import { ReactNode } from "react";
import cx from "classnames";
import { ProductPreview } from "./types";
import { Image } from "features/ui";

interface ProductProps extends ProductPreview {
	children?: ReactNode;
	className?: string;
}

export const Product = ({
	image,
	name,
	new: newProduct,
	description,
	children,
	className,
}: ProductProps) => {
	const { mobile, tablet, desktop } = image;

	return (
		<article className={cx("product text-center", className)}>
			<Image
				mobile={`${mobile.data.attributes.url}`}
				tablet={`${tablet.data.attributes.url}`}
				desktop={`${desktop.data.attributes.url}`}
				alt=""
			/>
			<div className="product__content flow  extra-body-padding-inline">
				{newProduct && (
					<span className="fs-overline text-accent-700 uppercase">
						new product
					</span>
				)}
				<h2 className="product__title fs-secondary-heading uppercase fw-bold">
					{name}
				</h2>
				<p className="product__description fs-body-content opacity-50">
					{description}
				</p>
				{children}
			</div>
		</article>
	);
};
