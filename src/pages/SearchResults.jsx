import React from "react";
import SearchResultsCards from "../components/SearchResultsCards";
import "../components/css/FavoritesCards.css";

function SearchResults(props) {
	console.log(props)
	const{allRecipes}=props

	return (
		<div>
			<h1 className="Fav-Header">
				
				Search Results
			</h1>
			{/* <SearchResultsCards /> */}

			<ul>
				<li>
					{allRecipes[0]}
				</li>
			</ul>
		</div>
	);
}
export default SearchResults;
