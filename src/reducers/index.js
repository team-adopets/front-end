import { combineReducers } from 'redux';
import errorReducer from './Error';
import regisReducer from "./Registration";
import productReducer from "./Product"

export default combineReducers({
    errors: errorReducer,
    auth: regisReducer,
    products: productReducer
});