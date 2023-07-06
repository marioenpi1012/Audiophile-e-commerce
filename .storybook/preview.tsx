import React from "react";
import "../src/sass/style.scss";
import type { Preview } from "@storybook/react";
import { AppProvider } from "../src/providers/app";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [
		(Story) => (
			<AppProvider>
				{/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
				<Story />
			</AppProvider>
		),
	],
};

export default preview;
