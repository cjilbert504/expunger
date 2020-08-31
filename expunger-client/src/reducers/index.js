import { combineReducers } from 'redux';
import blerbsReducer from './blerbsReducer';
import userReducer from './userReducer';

export default combineReducers({
    blerbs: blerbsReducer,
    user: userReducer
});