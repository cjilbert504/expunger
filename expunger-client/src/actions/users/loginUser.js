export const loginUser = (user, callback) => {
    return (dispatch) => {
        return fetch("http://localhost:3000/sessions", {
            method: "POST",
            credentials: 'include',
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
            if (userInfo.error) {
                alert(userInfo.error)
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