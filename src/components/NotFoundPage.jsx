import React from "react";
import { Link } from "react-router-dom";
import PageNotFound from "../img/PageNotFound.jpg";
import "./css/NotFoundPage.css";

class NotFoundPage extends React.Component {
	render() {
		return (
			<div className="container my-4">
				<img
					className="img-responsive"
					width="304"
					height="236"
					src={PageNotFound}
					alt="shocked little girl"
				/>
				<div className="text-center">
					<h1>Sorry!</h1> <br />
					<p>This page isn't working</p>
					<br />
					<p
						style={{
							textAlign: "center",
						}}
					>
						<Link to="/">
							Go to Home
						</Link>
					</p>
				</div>
			</div>
		);
	}
}
export default NotFoundPage;
