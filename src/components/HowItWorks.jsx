import React from "react";
import HowItWorks from "./css/HowItWorks.css";
<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Montserrat:wght@100&display=swap');
</style>

const Steps = () => {
	return (
		<div className="step_section">
			<h1 className="text-center hIW">
				How It Works
			</h1>
			<div className="container-fluid contHiw">
				<div className="row justify-content-center ">
					<div className="col-3">
						<div class="card hiwCard">
							<div class="card-body text-center">
								<h5 class="card-title">
									Step One
								</h5>
								<p class="card-text">
									Search for recipes by diet or condition.
								</p>
							</div>
						</div>
					</div>
					<div className="col-3">
						<div class="card hiwCard">
							<div class="card-body text-center">
								<h5 class="card-title">
									Step Two
								</h5>
								<p class="card-text">
									Like the recipe? Save it to your favorites.
								</p>
							</div>
						</div>
					</div>
					<div className="col-3">
						<div class="card hiwCard">
							<div class="card-body text-center">
								<h5 class="card-title">
									Step Three
								</h5>
								<p class="card-text">
									Print your shopping list and eat your way to health.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Steps;
