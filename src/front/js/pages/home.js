import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import LoginForm from "../component/login_form.jsx";
import ErrorAlert from "../component/error.jsx";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div className="container mx-auto mt-3">
			<div className="row">
				{store.login_error && <ErrorAlert error={store.login_error} />}
				<LoginForm />
			</div>
		</div>
	);
};
