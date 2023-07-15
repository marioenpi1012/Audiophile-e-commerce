import React from "react";
import { Image } from "features/ui";
import { INestedImages } from "types";

interface galleryProps {
	first: INestedImages;
	second: INestedImages;
	third: INestedImages;
}

const Gallery: React.FC<galleryProps> = ({ first, second, third }) => {
	return (
		<div className="gallery">
			<div className="grid">
				<Image
					mobile={`${first.mobile.data.attributes.url}`}
					tablet={`${first.tablet.data.attributes.url}`}
					desktop={`${first.desktop.data.attributes.url}`}
				/>
				<Image
					mobile={`${second.mobile.data.attributes.url}`}
					tablet={`${second.tablet.data.attributes.url}`}
					desktop={`${second.desktop.data.attributes.url}`}
				/>
			</div>
			<Image
				mobile={`${third.mobile.data.attributes.url}`}
				tablet={`${third.tablet.data.attributes.url}`}
				desktop={`${third.desktop.data.attributes.url}`}
			/>
		</div>
	);
};
export default Gallery;
