import React, {
	ForwardRefExoticComponent,
	RefAttributes,
	forwardRef,
} from "react";
import cx from "classnames";

interface ModalProps
	extends React.DetailedHTMLProps<
		React.DialogHTMLAttributes<HTMLDialogElement>,
		HTMLDialogElement
	> {}

export const Modal: ForwardRefExoticComponent<
	Omit<ModalProps, "ref"> & RefAttributes<HTMLDialogElement>
> = forwardRef<HTMLDialogElement, ModalProps>(
	({ children, className, ...rest }, ref) => {
		return (
			<dialog className={cx("modal", className)} ref={ref} {...rest}>
				{children}
			</dialog>
		);
	}
);
