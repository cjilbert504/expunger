export const getBlerbs = () => {
    return (dispatch) => {
        return fetch("http://localhost:3001/blerbs")
            .then(res => res.json())
            .then(blerbs => dispatch({ type: "GET_BLERBS", payload: blerbs.data}))
    };
};

export const addUser = (newUser, callback) => {
    return (dispatch) => {
        return fetch("http://localhost:3001/users", {
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
        .then(res => res.json())
        .then(userInfo => {
            const authentication_token = userInfo.data.attributes.authentication_token;
            localStorage.setItem('token', authentication_token);
            dispatch({ type: "LOGIN_USER", payload: userInfo.data.attributes })
            callback();
        })
    };
};

export const loginUser = (user, callback) => {
    return (dispatch) => {
        return fetch("http://localhost:3001/sessions", {
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
        .then(res => res.json())
        .then(userInfo => {
            const authentication_token = userInfo.data.attributes.authentication_token;
            localStorage.setItem('token', authentication_token);
            dispatch({ type: "LOGIN_USER", payload: userInfo.data.attributes })
            callback();
        })
    };
};

export const currentUser = (token) => {
    return (dispatch) => {
        return fetch(`http://localhost:3001/users/${token}`)
            .then(res => res.json())
            .then(userInfo => dispatch({ type: "LOGIN_USER", payload: userInfo.data.attributes }))
    };
};

export const addBlerb = (newBlerb, user) => {
    return (dispatch) => {
        return fetch("http://localhost:3001/blerbs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                blerb: {
                    content: newBlerb.blerb,
                    user_id: user.id
                }
            })
        })
        .then(res => res.json())
        .then(blerb => dispatch({ type: "ADD_BLERB", payload: blerb.data}))
    };
};