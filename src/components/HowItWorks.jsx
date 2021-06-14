import React from "react";
import "./css/HowItWorks.css";
import SearchIcon from "../img/search-icon.png";
import FavoriteIcon from "../img/favorites-icon.png";
import CartIcon from "../img/cart-icon.png";

import {
	Grid,
	Card,
	Typography,
	CardContent,
} from "@material-ui/core";

const Steps = () => {
	return (
		<div className="step_section py-4">
			<h1 className="text-center">
				How It Works
			</h1>

			<Grid
				container
				className="gridContainer"
			>
				<Grid
					item
					className="cardItem"
					component={Card}
					xs
				>
					<CardContent className="cardContent">
						<div className="img__container p-2">
							<img
								className="icon-img"
								width="25%"
								height="25%"
								src={SearchIcon}
							/>
						</div>
						<Typography
							className="cardText"
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
					<CardContent className="cardContent">
						<div className="img__container p-2">
							<img
								className="icon-img"
								width="25%"
								height="25%"
								src={FavoriteIcon}
							/>
						</div>
						<Typography
							className="cardText"
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
					<CardContent className="cardContent">
						<div className="img__container p-2">
							<img
								className="icon-img"
								width="25%"
								height="25%"
								src={CartIcon}
							/>
						</div>
						<Typography
							className="cardText"
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
							Generate a Shopping
							List to make sure you
							have everything you
							need
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default Steps;
