export const formatCurrency = (amount: number): string => {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
	});

	return formatter.format(amount);
};
