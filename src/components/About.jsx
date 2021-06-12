import React from "react";
import "./css/About.css";
<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Montserrat:wght@100&display=swap');
</style>

const About = () => {
	return (
		<div className="about__wrapper p-2">
			<h1 className="about__header p-3">
				Our Mission
			</h1>
			<div className="about__content mx-5 ">
				<p className="about__text text-start">
				We believe everyone should have access to the resources and education to take back their lives.  Healthful Pantry gives you back the power to control your health on your own terms - skipping the need to see a nutritionist or dietician.  Our goal is to save you money, time, and most importantly your health.  
				</p>
			</div>
		</div>
	);
};

export default About;
