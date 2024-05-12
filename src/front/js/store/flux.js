const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			access_token: "",
			login_error: "",
		},
		actions: {
			login: (email, password) => {
				const credentials = { "email": email, "password": password}
				const config = { 
					method: "POST",
					body: JSON.stringify(credentials),
					headers: { "Content-Type": "application/json" }
				}

				fetch(process.env.BACKEND_URL + "/login", config)
				.then((response) => {
					if (!response.ok) {
						return response.json().then((error) => {
							setStore({ login_error: error.Error })
						  	throw new Error(error.Error);
						});
					} else return response.json(); 
				})
				.then((data) => setStore({ access_token: data.access_token, login_error: "" }))
				.catch((error) => console.log(error))
			},

			logout: () => {
				setStore({ access_token: "" })
			}
		}
	};
};

export default getState;
