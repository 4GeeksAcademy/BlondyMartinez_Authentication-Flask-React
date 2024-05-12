import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const LoggedIn = () => {
    const { store } = useContext(Context);

	return (
		<div className="container text-center mt-3">
            {store.access_token && 
			<div className="alert alert-success" role="alert">
                Successfully logged in.
            </div>}

            {!store.access_token && 
            <div className="alert alert-danger" role="alert">
                Log in to view this page.
            </div>}
		</div>
	);
};
