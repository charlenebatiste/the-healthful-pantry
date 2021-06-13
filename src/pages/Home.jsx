import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
	return (
		<div>
			<Hero />
			<About />
			<HowItWorks />
			<Testimonial />
		</div>
	);
};
export default Home;
