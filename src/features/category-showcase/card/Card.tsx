import React, { ReactNode } from "react";
import cx from "classnames";
import { Image } from "features/ui";
import { Heading } from "./heading";
import { Description } from "./description";
interface CardProps {
	children: ReactNode;
	className?: string;
}

export const Card = ({ children, className }: CardProps) => {
	return <div className={cx("card", className)}>{children}</div>;
};

Card.Image = Image;
Card.Heading = Heading;
Card.Description = Description;
