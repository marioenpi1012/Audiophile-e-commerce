import { Meta, StoryObj } from "@storybook/react";

import { Image, ImageProps } from "./Image";

const meta: Meta<ImageProps> = {
	title: "Features/UI/Image",
	component: Image,
	parameters: {
		controls: { expanded: true },
	},
	args: {
		style: {
			width: "250px",
		},
	},
};

export default meta;

type Story = StoryObj<ImageProps>;

export const Default: Story = {
	args: {
		mobile: "/uploads/image_gallery_2_6729db27b6.jpg",
		tablet: "/uploads/image_gallery_2_30ff162a30.jpg",
		desktop: "/uploads/image_gallery_2_30ff162a30.jpg",
		alt: "",
	},
};

export const Mobile: Story = {
	args: {
		mobile: "/uploads/image_gallery_2_6729db27b6.jpg",
	},
};

export const Fallback: Story = {
	args: {
		mobile:
			"https://images.pexels.com/photos/4927787/pexels-photo-4927787.jpeg",
	},
};
