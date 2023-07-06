import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

export interface LinkProps extends NavLinkProps {}
export const Link: React.FC<LinkProps> = ({ children, ...props }) => {
	return (
		<NavLink
			className="fs-nav-link text-neutral-200 uppercase fw-bold"
			{...props}
		>
			{children}
		</NavLink>
	);
};
