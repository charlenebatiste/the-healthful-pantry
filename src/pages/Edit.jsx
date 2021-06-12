import setAuthToken from "../utils/setAuthToken";
import React, { useState } from "react";
import axios from "axios";
const REACT_APP_SERVER_URL =
	process.env.REACT_APP_SERVER_URL;

const Edit = (props) => {
	const { id, name, email } = props.user;
	console.log(props.user);
	// console.log(props.user);
	// console.log(id);
	// console.log(props.user);
	// const token = user.data.id;

	// const [newName, setNewName] = useState("");
	// const [newEmail, setNewEmail] = useState("");

	const handleName = (e) => {
		name = e.target.value;
	};

	const handleEmail = (e) => {
		email = e.target.value;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(newName);
		const payload = {
			id,
			name,
			email,
		};
		let url = `${REACT_APP_SERVER_URL}/api/users/profile/edit`;
		await setAuthToken(
			localStorage.getItem("jwtToken")
		);
		axios
			.put(url, payload)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
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
					<label htmlFor="name">
						New Name
					</label>
					<input
						type="text"
						name="name"
						onChange={(e) =>
							handleName(e)
						}
					></input>
				</div>
				<div className="form-group">
					<label htmlFor="email">
						New Email
					</label>
					<input
						type="text"
						name="email"
						onChange={(e) =>
							handleEmail(e)
						}
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
