import { IProduct } from "types";

export type ProductPreview = Pick<
	IProduct["attributes"],
	"image" | "name" | "new" | "description"
>;
