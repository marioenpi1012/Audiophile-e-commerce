import React from "react";
import { NavLink } from "react-router-dom";
import logo from "assets/shared/desktop/logo.svg";
import facebook from "assets/shared/desktop/icon-facebook.svg";
import instagram from "assets/shared/desktop/icon-instagram.svg";
import twitter from "assets/shared/desktop/icon-twitter.svg";
import primaryNavigation from "data/primaryNavigation";
import { Link } from "features/ui";

export const Footer: React.FC = () => {
	return (
		<footer className="footer body-padding-inline bg-neutral-800 text-center">
			<div className="grid">
				<img src={logo} alt="" />
				<nav>
					<ul aria-label="Footer" role="list" className="space-x-nav">
						{primaryNavigation.map((nav) => (
							<li key={nav.to}>
								<Link to={nav.to}>{nav.name}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>

			<div className="footer__content fs-body-content text-neutral-200">
				<p className="fs-body-content text-neutral-200 opacity-50">
					Audiophile is an all in one stop to fullfil your audio needs. We're a
					small team of music lovers and sound specialist who are devoted to
					helping you get the most out of personal audio. Come and visit our
					demo facility - were open 7 days a week.
				</p>
				<div className="even-columns">
					<p className="opacity-50">Copyright 2021. All Rights Reserved</p>
					<ul role="list" arial-label="Social links" className="space-x-4">
						<li>
							<a href="" arial-label="facebook">
								<img src={facebook} alt="" />
							</a>
						</li>
						<li>
							<a href="" arial-label="twitter">
								<img src={twitter} alt="" />
							</a>
						</li>
						<li>
							<a href="" arial-label="instagram">
								<img src={instagram} alt="" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};
