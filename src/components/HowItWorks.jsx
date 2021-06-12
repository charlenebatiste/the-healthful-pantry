import React from "react";
import HowItWorks from "./css/HowItWorks.css";

const Steps = () => {
	return (
		<div className="step_section">
			<h1 className="text-center">
				How It Works
			</h1>
			<div className="container">
				<div className="row">
					<div className="col-4">
						<div class="card">
							<div class="card-body text-center">
								<h5 class="card-title">
									Step One
								</h5>
								<p class="card-text">
									Search for
									Recipes by
									diet or
									condition
								</p>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div class="card">
							<div class="card-body text-center">
								<h5 class="card-title">
									Step Two
								</h5>
								<p class="card-text">
									Like the
									Recipe? Add it
									to your
									Rolodex
								</p>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div class="card">
							<div class="card-body">
								<h5 class="card-title text-center">
									Step Three
								</h5>
								<p class="card-text">
									Generate a
									Shopping List
									to make sure
									you have
									everything you
									need
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
