import React from "react";
import "../components/css/SearchResults.css";
import {
	Grid,
	makeStyles,
	Card,
	CardHeader,
	CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
}));

const SearchResults = (props) => {
	const classes = useStyles();
	const recipes = props.allRecipes;
	console.log(recipes);
	// const handleSubmit = (r) => {
	// 	console.log(
	// 		`you want to see recipe id ${r.id}`
	// 	);
	// };

	let recipeList = recipes.map((r, idx) => (
		<Grid
			item
			component={Card}
			key={idx}
			id={r.id}
			xs={4}
			spacing={3}
		>
			<CardHeader title={r.title} />
			<CardMedia
				className={classes.media}
				image={r.image}
				title={r.title}
			/>
			{/* <button
						// value={r.id}
						onClick={handleSubmit}
					>
						see more
					</button> */}
		</Grid>
	));

	return (
		<div className="results__container pb-3 px-3">
			<h1 className="search__header p-4 text-center">
				Search Results
			</h1>
			<div className={classes.root}>
				<Grid
					container
					spacing={1}
					alignItems="stretch"
				>
					{recipeList}
				</Grid>
			</div>
		</div>
	);
};
export default SearchResults;
