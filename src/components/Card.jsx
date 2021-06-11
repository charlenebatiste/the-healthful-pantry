import React from "react";
import {
	makeStyles,
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	IconButton,
	Typography,
} from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

import axios from "axios";
const REACT_APP_SERVER_URL =
	process.env.REACT_APP_SERVER_URL;

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		padding: theme.spacing(0),
		// border: 0,
		// color: 'pink',
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
}));

export default function RecipeReviewCard() {
	const classes = useStyles();
	const [expanded, setExpanded] =
		React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<a href="/">
			<Card className={classes.root}>
				<CardHeader
					title="Shrimp and Chorizo Paella"
					subheader="Subheader"
				/>
				<CardMedia
					className={classes.media}
					image="/static/images/cards/paella.jpg"
					title="Paella dish"
				/>
				<CardContent>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					>
						This impressive paella is
						a perfect party dish and a
						fun meal to cook together
						with your guests. Add 1
						cup of frozen peas along
						with the mussels, if you
						like.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites">
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label="share">
						<ShareIcon />
					</IconButton>
				</CardActions>
			</Card>
		</a>
	);
}
