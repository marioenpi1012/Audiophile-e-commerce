import { act, renderHook } from "@testing-library/react";
import { useNotification, Notification } from "../notification";

test("should add and remove notifications", () => {
	const { result } = renderHook(() => useNotification());

	expect(result.current.notifications.length).toBe(0);

	const notification: Notification = {
		id: "1",
		message: "test message",
		title: "test title",
		type: "success",
	};

	act(() => {
		result.current.addNotification(notification);
	});

	expect(result.current.notifications).toContainEqual(notification);

	act(() => {
		result.current.dismissNotification(notification.id);
	});

	expect(result.current.notifications).not.toContainEqual(notification);
});
