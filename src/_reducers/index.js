import { combineReducers } from "redux";
import {reducer as formReducer} from "redux-form";
import {registrationReducer} from "./_registrationReducer"
import cartReducer from "./_cartReducer";

const rootReducer = combineReducers({
  cartReducer, registrationReducer,
  form : formReducer
});

export default rootReducer;
