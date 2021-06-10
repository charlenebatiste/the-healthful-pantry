import React, { useState } from "react";
import {
	makeStyles,
	Input,
	InputLabel,
	MenuItem,
	FormControl,
	ListItemText,
	Select,
	Checkbox,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		maxWidth: 300,
	},
	noLabel: {
		marginTop: theme.spacing(3),
	},
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight:
				ITEM_HEIGHT * 4.5 +
				ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const intolerances = [
	"dairy",
	"egg",
	"gluten",
	"peanut",
	"sesame",
	"seafood",
	"shellfish",
	"soy",
	"sulfite",
	"tree nut",
	"wheat",
];

const diets = [
	"pescetarian",
	"lacto vegetarian",
	"ovo vegetarian",
	"vegan",
	"paleo",
	"primal",
	"vegetarian",
];

const conditions = [
	"Diabetes",
	"Anemia",
	"Cancer",
	"Heart Disease / Heart Failure",
	"Epilepsy ",
	"IBD or Stomach Cancer",
];

const Search = () => {
	const classes = useStyles();
	const [userIntolerance, setUserIntolerance] =
		useState([]);
	const [userDiet, setUserDiet] = useState([]);
	const [userCondition, setUserCondition] =
		useState([]);

	const handleChange = (event) => {
		setUserIntolerance(event.target.value);
	};
	// buggy because this is currently only setting user intolerance and not anything else

	const handleChangeMultiple = (event) => {
		const { options } = event.target;
		const value = [];
		for (
			let i = 0, l = options.length;
			i < l;
			i += 1
		) {
			if (options[i].selected) {
				value.push(options[i].value);
			}
		}
		setUserIntolerance(value);
	};
	// will work for all of the input fields

	return (
		<div>
			<div className="search__wrapper">
				<div className="search__header">
					<h1>Search</h1>
					<h2>
						Please check all boxes
						that apply so we can
						provide you with the best
						results
					</h2>
				</div>
				<hr></hr>
				<form className="form__wrapper">
					<FormControl
						className={
							classes.formControl
						}
					>
						<InputLabel id="intolerance-checkbox-label">
							Intolerances
						</InputLabel>
						<Select
							labelId="intolerance-checkbox-label"
							id="intolerance-checkbox"
							multiple
							value={
								userIntolerance
							}
							onChange={
								handleChange
							}
							input={<Input />}
							renderValue={(
								selected
							) =>
								selected.join(
									", "
								)
							}
							MenuProps={MenuProps}
						>
							{intolerances.map(
								(intolerance) => (
									<MenuItem
										key={
											intolerance
										}
										value={
											intolerance
										}
									>
										<Checkbox
											checked={
												userIntolerance.indexOf(
													intolerance
												) >
												-1
											}
										/>
										<ListItemText
											primary={
												intolerance
											}
										/>
									</MenuItem>
								)
							)}
						</Select>
					</FormControl>
					<FormControl
						className={
							classes.formControl
						}
					>
						<InputLabel id="diet-checkbox-label">
							Diet
						</InputLabel>
						<Select
							labelId="diet-checkbox-label"
							id="diet-checkbox"
							multiple
							value={userDiet}
							onChange={
								handleChange
							}
							input={<Input />}
							renderValue={(
								selected
							) =>
								selected.join(
									", "
								)
							}
							MenuProps={MenuProps}
						>
							{diets.map((diet) => (
								<MenuItem
									key={diet}
									value={diet}
								>
									<Checkbox
										checked={
											userDiet.indexOf(
												diet
											) > -1
										}
									/>
									<ListItemText
										primary={
											diet
										}
									/>
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<FormControl
						className={
							classes.formControl
						}
					>
						<InputLabel id="condition-checkbox-label">
							Conditions
						</InputLabel>
						<Select
							labelId="condition-checkbox-label"
							id="condition-checkbox"
							multiple
							value={userCondition}
							onChange={
								handleChange
							}
							input={<Input />}
							renderValue={(
								selected
							) =>
								selected.join(
									", "
								)
							}
							MenuProps={MenuProps}
						>
							{conditions.map(
								(condition) => (
									<MenuItem
										key={
											condition
										}
										value={
											condition
										}
									>
										<Checkbox
											checked={
												userCondition.indexOf(
													condition
												) >
												-1
											}
										/>
										<ListItemText
											primary={
												condition
											}
										/>
									</MenuItem>
								)
							)}
						</Select>
					</FormControl>
				</form>
			</div>
		</div>
	);
};

export default Search;
