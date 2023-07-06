import React from "react";
import { Notification } from "./Notification";
import { useNotification } from "stores/notification";

interface NotificationsProps {}

export const Notifications: React.FC<NotificationsProps> = () => {
	const { notifications, dismissNotification } = useNotification();
	return (
		<div className="notifications flex">
			{notifications.map((notification) => (
				<Notification
					key={notification.id}
					notification={notification}
					onDismiss={dismissNotification}
				/>
			))}
		</div>
	);
};
