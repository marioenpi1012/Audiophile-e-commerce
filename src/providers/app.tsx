import React from "react";
import { Button, Notifications } from "features/ui";
import { QueryClientProvider } from "react-query";
import { queryClient } from "lib/react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import CartState from "context/cart/CartState";

interface AppProviderProps {
	children: React.ReactNode;
}

const ErrorFallback = () => {
	return (
		<div
			className="flex"
			style={{
				height: "100vh",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<h1>Ooops, something went wrong. Please try again!</h1>
			<Button onClick={() => window.location.assign(window.location.origin)}>
				Refresh
			</Button>
		</div>
	);
};

export const AppProvider = ({ children }: AppProviderProps) => {
	return (
		<React.Suspense fallback={<div>loading...</div>}>
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<HelmetProvider>
					<QueryClientProvider client={queryClient}>
						{process.env.NODE_ENV !== "test" && <ReactQueryDevtools />}
						<Notifications />
						<CartState>
							<Router>{children}</Router>
						</CartState>
					</QueryClientProvider>
				</HelmetProvider>
			</ErrorBoundary>
		</React.Suspense>
	);
};
