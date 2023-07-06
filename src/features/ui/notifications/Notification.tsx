import React, { useEffect } from "react";
import { Button } from "features/ui";
import cx from "classnames";
import {
	FaInfoCircle,
	FaRegCheckCircle,
	FaExclamationCircle,
	FaExclamationTriangle,
	FaTimes,
} from "react-icons/fa";

const icons = {
	info: <FaInfoCircle />,
	success: <FaRegCheckCircle />,
	warning: <FaExclamationCircle />,
	error: <FaExclamationTriangle />,
};

export interface NotificationProps {
	notification: {
		id: string;
		type: keyof typeof icons;
		title: string;
		message?: string;
	};
	onDismiss: (id: string) => void;
}

export const Notification: React.FC<NotificationProps> = ({
	notification: { id, type, title, message },
	onDismiss,
}) => {
	const autoDismissNotification = () => {
		onDismiss(id);
	};
	// Auto dismiss after 3 seconds
	setTimeout(autoDismissNotification, 3000);
	return (
		<div
			role="alert"
			aria-label={title}
			className="notification flex w-full capitalize bg-neutral-200 "
		>
			<div className={cx(`notification__icon notification__icon--${type}`)}>
				{icons[type]}
			</div>
			<p className="fs-body-content text-primary-900">{title}</p>
			<Button
				variant="text"
				size="sm"
				className="push-right opacity-50 padding-0"
				onClick={() => onDismiss(id)}
			>
				<FaTimes className="notification__icon notification__icon--close" />
			</Button>
		</div>
	);
};
