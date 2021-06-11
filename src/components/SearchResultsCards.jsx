import React from "react";
import {
	makeStyles,
	Paper,
	Grid,
} from "@material-ui/core";
import Card from "../components/Card";
import "./css/FavoritesCards.css";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: "0 50px 0 50px",
	},
	paper: {
		padding: theme.spacing(3),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

const SearchResultsCards = () => {
	const classes = useStyles();

	function FormRow() {
		return (
			<React.Fragment>
				<Grid align="center" item xs={4}>
					<Paper
						className={classes.paper}
						style={{
							border: "none",
							boxShadow: "none",
						}}
					>
						<Card />
					</Paper>
				</Grid>
				<Grid align="center" item xs={4}>
					<Paper
						className={classes.paper}
						style={{
							border: "none",
							boxShadow: "none",
						}}
					>
						<Card />
					</Paper>
				</Grid>
				<Grid align="center" item xs={4}>
					<Paper
						className={classes.paper}
						style={{
							border: "none",
							boxShadow: "none",
						}}
					>
						<Card />
					</Paper>
				</Grid>
			</React.Fragment>
		);
	}

	return (
		<div className={classes.root}>
			<Grid
				align="center"
				container
				spacing={1}
			>
				<Grid
					container
					item
					xs={12}
					spacing={0}
				>
					<FormRow />
				</Grid>
				<Grid
					align="center"
					container
					item
					xs={12}
					spacing={0}
				>
					<FormRow />
				</Grid>
				<Grid
					align="center"
					container
					item
					xs={12}
					spacing={0}
				>
					<FormRow />
				</Grid>
			</Grid>
		</div>
	);
};

export default SearchResultsCards;
