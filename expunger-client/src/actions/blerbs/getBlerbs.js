export const getBlerbs = () => {
    return (dispatch) => {
        return fetch("http://localhost:3000/blerbs")
            .then(res => res.json())
            .then(blerbs => dispatch({ type: "GET_BLERBS", payload: blerbs.data}))
    };
};