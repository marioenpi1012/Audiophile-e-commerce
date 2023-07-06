import React from "react";
import { formatCurrency } from "utils/formatCurrency";
import cx from "classnames";
interface ItemProps {
	name: string;
	amount: number;
	className?: string;
}

export const Item: React.FC<ItemProps> = ({ name, amount, className }) => {
	return (
		<div
			className={cx(
				"flex justify-between fs-body-content uppercase",
				className
			)}
		>
			<p className="opacity-50">{name}</p>
			<p className="fs-600 fw-bold">{formatCurrency(amount)}</p>
		</div>
	);
};
