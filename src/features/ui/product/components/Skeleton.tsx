import clx from "classnames";

export const Skeleton = ({ className }: { className?: string }) => {
	return (
		<div className={clx("product text-center", className)}>
			<div className="skeleton skeleton__image"></div>
			<div className="product__content flow extra-body-padding-inline">
				<div className="product__title w-full">
					<div className="skeleton skeleton__text"></div>
					<div className="skeleton skeleton__text"></div>
				</div>
				<div className="product__description w-full">
					<div className="skeleton skeleton__text"></div>
					<div className="skeleton skeleton__text"></div>
					<div className="skeleton skeleton__text"></div>
				</div>
				<div className="skeleton skeleton__button"></div>
			</div>
		</div>
	);
};
