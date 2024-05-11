import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import LoginForm from "../component/login_form.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mx-auto mt-3">
			<div className="row">
				<LoginForm />
			</div>
		</div>
	);
};
