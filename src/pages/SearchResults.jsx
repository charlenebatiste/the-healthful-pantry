import React from "react";
import "../components/css/FavoritesCards.css";
import { Link } from "react-router-dom";
import {
	makeStyles,
	Card,
	CardHeader,
	CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
}));

const SearchResults = (props) => {
	const classes = useStyles();
	// console.log(props);
	const recipes = props.allRecipes;
	console.log(recipes);

	let recipeList = recipes.map((r, idx) => (
		<div
			className="col-4"
			key={idx}
			id={r.id}
		>
			{/* <img src={r.image} alt={r.title} />
			{r.title} */}
			<Card className="singleCard">
				<CardHeader title={r.title} />
				<CardMedia
					className={classes.media}
					image={r.image}
					title={r.title}
				/>
				<Link
					className="listitem_wrapper"
					to="/recipe/:id"
				>
					See More
				</Link>
			</Card>
		</div>
	));

	return (
		<div>
			<h1 className="Fav-Header">
				Search Results
			</h1>
			<div className="container">
				<div className="row recipe__wrapper">
					{recipeList}
				</div>
			</div>
		</div>
	);
};
export default SearchResults;
