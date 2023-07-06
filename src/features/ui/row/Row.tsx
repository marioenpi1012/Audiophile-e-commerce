import React, { ReactNode } from "react";
import { CartProductPreview } from "types";
import { Image } from "features/ui/image";
import { formatCurrency } from "utils/formatCurrency";
import cx from "classnames";
import { API_URL } from "config";

type props = Pick<
	CartProductPreview["attributes"],
	"shortName" | "price" | "cartImage"
>;

interface RowProps extends props {
	children?: ReactNode;
	className?: string;
}

export const Row: React.FC<RowProps> = ({
	cartImage,
	shortName,
	price,
	children,
	className,
}) => {
	return (
		<article className={cx("Row flex", className)}>
			<Image
				mobile={`${API_URL}${cartImage.data.attributes.url}`}
				className="Row__image"
				alt=""
			/>
			<div className="flex">
				<div className="">
					<h3 className="fs-body-content fw-bold">{shortName}</h3>
					<p className="fs-body-content fs-300 fw-bold opacity-50">
						{formatCurrency(price)}
					</p>
				</div>
				{children}
			</div>
		</article>
	);
};
