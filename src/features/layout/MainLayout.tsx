import { Nav, Footer } from "features/ui";
import { ScrollTop } from "features/scroll-top";
import { CartModal } from "features/cart-modal";
import { ReactNode } from "react";

interface MainLayoutProps {
	children: ReactNode;
}
export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div style={{ overflow: "hidden", height: "100%" }}>
			<Nav />
			<ScrollTop />
			<CartModal />
			<main>{children}</main>
			<Footer />
		</div>
	);
};
