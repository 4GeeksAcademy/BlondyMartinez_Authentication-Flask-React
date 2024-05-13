import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const LoggedIn = () => {
    const { store } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (!store.access_token)  navigate('/')
    })

	return (
		<div className="container text-center mt-3">
			<div className="alert alert-success" role="alert">
                Successfully logged in.
            </div>
		</div>
	);
};
