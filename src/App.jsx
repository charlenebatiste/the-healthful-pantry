// Imports
import React, {
	useEffect,
	useState,
} from "react";
import {
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

// CSS
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import NotFoundPage from "./pages/NotFoundPage";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";
import SearchResults from "./pages/SearchResults";
import Details from "./pages/Details";
import Edit from "./pages/Edit";

// PrivateRoute Component
const PrivateRoute = ({
	component: Component,
	...rest
}) => {
	// will check if a user has a jwtToken and if not will redirect them to the login page
	let user = localStorage.getItem("jwtToken");

	return (
		<Route
			{...rest}
			render={(props) => {
				return user ? (
					<Component
						{...rest}
						{...props}
					/>
				) : (
					<Redirect to="/login" />
				);
			}}
		/>
	);
};

function App() {
	// Set state values
	const [currentUser, setCurrentUser] =
		useState("");
	const [isAuthenticated, setIsAuthenticated] =
		useState(true);
	const [allRecipes, setAllRecipes] = useState(
		[]
	);

	useEffect(() => {
		let token;
		// if there is no token inside localStorage, then the user is not authenticated
		if (!localStorage.getItem("jwtToken")) {
			console.log(
				"is not authenticated..."
			);
			setIsAuthenticated(false);
		} else {
			token = jwt_decode(
				localStorage.getItem("jwtToken")
			);
			console.log("token", token);
			setAuthToken(token);
			console.log(
				"currentUser before set",
				currentUser
			);
			setCurrentUser(token);
		}
	}, []);

	const nowCurrentUser = (userData) => {
		// console.log(
		// 	"--- inside nowCurrentUser ---"
		// );
		setCurrentUser(userData);
		setIsAuthenticated(true);
	};

	const handleLogout = () => {
		if (localStorage.getItem("jwtToken")) {
			localStorage.removeItem("jwtToken"); // if there is a token, then remove it
			setCurrentUser(null); // set the currentUser to null
			setIsAuthenticated(false); // set is auth to false
		}
	};

	return (
		<div className="App">
			<Navbar
				isAuth={isAuthenticated}
				handleLogout={handleLogout}
			/>
			<Switch>
				{/* routes below */}
				<Route
					exact
					path="/"
					component={Home}
				/>
				<Route
					path="/search"
					render={(props) => (
						<Search
							{...props}
							setAllRecipes={
								setAllRecipes
							}
						/>
					)}
				/>
				<Route
					path="/signup"
					component={Signup}
				/>
				<Route
					path="/favorites"
					component={Favorites}
				/>
				<Route
					path="/results"
					render={(props) => (
						<SearchResults
							{...props}
							allRecipes={
								allRecipes
							}
						/>
					)}
				/>
				<PrivateRoute
					// path="/results/:id"
					path="/details"
					component={Details}
					component={Profile}
					user={currentUser}
					handleLogout={handleLogout}
				/>
				<Route
					path="/login"
					render={(props) => (
						<Login
							{...props}
							user={currentUser}
							nowCurrentUser={
								nowCurrentUser
							}
							setIsAuthenticated={
								setIsAuthenticated
							}
						/>
					)}
				/>
				<PrivateRoute
					exact
					path="/profile"
					component={Profile}
					user={currentUser}
					handleLogout={handleLogout}
				/>
				<PrivateRoute
					path="/profile/edit"
					component={Edit}
					user={currentUser}
					setUser={(userData) =>
						nowCurrentUser(userData)
					}
					handleLogout={handleLogout}
				/>
				<Route
					path="*"
					component={NotFoundPage}
				/>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
