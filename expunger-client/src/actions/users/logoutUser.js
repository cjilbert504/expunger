export const logoutUser = (id) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000//sessions/${id}`, {
            method: "DELETE",
            credentials: 'include'
        })
        .then(res => res.json())
        .then(res => {
            localStorage.removeItem("token")
            dispatch({ type: "LOGOUT_USER" })
        })
    }
}