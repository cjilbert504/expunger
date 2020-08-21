import railsAPI from '../apis/railsAPI';

export const getBlerbs = () => async (dispatch) => {
    const response = await railsAPI.get("/blerbs");

    dispatch({ type: "GET_BLERBS", payload: response })
};

// export const getBlerbs = () => async (dispatch) => {
//     const response = await fetch("http://localhost:3001/blerbs");

//     dispatch({ type: "GET_BLERBS", payload: response })
// };