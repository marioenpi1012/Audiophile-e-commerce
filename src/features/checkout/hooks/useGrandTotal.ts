import { VAT_PERCENT, SHIPPING } from "../constants";

const useGrandTotal = (total: number) => {
	const vat = total * VAT_PERCENT;

	return total + vat + SHIPPING;
};

export default useGrandTotal;
