import React from "react";
import { LinkButton, Product } from "features/ui";
import { useLocation } from "react-router-dom";
import { useCategory } from "features/category/api/getCategory";

interface ProductProps {
	category: string;
}

export const Products: React.FC<ProductProps> = ({ category }) => {
	const { isLoading, error, products: data } = useCategory(category);

	const { pathname } = useLocation();

	return (
		<div className="products body-padding-inline flow ">
			{isLoading && <div>loading...</div>}
			{error && <div> Ooops, an error ocurred.</div>}
			{/* New products should be display first */}
			{data &&
				data.map(
					(product) =>
						product.attributes.new && (
							<Product
								key={product.id}
								image={product.attributes.categoryImage}
								description={product.attributes.description}
								new={product.attributes.new}
								name={product.attributes.name}
							>
								<LinkButton to={`${pathname}/${product.attributes.slug}`}>
									See Product
								</LinkButton>
							</Product>
						)
				)}
			{data &&
				data.map(
					(product) =>
						!product.attributes.new && (
							<Product
								key={product.id}
								image={product.attributes.categoryImage}
								description={product.attributes.description}
								new={product.attributes.new}
								name={product.attributes.name}
							>
								<LinkButton to={`${pathname}/${product.attributes.slug}`}>
									See Product
								</LinkButton>
							</Product>
						)
				)}
		</div>
	);
};
