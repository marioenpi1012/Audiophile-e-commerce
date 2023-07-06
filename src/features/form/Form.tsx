import React, { ReactNode } from "react";
import { useForm, FormProvider } from "react-hook-form";

interface FormProps
	extends React.DetailedHTMLProps<
		React.FormHTMLAttributes<HTMLFormElement>,
		HTMLFormElement
	> {
	defaultValues?: Record<string, any>;
	children: ReactNode;
	onSubmit: (data: any) => void;
	className?: string;
}

export const Form: React.FC<FormProps> = ({
	defaultValues,
	children,
	onSubmit,
	className,
	...rest
}) => {
	const methods = useForm({ defaultValues, mode: "onChange" });
	const { handleSubmit } = methods;

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit)} className={className} {...rest}>
				{children}
			</form>
		</FormProvider>
	);
};
