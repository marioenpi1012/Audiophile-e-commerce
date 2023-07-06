import React from "react";
import cx from "classnames";

interface HeadingProps {
	heading: string;
	className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ heading, className }) => {
	return (
		<h2 className={cx("card__heading uppercase fw-bold", className)}>
			{heading}
		</h2>
	);
};
