import React from "react";
import cx from "classnames";

interface DescriptionProps {
	description: string;
	className?: string;
}

export const Description: React.FC<DescriptionProps> = ({
	description,
	className,
}) => {
	return <p className={cx("card__description", className)}>{description}</p>;
};
