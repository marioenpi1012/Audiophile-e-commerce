import React, { PropsWithChildren } from "react";
import cx from "classnames";
import { type } from "os";

export interface ButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	variant?: "primary" | "secondary" | "text" | "link" | "danger";
	size?: "sm" | "md";
}

export const Button: React.FC<ButtonProps> = (
	props: PropsWithChildren<ButtonProps>
) => {
	const {
		variant = "primary",
		className,
		children,
		size = "md",
		disabled,
		...rest
	} = props;

	return (
		<button
			className={cx(
				`Button fs-button uppercase Button--${variant} Button--${size}`,
				className
			)}
			disabled={disabled}
			{...rest}
		>
			{children}
		</button>
	);
};
