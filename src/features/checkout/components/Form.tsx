import React, { useContext } from "react";
import cx from "classnames";
import { Form, Input } from "features/form";
import { loadStripe } from "@stripe/stripe-js";
import CartContext from "context/cart/CartContext";
import { axios } from "lib/axios";

interface FormProps {
	className?: string;
}

export type Inputs = {
	name: string;
	email: string;
	phoneNumber: string;
	address: string;
	zipCode: string;
	city: string;
	country: string;
};

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`);

export const CheckoutForm: React.FC<FormProps> = ({ className }) => {
	const { cartItems } = useContext(CartContext);

	const makePayment = async (data: Inputs) => {
		const stripe = await stripePromise;
		const requestBody = {
			username: data.name,
			email: data.email,
			products: cartItems.map(({ id, attributes: { quantity } }) => ({
				id,
				quantity,
			})),
		};

		axios
			.post("/api/orders", requestBody)
			.then(async (response) => {
				stripe?.redirectToCheckout({
					sessionId: response.data.id,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const onSubmit = async (data: Inputs) => {
		makePayment(data);
	};

	const defaultValues = {
		name: "",
		email: "",
		phoneNumber: "",
		address: "",
		zipCode: "",
		city: "",
		country: "",
	};
	const pattern =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return (
		// the id is used to submit the form from the outside
		<Form
			id="checkout-form"
			className={cx("form", className)}
			onSubmit={onSubmit}
			defaultValues={defaultValues}
		>
			<h1 className="fs-secondary-heading uppercase fw-bold ">Checkout</h1>
			<fieldset>
				<legend className="uppercase fw-bold text-accent-700">
					Billing Details
				</legend>
				<div className="form__group">
					<Input<Inputs>
						id="name"
						name="name"
						placeholder="Alexei Ward"
						type="text"
						label="Name"
						required
						requiredMessage="Field cannot be empty"
					/>
					<Input<Inputs>
						id="email"
						placeholder="alexei@mail.com"
						type="email"
						label="Email Address"
						name="email"
						required
						pattern={pattern}
					/>
					<Input<Inputs>
						id="phoneNumber"
						placeholder="+1 202-555-0136"
						type="text"
						label="Phone Number"
						name="phoneNumber"
					/>
				</div>
			</fieldset>
			<fieldset>
				<legend className="uppercase fw-bold text-accent-700">
					Shipping info
				</legend>
				<div className="form__group">
					<Input<Inputs>
						type="text"
						id="address"
						label="Address"
						placeholder="1137 Williams Avenue"
						name="address"
						className="form__group--full-column"
					/>
					<Input<Inputs>
						type="number"
						id="zipCode"
						label="ZIP Code"
						placeholder="10001"
						name="zipCode"
					/>
					<Input<Inputs>
						type="text"
						id="city"
						label="City"
						placeholder="New York"
						name="city"
					/>
					<Input<Inputs>
						type="text"
						id="country"
						label="Country"
						placeholder="United States"
						name="country"
					/>
				</div>
			</fieldset>
		</Form>
	);
};
