import React from "react";

import "./css/About.css";

const About = () => {
	return (
		<div className="about__wrapper p-2">
			<h1 className="about__header p-3">
				Our Mission
			</h1>
			<div className="about__content mx-5 ">
				<p className="about__text text-start">
					Lorem ipsum dolor sit amet
					consectetur adipisicing elit.
					Tempore dolorum excepturi,
					pariatur dolore fuga
					perferendis mollitia deserunt
					a voluptas assumenda!
					Consequatur beatae qui dolorem
					tempora possimus accusantium,
					fugit eius quidem?
				</p>
			</div>
		</div>
	);
};

export default About;
