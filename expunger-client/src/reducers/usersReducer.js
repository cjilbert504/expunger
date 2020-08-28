export default (state = {}, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return action.payload;
        case "CURRENT_USER":
            return action.payload;
        default:
            return state;
    };
};