import { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
	title: "Features/UI/Button",
	component: Button,
	parameters: {
		controls: { expanded: true },
	},
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
	args: {
		variant: "primary",
		children: "See Product",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "See Product",
	},
};
export const Text: Story = {
	args: {
		variant: "text",
		children: "Go Back",
		size: "sm",
		className: "capitalize opacity-50",
	},
};
export const Link: Story = {
	args: {
		variant: "link",
		children: "Remove All",
		size: "sm",
		className: "capitalize opacity-50",
	},
};
