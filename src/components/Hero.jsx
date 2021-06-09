import React from "react";
import "./Hero.css";

const Hero = () => {
	return (
		<div className="jumbotron">
			<div className="container-md">
				<h1 className="display-4">
					Health, made tasty.{" "}
				</h1>
				<p className="lead">
					Welcome to Healthful Pantry.
					Start your journey to health
					freedom today!
				</p>

				<p>
					Eat your way back to health
					and fight back from chronic
					illness and disease.{" "}
				</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
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
