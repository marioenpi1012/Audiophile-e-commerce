import React, { useState } from "react";
import Logo from "assets/shared/desktop/logo.svg";
import HamburgerMenu from "assets/shared/tablet/icon-hamburger.svg";
import CloseMenu from "assets/shared/tablet/icon-close-menu.svg";
import Cart from "assets/shared/desktop/icon-cart.svg";
import primaryNavigation from "data/primaryNavigation";
import { Button, Link, SecondNav } from "features/ui";
import { useLocation } from "react-router-dom";
import useCartItemsCount from "hooks/useCartItemsCount";
import { useCartModal } from "stores/cartModal";
import clx from "classnames";

export const Nav: React.FC = () => {
	const itemsInCart = useCartItemsCount();
	const [navOpened, setNavOpened] = useState<boolean>(false);
	const { pathname } = useLocation();
	const category = pathname.replace("/", "");

	const showSubheading =
		category === "headphones" ||
		category === "earphones" ||
		category === "speakers";

	const { openModal } = useCartModal();

	return (
		<header className={clx("nav", { "nav--fixed": navOpened })}>
			<section className="nav__section body-padding-inline">
				<div className="nav__logo">
					<button
						className="nav__mobile-menu"
						aria-controls="primary-navigation"
						aria-expanded={navOpened ? true : false}
						onClick={() => setNavOpened(!navOpened)}
					>
						<span className="sr-only">Meu</span>
						<div arial-hidden="true">
							{navOpened ? (
								<img src={CloseMenu} alt="" />
							) : (
								<img src={HamburgerMenu} alt="" />
							)}
						</div>
					</button>
					<Link to="/">
						<img src={Logo} alt="" />
					</Link>
				</div>
				{navOpened && (
					<>
						<div className="backdrop"></div>
						<SecondNav
							aria-label="primary-navigation"
							id="primary-navigation"
							className="nav--mobile bg-neutral-200"
						/>
					</>
				)}

				<nav
					aria-label="primary-navigation"
					id="primary-navigation"
					className="nav-container"
				>
					<ul className="nav-container__links space-x-nav">
						{primaryNavigation.map((nav) => (
							<li key={nav.to}>
								<Link to={nav.to}>{nav.name}</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className="nav-cart">
					<Button
						variant="text"
						onClick={() => {
							openModal();
						}}
						className="padding-0"
					>
						<img src={Cart} alt="" />
						{itemsInCart > 0 && (
							<span className="nav-cart--items-count fs-300 text-neutral-200 bg-accent-700">
								{itemsInCart}
							</span>
						)}
					</Button>
				</div>
			</section>
			{showSubheading && (
				<section className="nav__category fs-secondary-heading fw-bold text-neutral-200 uppercase text-center">
					{category}
				</section>
			)}
		</header>
	);
};
