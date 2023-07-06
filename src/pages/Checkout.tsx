import { Summary } from "features/checkout";
import React from "react";
import { Button } from "features/ui";
import { Outlet, useNavigate } from "react-router-dom";
import { CheckoutForm } from "features/checkout";
import { ContentLayout } from "features/layout/ContentLayout";
import { Transition } from "features/page-transition";

interface CheckoutProps {}

export const Checkout: React.FC<CheckoutProps> = () => {
	const navigate = useNavigate();

	return (
		<Transition>
			<ContentLayout title="Checkout">
				<div className="checkout flow bg-accent-100 body-padding-inline">
					<Button
						onClick={() => navigate(-1)}
						variant="text"
						className="fs-body-content capitalize opacity-50 padding-0"
					>
						Go Back
					</Button>
					<section className="grid">
						<CheckoutForm className="checkout__form bg-neutral-200" />
						<Summary className="checkout__summary bg-neutral-200" />
					</section>
				</div>
				<Outlet />
			</ContentLayout>
		</Transition>
	);
};
