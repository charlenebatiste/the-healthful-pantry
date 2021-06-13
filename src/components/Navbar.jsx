import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Navbar.css";
const Navbar = (props) => {
	return (
		<nav class="navbar navbar-expand-lg navbar-fixed-top">
			<div class="container-fluid">
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
					class="collapse navbar-collapse"
					id="navbarNav"
				>
					<ul class="navbar-nav mr-auto">
						<li class="nav-item">
							<NavLink
								className="nav-link"
								to="/search"
							>
								Search Recipes
							</NavLink>
						</li>
					</ul>

					<NavLink
						className="navbar-brand nav-link"
						to="/"
					>
						<p>
							The Healthful Pantry
						</p>
					</NavLink>

					{props.isAuth ? (
						<ul className="navbar-nav ml-auto">
							{/* <li className="nav-item">
		                            <NavLink className="nav-link" to="/cart">Shopping Cart</NavLink>
		                        </li> */}
							<li className="nav-item">
								<NavLink
									className="nav-link"
									to="/favorites"
								>
									Favorites
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link"
									to="/profile"
								>
									Profile
								</NavLink>
							</li>
							<li className="nav-item">
								<span
									onClick={
										props.handleLogout
									}
									className="nav-link logout-link"
								>
									Logout
								</span>
							</li>
						</ul>
					) : (
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<NavLink
									className="nav-link"
									to="/login"
								>
									Login
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link"
									to="/signup"
								>
									Create Account
								</NavLink>
							</li>
						</ul>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
