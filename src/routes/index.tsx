import { Route, Routes, useLocation } from "react-router-dom";

import { MainLayout } from "features/layout/MainLayout";
import { AnimatePresence } from "framer-motion";
import { lazyImport } from "utils/lazyImport";

const { Home } = lazyImport(() => import("pages/Home"), "Home");
const { CheckoutModal } = lazyImport(
	() => import("features/checkout"),
	"CheckoutModal"
);
const { Checkout } = lazyImport(() => import("pages/Checkout"), "Checkout");
const { ProductDetail } = lazyImport(
	() => import("pages/ProductDetail"),
	"ProductDetail"
);
const { Category } = lazyImport(() => import("pages/[Category]"), "Category");

export const AppRoutes = () => {
	const location = useLocation();
	return (
		<MainLayout>
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route index element={<Home />} />
					<Route path="/:category" element={<Category />} />
					<Route path="/:category/:slug" element={<ProductDetail />} />
					<Route path="/checkout" element={<Checkout />}>
						<Route path=":success" element={<CheckoutModal />} />
					</Route>
				</Routes>
			</AnimatePresence>
		</MainLayout>
	);
};
