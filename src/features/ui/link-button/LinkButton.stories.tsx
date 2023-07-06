import { Meta, StoryObj } from "@storybook/react";

import { LinkButton, LinkButtonProps } from "./LinkButton";
import arrowIcon from "assets/shared/desktop/icon-arrow-right.svg";

const meta: Meta<LinkButtonProps> = {
	title: "Features/UI/LinkButton",
	component: LinkButton,
	parameters: {
		controls: { expanded: true },
	},
};

export default meta;

type Story = StoryObj<LinkButtonProps>;

export const Primary: Story = {
	args: {
		children: "See Product",
		to: "/product-name",
		variant: "primary",
	},
};

const image = {
	src: arrowIcon,
	alt: "",
};

export const Text: Story = {
	render: ({ to, ...args }) => (
		<LinkButton to={to} {...args}>
			<span className="opacity-50">Shop</span>
			<img src={image.src} alt={image.alt} />
		</LinkButton>
	),
	args: {
		to: "/shop",
		variant: "text",
		size: "md",
	},
};
