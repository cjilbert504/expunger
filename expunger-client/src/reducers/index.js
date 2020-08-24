import { combineReducers } from 'redux';
import blerbsReducer from './blerbsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    blerbs: blerbsReducer,
    users: usersReducer
});