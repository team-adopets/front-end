import { combineReducers } from 'redux';
import errorReducer from './ErrorReducer';
import regisReducer from "./RegistrationReducer"
import cartReducer from "./CartReducer"
export default combineReducers({
    errors: errorReducer,
    auth: regisReducer,
    cart: cartReducer,
});