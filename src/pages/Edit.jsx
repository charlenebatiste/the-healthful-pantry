const Edit = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(
			`you want to submit this informtion`
		);
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
						placeholder="New name"
					></input>
				</div>
				<div className="form-group">
					<input
						type="text"
						name="email"
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
