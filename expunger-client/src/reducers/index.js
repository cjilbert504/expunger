import { combineReducers } from 'redux';
import blerbsReducer from './blerbsReducer';

export default combineReducers({
    blerbs: blerbsReducer
});