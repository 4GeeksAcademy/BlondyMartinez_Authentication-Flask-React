import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const handleLogout = () => {
		actions.logout(); 
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{!store.access_token && 
					<Link to="/signup">
						<button className="btn btn-primary">Sign Up</button>
					</Link>}
					<Link to="/">
						<button
						className="btn btn-primary"
						onClick={store.access_token ? handleLogout : null} 
						>
						{store.access_token ? "Log out" : "Log in"}
						</button>
					</Link>
				</div>
			</div>
		</nav>
	  );
};
