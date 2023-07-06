import { Meta, StoryObj } from "@storybook/react";

import { Notification, NotificationProps } from "./Notification";

const meta: Meta<NotificationProps> = {
	title: "Features/UI/Notification",
	component: Notification,
	parameters: {
		controls: {
			expanded: true,
		},
	},
};

export default meta;

type Story = StoryObj<NotificationProps>;

export const Info: Story = {
	args: {
		notification: {
			id: "1",
			type: "info",
			title: "This is a info notification",
		},
		onDismiss: (id) => alert(`Dismissing Notification with id: ${id}`),
	},
};
export const Success: Story = {
	args: {
		notification: {
			id: "1",
			type: "success",
			title: "This is a success notification",
		},
		onDismiss: (id) => alert(`Dismissing Notification with id: ${id}`),
	},
};
export const Warning: Story = {
	args: {
		notification: {
			id: "1",
			type: "warning",
			title: "This is a warning notification",
		},
		onDismiss: (id) => alert(`Dismissing Notification with id: ${id}`),
	},
};
export const Error: Story = {
	args: {
		notification: {
			id: "1",
			type: "error",
			title: "This is a error notification",
		},
		onDismiss: (id) => alert(`Dismissing Notification with id: ${id}`),
	},
};
