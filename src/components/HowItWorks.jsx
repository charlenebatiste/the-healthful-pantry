import React from "react";
import HowItWorks from "./css/HowItWorks.css";

const Steps = () => {
	return (
		<>
			<h1 className="text-center">
				How It Works
			</h1>
			<div className="container">
				<div className="row">
					<div className="col-4">
						<div class="card">
							<div class="card-body">
								<h5 class="card-title">
									Step One
								</h5>
								<p class="card-text">
									Some quick
									example text
									to build on
									the card title
									and make up
									the bulk of
									the card's
									content.
								</p>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div class="card">
							<div class="card-body">
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
								<h5 class="card-title">
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
		</>
	);
};

export default Steps;
