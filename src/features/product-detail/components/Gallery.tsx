import React from "react";
import { Image } from "features/ui";
import { INestedImages } from "types";
import { API_URL } from "config";

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
					mobile={`${API_URL}${first.mobile.data.attributes.url}`}
					tablet={`${API_URL}${first.tablet.data.attributes.url}`}
					desktop={`${API_URL}${first.desktop.data.attributes.url}`}
				/>
				<Image
					mobile={`${API_URL}${second.mobile.data.attributes.url}`}
					tablet={`${API_URL}${second.tablet.data.attributes.url}`}
					desktop={`${API_URL}${second.desktop.data.attributes.url}`}
				/>
			</div>
			<Image
				mobile={`${API_URL}${third.mobile.data.attributes.url}`}
				tablet={`${API_URL}${third.tablet.data.attributes.url}`}
				desktop={`${API_URL}${third.desktop.data.attributes.url}`}
			/>
		</div>
	);
};
export default Gallery;
