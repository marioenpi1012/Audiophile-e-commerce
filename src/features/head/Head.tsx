import { Helmet } from "react-helmet-async";

interface HeadProps {
	title?: string;
	description?: string;
}

export const Head = ({ title = "", description = "" }: HeadProps = {}) => {
	return (
		<Helmet
			title={title ? `Audiophile | ${title}` : undefined}
			defaultTitle="Audiophile"
		>
			<meta name="description" content={description} />
		</Helmet>
	);
};
