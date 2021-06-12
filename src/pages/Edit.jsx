import React, { useState } from "react";
import axios from "axios";
const REACT_APP_SERVER_URL =
	process.env.REACT_APP_SERVER_URL;

const Edit = (props) => {
	const { id, name, email } = props.user;
	// const { setCurrentUser } =
	// 	props.setCurrentUser;
	console.log(props.user);

	// const handleInput = (e) => {
	// 	switch (e.target.name) {
	// 		case "name":
	// 			setName(e.target.value);
	// 			break;
	// 		case "email":
	// 			setEmail(e.target.value);
	// 			break;
	// 		case "email":
	// 			setEmail(e.target.value);
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// };

	const handleInput = (e) => {
		console.log(test);
	};

	// const handleName = () => {
	// 	setState(e.target.name);
	// };

	const handleSubmit = (e) => {
		e.preventDefault();
		const payload = {
			id,
			name,
			email,
		};
		// 	let url = `${REACT_APP_SERVER_URL}/api/users/profile/edit`;
		// 	axios
		// 		.put(url, payload)
		// 		.then((response) => {
		// 			console.log(response.data);
		// 			setName(response.data.name);
		// 			setEmail(response.data.name);
		// 		})
		// 		.catch((error) => {
		// 			console.log(error);
		// 		});
	};

	return (
		<div>
			<h1>Edit</h1>
			<p>
				Fill in either/all input fields
				you wish to update and hit submit.
			</p>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<input
						type="text"
						name="name"
						value={name}
						onChange={handleInput}
						placeholder="New name"
					></input>
				</div>
				<div className="form-group">
					<input
						type="text"
						name="email"
						value={email}
						onChange={handleInput}
						placeholder="New email"
					></input>
				</div>
				<button type="submit">
					Update
				</button>
			</form>
		</div>
	);
};

export default Edit;
