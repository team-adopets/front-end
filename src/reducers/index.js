import { combineReducers } from 'redux';
import errorReducer from './Error';
import regisReducer from "./Registration";
import cartReducer from "./Cart";
import productReducer from "./Product"

export default combineReducers({
    errors: errorReducer,
    auth: regisReducer,
    cart: cartReducer,
    products: productReducer
});