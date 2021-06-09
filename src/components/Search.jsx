import React from "react";

const Search = () => {
	return (
		<div className="search__wrapper">
			<h1>Search</h1>
			<form>
				<div className="form-group">
					<label>Intolerances</label>
				</div>
				<div className="form-group">
					<label>
						Health Conditions
					</label>
				</div>
				<div className="form-group">
					<label>Diet Type</label>
				</div>
			</form>
		</div>
	);
};

export default Search;
