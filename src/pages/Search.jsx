import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import FormField from "../components/FormField";
import "../components/css/Search.css";
import axios from "axios";
const REACT_APP_SERVER_URL =
	process.env.REACT_APP_SERVER_URL;

// const variables to be sent to backend through form
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

const Search = (props) => {
	const { setAllRecipes } = props;
	// pulls down setAllRecipes mutator from App.jsx

	// create variables and mutators for form inputs
	const [userIntolerance, setUserIntolerance] =
		useState([]);
	const [userDiet, setUserDiet] = useState([]);
	const [userCondition, setUserCondition] =
		useState([]);

	// set redirect variable and mutator to handle user after submit
	const [redirect, setRedirect] =
		useState(false);

	// functions to update form data
	const handleIntolerance = (event) => {
		setUserIntolerance(event.target.value);
	};
	const handleDiet = (event) => {
		setUserDiet(event.target.value);
	};
	const handleCondition = (event) => {
		setUserCondition(event.target.value);
	};

	// function to send package of user selections to backend
	const handleSubmit = async (e) => {
		e.preventDefault();
		const searchParams = {
			userIntolerance,
			userDiet,
			userCondition,
		};
		let url = `${REACT_APP_SERVER_URL}/api/recipe/search`;
		axios
			.post(url, searchParams)
			.then(async (response) => {
				// console.log(response.data.results);
				await setAllRecipes(
					response.data.results
				);
				// mutates allRecipes and send data up to App.jsx to be passed to necessary components
				await setRedirect(true);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	// sends the user to the results page which renders the response
	if (redirect)
		return <Redirect to="/results" />;

	return (
		<div className="search__container container-fluid">
			<div className="search__wrapper row">
				<div className="search__heading col mt-5 mb-2">
					<h1 className="heading__header text-center m-1">
						Search Recipes
					</h1>
					<p className="heading__info text-center m-1">
						<em>
							Please select all that
							apply so that we can
							provide you with the
							best results.
						</em>
					</p>
				</div>
			</div>
			<div className="search__content row d-flex justify-content-center">
				<div className="card col-8 my-3">
					<form
						className="form__wrapper text-center my-4"
						onSubmit={handleSubmit}
					>
						<div className="form__group my-4">
							{/* uses FormField component to display form data and passes down necessary functions */}
							<FormField
								labelId="intolerance-checkbox-label"
								inputLabelDisplay="Intolerances"
								id="intolerance-checkbox"
								selectValue={
									userIntolerance
								}
								selectOnChange={
									handleIntolerance
								}
								option={
									intolerances
								}
							/>
						</div>
						<div className="form__group my-4">
							<FormField
								labelId="diet-checkbox-label"
								inputLabelDisplay="Diet Type"
								id="diet-checkbox"
								selectValue={
									userDiet
								}
								selectOnChange={
									handleDiet
								}
								option={diets}
							/>
						</div>
						<div className="form__group my-4">
							<FormField
								labelId="condition-checkbox-label"
								inputLabelDisplay="Health Conditions"
								id="condition-checkbox"
								selectValue={
									userCondition
								}
								selectOnChange={
									handleCondition
								}
								option={
									conditions
								}
							/>
						</div>
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
