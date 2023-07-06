import { Meta, StoryObj } from "@storybook/react";

import { Button } from "features/ui";

import { Form } from "./Form";
import { Input } from "./Input";

type Inputs = {
	test: string;
};

const MyForm = () => {
	const onSubmit = (data: Inputs) => {
		alert(JSON.stringify(data));
		console.log(data);
	};

	return (
		<Form onSubmit={onSubmit}>
			<h1 className="fs-secondary-heading uppercase fw-bold">Test Form</h1>
			<Input<Inputs>
				id="test"
				name="test"
				placeholder="Test Form"
				type="text"
				label="Test Form"
				required
			/>
			<Button type="submit">Submit</Button>
		</Form>
	);
};

const meta: Meta = {
	title: "Features/Form",
	component: MyForm,
	parameters: {
		controls: { expanded: true },
	},
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
