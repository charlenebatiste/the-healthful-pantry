import React from "react";
import {
	makeStyles,
	Paper,
	Grid,
} from "@material-ui/core";
import FavoritesCards from "../components/FavoritesCards";
import "../components/css/FavoritesCards.css";

const Favorites = (props) => {
	return (
		<div>
			<h1 className="Fav-Header">
				{" "}
				My Favorites List{" "}
			</h1>
			<FavoritesCards />
		</div>
	);
};
export default Favorites;
