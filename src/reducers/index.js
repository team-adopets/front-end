import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import regisReducer from "./registrationReducer"
import cartReducer from "./cartReducer"
export default combineReducers({
    errors: errorReducer,
    auth: regisReducer,
    cart: cartReducer,
});