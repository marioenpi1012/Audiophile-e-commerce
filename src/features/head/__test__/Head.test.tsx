import { render, waitFor } from "@testing-library/react";

import { Head } from "../Head";
import { AppProvider } from "providers/app";
import { FunctionComponent } from "react";

test("Should add proper page title and meta description", async () => {
	const title = "Hello World";
	const titlePrefix = "Audiophile | ";
	const description = "Hello from description";

	render(<Head title={title} description={description} />, {
		wrapper: AppProvider as FunctionComponent<unknown>,
	});

	await waitFor(() => {
		expect(document.title).toEqual(titlePrefix + title);
	});

	const metaDescription = document.querySelector("meta[name='description']");

	expect(metaDescription?.getAttribute("content")).toEqual(description);
});
