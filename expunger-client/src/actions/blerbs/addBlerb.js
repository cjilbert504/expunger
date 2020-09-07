export const addBlerb = (newBlerb, user) => {
    return (dispatch) => {
        return fetch("http://localhost:3000/blerbs", {
            method: "POST",
            credentials: 'include',
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
        .then(blerb => {
            if (blerb.error) {
                alert(blerb.details)
            } else {
                dispatch({ type: "ADD_BLERB", payload: blerb.data})
            }
        })
        .catch(console.log())
    };
};