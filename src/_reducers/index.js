import { combineReducers } from "redux";
import {reducer as formReducer} from "redux-form";
import {registrationReducer} from "./_registrationReducer"


const rootReducer = combineReducers({
  registrationReducer,
  form : formReducer
});

export default rootReducer;
