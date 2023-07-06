import React from "react";
import cx from "classnames";

export interface ImageProps
	extends React.DetailedHTMLProps<
		React.ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	> {
	mobile: string;
	tablet?: string;
	desktop?: string;
	className?: string;
}

export const Image: React.FC<ImageProps> = ({
	mobile,
	tablet,
	desktop,
	className,
	...rest
}) => {
	const serverUrl = process.env.REACT_APP_API_URL;

	return (
		<picture>
			<source srcSet={desktop} media="(min-width:63em)" />
			<source srcSet={tablet} media="(min-width:48em)" />
			<img
				className={cx("w-full h-full", className)}
				loading="lazy"
				src={mobile}
				{...rest}
			/>
		</picture>
	);
};

export default Image;
