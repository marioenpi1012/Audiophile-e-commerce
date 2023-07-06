import React, { useState } from "react";
import { Button } from "features/ui";

interface NumberInputProps {
	amount: number;
	// onAmountChange: (value: React.SetStateAction<number>) => void;
	onIncrease: () => void;
	onDecrease: () => void;
}

export const NumberInput: React.FC<NumberInputProps> = ({
	amount,
	// onAmountChange,
	onIncrease,
	onDecrease,
}) => {
	const handleIncrease = () => {
		// onAmountChange((amount) => amount + 1);
	};
	const handleDecrease = () => {
		if (amount <= 1) return;
		// onAmountChange((amount) => amount - 1);
	};
	return (
		<div className="inline-flex bg-accent-400">
			<Button
				className="border-none"
				color="transparent"
				onClick={onDecrease}
				size="sm"
				variant="text"
			>
				-
			</Button>
			<span>{amount}</span>
			<Button
				className="border-none"
				color="transparent"
				onClick={onIncrease}
				size="sm"
				variant="text"
			>
				+
			</Button>
		</div>
	);
};
