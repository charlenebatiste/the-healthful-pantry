import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import HowItWorks from "../components/HowItWorks";

const Home = (props) => {
	return (
		<div>
			<Hero />
			<About />
			<Testimonial />
			<HowItWorks />
		</div>
	);
};
export default Home;
