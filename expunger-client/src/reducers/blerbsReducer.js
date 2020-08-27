export default (state = [], action) => {
    switch (action.type) {
        case "GET_BLERBS":
            return action.payload;
        case "ADD_BLERB":
            return [ ...state, action.payload ]
        default:
            return state;
    };
};