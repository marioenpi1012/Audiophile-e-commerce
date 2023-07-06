import { LinkButton, Product } from "features/ui";
import { useHero } from "./api/getHero";

export const Hero = () => {
	const { data, isLoading, error } = useHero();

	return (
		<>
			<section className="Hero__loadsection">
				{isLoading && <p className="loading h-full w-full">Loading...</p>}
				{error && (
					<p role="alert" className="flex errored">
						Ooops, an error ocurred.
					</p>
				)}
			</section>

			{!isLoading && data && (
				<section className="Hero ">
					<div className="container">
						<Product
							new={data.attributes.new}
							name={data.attributes.name}
							description={data.attributes.description}
							image={data.attributes.image}
							className="Hero__product"
						>
							<LinkButton
								to="/headphones/xx99-mark-two-headphones"
								className="Hero__button"
							>
								See Product
							</LinkButton>
						</Product>
					</div>
				</section>
			)}
		</>
	);
};
