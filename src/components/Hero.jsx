import React from "react";
import "./css/Hero.css";

const Hero = () => {
	return (
		<div className="jumbotron">
			<div className="container-fluid">
				<div className="row">
					<h1 className="hero__header mx-5">
						Health, made tasty.
					</h1>
				</div>
				<div className="row">
					<p className="col-sm-6 hero__content mx-5">
						Welcome to Healthful
						Pantry and start your
						journey to health freedom
						today!
					</p>
				</div>
				<p className="lead mx-5">
					<a
						className="btn btn-primary btn-lg"
						href="/search"
						role="button"
					>
						Get Started!
					</a>
				</p>
			</div>
		</div>
	);
};

export default Hero;
