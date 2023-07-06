export type Order = {
	attributes: {
		products: { id: number; quantity: number }[];
		username: string;
		stripeSessionId: string;
	};
	id: number;
};
