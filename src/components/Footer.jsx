import React from "react";
import "./css/Footer.css";
import AboutUs from "../components/AboutUs";

const Footer = () => {
	return (
		<footer className="footer__wrapper p-2">
			<div className="container footer__content text-center">
				<span className="text-muted">
					@2021 Built by Amanda Posey,
					Avery Wood, Charlene Batiste,
					and Brianna Giorgi
					<AboutUs />
				</span>
			</div>
		</footer>
	);
};

export default Footer;
