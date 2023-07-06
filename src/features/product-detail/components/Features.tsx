import React from "react";

interface featuresProps {
	features: string;
	includedItems: { quantity: number; item: string }[];
}

const features: React.FC<featuresProps> = ({ features, includedItems }) => {
	const featureArray = features.split("\\n\\n");
	return (
		<div className="features flow">
			<div className="grid">
				<h3 className="fs-tertiary-heading fw-bold uppercase">features</h3>
				<div className="fs-body-content opacity-50">
					{featureArray.map((feature, i: number) => (
						<p key={i}>{feature}</p>
					))}
				</div>
			</div>
			<div className="even-columns">
				<h3 className="fs-tertiary-heading fw-bold uppercase">In the box</h3>
				<ul className="features__list" role="list" arial-label="included items">
					{includedItems.map((item) => (
						<li
							className="features__item fs-body-content"
							key={item.item}
							arial-label={`${item.quantity} ${item.item}`}
						>
							<span className="text-accent-700">{item.quantity}x</span>
							<span className="opacity-50">{item.item}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
export default features;
