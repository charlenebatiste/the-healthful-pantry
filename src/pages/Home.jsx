import React from "react";
import About from "../components/About";
import Testimonial from "../components/Testimonial";
import HowItWorks from "../components/HowItWorks";

function Home(props) {
	return (
		<div>
			<About />
			<Testimonial />
			<HowItWorks />
		</div>
	);
}
export default Home;
