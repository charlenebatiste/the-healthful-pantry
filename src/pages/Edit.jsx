import React, { useState } from "react";

const Edit = () => {
	const { name, setName } = useState();
	const { email, setEmail } = useState();

	const updateName = (e) => {
		setName(e.target.value);
	};
	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const payload = {
			name,
			email,
		};
		console.log(
			`you want to submit this informtion`
		);
		console.log(e.target.value);
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
						placeholder="New name"
					></input>
				</div>
				<div className="form-group">
					<input
						type="text"
						name="email"
						value={email}
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
