import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "features/ui";

import { Form } from "../Form";
import { Input } from "../Input";

const defaultValues = {
	title: "Hello from test",
};

test("should render and submit a basic Form Component", async () => {
	const onSubmit = jest.fn();

	render(
		<Form onSubmit={onSubmit} defaultValues={{ title: "" }}>
			<Input<typeof defaultValues> name="title" id="title" label="Title" />
			<Button name="submit" type="submit">
				Submit
			</Button>
		</Form>
	);

	await act(async () => {
		userEvent.type(screen.getByLabelText(/title/i), defaultValues.title);
		userEvent.click(screen.getByRole("button", { name: /submit/i }));
	});

	await waitFor(() =>
		expect(onSubmit).toHaveBeenCalledWith(
			{ title: defaultValues.title },
			expect.anything()
		)
	);
});

test("should fail submission if validation fails", async () => {
	const onSubmit = jest.fn();

	render(
		<Form onSubmit={onSubmit} defaultValues={{ title: "" }}>
			<Input<typeof defaultValues>
				name="title"
				id="title"
				label="Title"
				required
				requiredMessage="required"
			/>
			<Button name="submit" type="submit">
				Submit
			</Button>
		</Form>
	);

	await act(async () => {
		userEvent.click(screen.getByRole("button", { name: /submit/i }));
	});
	await screen.findByRole(/alert/i, { name: /required/i });

	await waitFor(() => expect(onSubmit).not.toHaveBeenCalled());
});
