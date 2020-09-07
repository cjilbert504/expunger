export const addUser = (newUser, callback) => {
    return (dispatch) => {
        return fetch("http://localhost:3000/users", {
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
            if (userInfo.error) {
                alert(userInfo.details)
            } else {
                const authentication_token = userInfo.data.attributes.authentication_token;
                localStorage.setItem('token', authentication_token);
                dispatch({ type: "LOGIN_USER", payload: userInfo.data.attributes })
                callback();
            }
        })
            .catch(console.log())
    };
};