import React from "react";
import cx from "classnames";
import { useFormContext } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	requiredMessage?: string;
	pattern?: RegExp | any;
	patternMessage?: string;
}

export const Input = <Model extends Record<string, any>>({
	id,
	label,
	className,
	name,
	required,
	requiredMessage,
	pattern,
	patternMessage,
	...restProps
}: InputProps & {
	name: keyof Model;
}) => {
	const {
		register,
		formState: { isSubmitting, errors },
	} = useFormContext();
	return (
		<label
			htmlFor={id}
			className={cx("input-wrapper text-primary-900 fw-bold", className)}
		>
			<div className="flex fs-form-label">
				<span
					className={cx({
						"text-error": errors[name as string],
					})}
				>
					{label}
				</span>
				{errors[name as string] && (
					<p
						className=" text-error push-right fw-normal"
						role="alert"
						aria-label={errors[name as string]?.message?.toString()}
					>
						{errors[name as string]?.message?.toString()}
					</p>
				)}
			</div>
			<input
				className="input-wrapper__input"
				id={id}
				aria-invalid={errors[name as string] ? true : false}
				disabled={isSubmitting}
				{...register(name, {
					required: requiredMessage ? requiredMessage : "Field cannot be empty",
					pattern: {
						value: pattern,
						message: patternMessage ? patternMessage : "Wrong format",
					},
				})}
				{...restProps}
			/>
		</label>
	);
};
