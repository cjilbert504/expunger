import railsAPI from '../apis/railsAPI';

export const getBlerbs = () => async (dispatch) => {
    const response = await railsAPI.get("/blerbs");

    dispatch({ type: "GET_BLERBS", payload: response.data.data })
};

export const addUser = (newUser, callback) => async (dispatch) => {
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
    dispatch({ type: "LOGIN_USER", payload: response.data.attributes });
    callback();
};

export const loginUser = (user, callback) => async (dispatch) => {
     const response = await fetch("http://localhost:3001/users/sign_in", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: {
                email: user.email,
                password: user.password,
            }
        })
    })
    .then(response => response.json());
    dispatch({ type: "LOGIN_USER", payload: response.data.attributes })
    callback();
};