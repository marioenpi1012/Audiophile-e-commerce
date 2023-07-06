import { Meta, StoryObj } from "@storybook/react";

import { Link, LinkProps } from "./Link";

const meta: Meta<LinkProps> = {
	title: "Features/UI/Link",
	component: Link,
	parameters: {
		controls: { expanded: true },
	},
	args: {
		style: {
			backgroundColor: "black",
		},
	},
};

export default meta;

type Story = StoryObj<LinkProps>;

export const Default: Story = {
	args: {
		to: "/",
		children: "Home",
	},
};
