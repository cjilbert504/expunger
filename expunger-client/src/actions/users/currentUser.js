export const currentUser = (token) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/users/${token}`, {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(userInfo => dispatch({ type: "LOGIN_USER", payload: userInfo.data.attributes }))
    };
};