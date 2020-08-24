import railsAPI from '../apis/railsAPI';

export const getBlerbs = () => async (dispatch) => {
    const response = await railsAPI.get("/blerbs");

    dispatch({ type: "GET_BLERBS", payload: response.data.data })
};

// export const getBlerbs = () => async (dispatch) => {
//     const response = await fetch("http://localhost:3001/blerbs");

//     dispatch({ type: "GET_BLERBS", payload: response })
// };

export const addUser = (newUser) => async (dispatch) => {
    const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: {
                username: newUser.username,
                email: newUser.email,
                password: newUser.password,
                password_confirmation: newUser.password_confirmation
            }
        })
    })
    .then(response => response.json());
    (dispatch({ type: "CREATE_USER", payload: response }));
};