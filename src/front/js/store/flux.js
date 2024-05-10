const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			access_token: "",
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
				.then((response) => response.json())
				.then((data) => setStore({ access_token: data.access_token }))
				.catch((error) => console.log(error))
			}
		}
	};
};

export default getState;
