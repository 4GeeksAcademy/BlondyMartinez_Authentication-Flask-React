const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			access_token: "",
			login_error: "",
			signup_error: "",
			valid_token: false,
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
				.then((data) => setStore({ access_token: data.access_token, login_error: "", signup_error: "" }))
				.catch((error) => console.log(error))
			},

			logout: () => {
				setStore({ access_token: "", login_error: "", signup_error: "" })
			},

			createUser: (username, email, password) => {
				const newUser = { "username": username, "email": email, "password": password }
				const config = { 
					method: "POST",
					body: JSON.stringify(newUser),
					headers: { "Content-Type": "application/json" }
				}

				fetch(process.env.BACKEND_URL + "/users", config)
				.then((response) => {
					if (!response.ok) {
						return response.json().then((error) => {
							setStore({ signup_error: error.Error })
						  	throw new Error(error.Error);
						});
					} else getActions().login(email, password)
				})
				.catch((error) => console.log(error))
			},

			validateToken: async () => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/validate-token", {
						method: 'GET',
						headers: {
							'Authorization': `Bearer ${getStore().access_token}`
						}
					});
					const data = await response.json();
					setStore({ valid_token: data.valid });
					return data.valid; 
				} catch (error) {
					console.error(error);
					return false; 
				}
			}
		}
	};
};

export default getState;
