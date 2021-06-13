import setAuthToken from "../utils/setAuthToken";
import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "../components/css/Edit.css";
const REACT_APP_SERVER_URL =
	process.env.REACT_APP_SERVER_URL;

const Edit = (props) => {
	const { id, name, email } = props.user;
	const [redirect, setRedirect] =
		useState(false);
	console.log("Edit user props", props.user);

	console.log("props", props);

	const handleName = (e) => {
		props.setUser({
			...props.user,
			name: e.target.value,
		});
	};

	const handleEmail = (e) => {
		props.setUser({
			...props.user,
			email: e.target.value,
		});
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
			.then(async (response) => {
				// console.log(response.data);
				await setRedirect(true);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	if (redirect)
		return <Redirect to="/profile" />;

	const handleDelete = (e) => {
		e.preventDefault();
		console.log(
			`i want to delete this profile`
		);
	};

	return (
		<div className="container-fluid edit__wrapper">
			<div className="row py-2">
				<div>
					<button
						className="col-2 float-end btn delete-btn"
						onClick={handleDelete}
					>
						Delete Account
					</button>
				</div>
			</div>
			<div className="row">
				<h1 className="col text-center">
					Edit
				</h1>
			</div>
			<hr></hr>
			<div className="row">
				<p className="edit_info fs-4 text-center">
					<em>
						Replace all input fields
						you wish to update and hit
						submit.
					</em>
				</p>
			</div>
			<div className="row justify-content-center">
				<form
					className="edit__form mb-5 col-5"
					onSubmit={handleSubmit}
				>
					<div className="form-group text-center my-3 fs-5">
						<label
							className="group__label px-2"
							htmlFor="name"
						>
							New Name
						</label>
						<input
							type="text"
							name="name"
							onChange={(e) =>
								handleName(e)
							}
							value={name}
						></input>
					</div>
					<div className="form-group text-center my-3 fs-5">
						<label
							className="group__label px-2"
							htmlFor="email"
						>
							New Email
						</label>
						<input
							type="text"
							name="email"
							onChange={(e) =>
								handleEmail(e)
							}
							value={email}
						></input>
					</div>
					<div className="text-center my-3">
						<button
							className="btn edit__submit"
							type="submit"
						>
							Update
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Edit;
