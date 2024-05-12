import React, { useContext } from "react";
import { Context } from "../store/appContext";
import SignUpForm from "../component/signup_form.jsx";
import ErrorAlert from "../component/error.jsx";

export const SignUp = () => {
	const { store } = useContext(Context);

	return (
		<div className="container mx-auto mt-3">
			<div className="row">
				{store.signup_error && <ErrorAlert error={store.signup_error} />}
				<SignUpForm />
			</div>
		</div>
	);
};
