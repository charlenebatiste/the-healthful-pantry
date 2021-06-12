import React from "react";
import HowItWorks from "./css/HowItWorks.css";

const Steps = () => {
	return (
		<div className="step_section">
			<h1 className="text-center">
				How It Works
			</h1>
			<div className="container">
				<div className="row justify-content-center justify-content-around">
					<div className="col-3">
						<div class="card">
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
						<div class="card">
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
						<div class="card">
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
