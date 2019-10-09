import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import {reducer as form} from "redux-form";

export default combineReducers({
    errors: errorReducer,
    form
});