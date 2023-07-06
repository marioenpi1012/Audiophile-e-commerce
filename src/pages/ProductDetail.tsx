import React from "react";
import { useParams } from "react-router-dom";

import { ProductDetail as Product } from "features/product-detail";
import { useProduct } from "features/product-detail/api/getProduct";
import { Cta } from "features/ui";
import { ContentLayout } from "features/layout/ContentLayout";
import { Transition } from "features/page-transition";

interface productDetailProps {}

export const ProductDetail: React.FC<productDetailProps> = ({}) => {
	const { slug } = useParams();

	const { data, isLoading, error } = useProduct(slug);

	const title: string = data?.attributes.name || "";
	return (
		<Transition>
			<ContentLayout title={title}>
				<div className="product-detail flow">
					{isLoading && <div>loading...</div>}
					{error && <div>error.message</div>}
					{data && <Product data={data} />}
					<Cta />
				</div>
			</ContentLayout>
		</Transition>
	);
};
