import { Head } from "features/head";
import { ReactNode } from "react";

interface ContentLayoutProps {
	title: string;
	children: ReactNode;
}

export const ContentLayout = ({ title, children }: ContentLayoutProps) => {
	return (
		<>
			<Head title={title} />
			{children}
		</>
	);
};
