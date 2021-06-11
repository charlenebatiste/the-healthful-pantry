import React from "react";
import SearchResultsCards from "../components/SearchResultsCards";
import "../components/css/FavoritesCards.css";

function SearchResults(props) {
	return (
		<div>
			<h1 className="Fav-Header">
				{" "}
				Search Results{" "}
			</h1>
			<SearchResultsCards />
		</div>
	);
}
export default SearchResults;
