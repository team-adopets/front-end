import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import {reducer as form} from "redux-form";
import regisReducer from "./registrationReducer"
export default combineReducers({
    errors: errorReducer,
    auth: regisReducer,
    form
});