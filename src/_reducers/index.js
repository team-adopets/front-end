import { combineReducers } from "redux";
import {reducer as formReducer} from "redux-form";
import {registrationReducer as regisReducer} from "./_registrationReducer"
import { authReducers } from "./_authReducers"


const rootReducer = combineReducers({
  regisReducer, authReducers,
  form : formReducer
});

export default rootReducer;
