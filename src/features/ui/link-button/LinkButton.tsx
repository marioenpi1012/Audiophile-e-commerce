import React from "react";
import cx from "classnames";
import { Link, LinkProps, To } from "react-router-dom";

export interface LinkButtonProps extends LinkProps {
	variant?: "primary" | "secondary" | "secondary-filled" | "text";
	size?: "sm" | "md";
	to: To;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
	className,
	children,
	to,
	variant = "primary",
	size = "md",
	...rest
}) => {
	return (
		<Link
			to={to}
			className={cx(
				`Button fs-button uppercase Button--${variant} Button--${size}`,
				className
			)}
			{...rest}
		>
			{children}
		</Link>
	);
};
