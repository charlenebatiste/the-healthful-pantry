import React from "react";
import "./css/HowItWorks.css";
import {
	Grid,
	Card,
	Typography,
	CardContent,
} from "@material-ui/core";

const Steps = () => {
	return (
		<div className="step_section">
			<h1 className="text-center hIW">
				How It Works
			</h1>
			<Grid container alignItems="stretch">
				<Grid
					item
					className="cardItem"
					component={Card}
					xs
				>
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="h2"
						>
							Step One
						</Typography>
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
						>
							Search for recipes by
							diet or condition.
						</Typography>
					</CardContent>
				</Grid>

				<Grid
					item
					className="cardItem"
					component={Card}
					xs
				>
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="h2"
						>
							Step Two
						</Typography>
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
						>
							Like the recipe? Save
							it to your favorites.
						</Typography>
					</CardContent>
				</Grid>

				<Grid
					item
					className="cardItem"
					component={Card}
					xs
				>
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="h2"
						>
							Step Three
						</Typography>
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
						>
							Print your shopping
							list and eat your way
							to health.
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
			<div className="container-fluid contHiw">
				<div className="row justify-content-center">
					<div className="col-3">
						<div class="card hiwCard">
							<div class="card-body text-center">
								<h5 class="card-title">
									Step One
								</h5>
								<p class="card-text">
									Search for
									recipes by
									diet or
									condition.
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
									Like the
									recipe? Save
									it to your
									favorites.
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
									Print your
									shopping list
									and eat your
									way to health.
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
