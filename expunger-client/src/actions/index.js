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
    .then(response => response.json())
    .then(userInfo => {
        const authentication_token = userInfo.data.attributes.authentication_token;
        localStorage.setItem('token', authentication_token);
        dispatch({ type: "LOGIN_USER", payload: userInfo.data.attributes });
    })
    callback();
};

export const loginUser = (user, callback) => async (dispatch) => {
     const response = await fetch("http://localhost:3001/sessions", {
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
    .then(response => response.json())
    .then(userInfo => {
        const authentication_token = userInfo.data.attributes.authentication_token;
        localStorage.setItem('token', authentication_token);
        console.log(userInfo.data.attributes);
        dispatch({ type: "LOGIN_USER", payload: userInfo.data.attributes });
    })

    callback();
};

export const currentUser = (token) => {
    return dispatch => {
        return fetch(`http://localhost:3001/users/${token}`)
            .then(response => response.json())
            .then(userInfo => dispatch({ type: "CURRENT_USER", payload: userInfo.data.attributes }))
    }
};

export const addBlerb = (newBlerb, user) => async (dispatch) => {
    const response = await fetch("http://localhost:3001/blerbs", {
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
   .then(response => response.json())
   dispatch({ type: "ADD_BLERB", payload: response.data })
};