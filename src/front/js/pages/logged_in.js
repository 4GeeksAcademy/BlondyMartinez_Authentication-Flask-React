import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const LoggedIn = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        const validate = async () => {
            await actions.validateToken();
            returnHome();
        }

        if (store.access_token) validate();
        else returnHome()
    }, [])

    function returnHome() {
        if (!store.access_token || !store.valid_token)  {
            actions.logout()
            navigate('/');
        }
    }

	return (
		<div className="container text-center mt-3">
			{(store.access_token && store.valid_token) &&
                <div className="alert alert-success" role="alert">
                    Successfully logged in.
                </div>}
		</div>
	);
};
