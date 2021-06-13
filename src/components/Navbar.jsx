import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = (props) => {
	return (
		// <div className="container navContainer">
		<nav className="navbar navbar-expand-lg navbar-fixed-top">
			<div className="container-fluid">
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon "></span>
				</button>
				<div
					className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/search">Search Recipes
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="navbar-brand nav-link"
								to="/"> Healthful Pantry
							</NavLink>
					</li>
					</ul>

					{props.isAuth ? (
						<ul className="navbar-nav ml-auto">
							{/* <li className="nav-item">
		                            <NavLink className="nav-link" to="/cart">Shopping Cart</NavLink>
		                        </li> */}
							{/* <li className="nav-item">
								<NavLink
									className="nav-link"
									to="/favorites">Favorites
								</NavLink>
							</li> */}
							<li className="nav-item">
								<NavLink
									className="nav-link"
									to="/profile">Profile
								</NavLink>
							</li>
							<li className="nav-item">
								<span
									onClick={
										props.handleLogout}
									className="nav-link logout-link">
									Logout
								</span>
							</li>
						</ul>
					) : (
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<NavLink
									className="nav-link"
									to="/login">Login
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link"
									to="/signup">
									Create Account
								</NavLink>
							</li>
						</ul>
					)}
				</div>
			</div>
		</nav>

		// </div>
	);
};

export default Navbar;
