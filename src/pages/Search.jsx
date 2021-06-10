import React, { useState } from "react";
import FormField from "../components/FormField";
import "../components/css/Search.css";
import axios from "axios";
const REACT_APP_SERVER_URL =
	process.env.REACT_APP_SERVER_URL;

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
	"ketogenic",
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
	"Alzheimers",
	"Celiac Disease",
	"Cancer",
	"Heart Disease / Heart Failure",
	"Epilepsy ",
	"IBD or Stomach Cancer",
];

const Search = () => {
	const [userIntolerance, setUserIntolerance] =
		useState([]);
	const [userDiet, setUserDiet] = useState([]);
	const [userCondition, setUserCondition] =
		useState([]);

	const handleIntolerance = (event) => {
		setUserIntolerance(event.target.value);
	};
	const handleDiet = (event) => {
		setUserDiet(event.target.value);
	};
	const handleCondition = (event) => {
		setUserCondition(event.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const searchParams = {
			userIntolerance,
			userDiet,
			userCondition,
		};
		console.log(searchParams);
		// let url = `${REACT_APP_SERVER_URL}/search`;
		// axios
		// 	.post(url, searchParams)
		// 	.then((response) => {
		// 		console.log(response.data);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
	};

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
				<div className="card">
					<form
						className="form__wrapper"
						onSubmit={handleSubmit}
					>
						<FormField
							labelId="intolerance-checkbox-label"
							inputLabelDisplay="Intolerance"
							id="intolerance-checkbox"
							selectValue={
								userIntolerance
							}
							selectOnChange={
								handleIntolerance
							}
							option={intolerances}
						/>
						<FormField
							labelId="diet-checkbox-label"
							inputLabelDisplay="Diet"
							id="diet-checkbox"
							selectValue={userDiet}
							selectOnChange={
								handleDiet
							}
							option={diets}
						/>
						<FormField
							labelId="condition-checkbox-label"
							inputLabelDisplay="Condition"
							id="condition-checkbox"
							selectValue={
								userCondition
							}
							selectOnChange={
								handleCondition
							}
							option={conditions}
						/>
						<button
							type="submit"
							className="btn my-3"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Search;
