import { combineReducers } from "redux";
import { userReducer } from "./user__reducer";
import { blogReducer } from "./blog__reducer";

const rootReducer = combineReducers({
  userReducer,
  blogReducer
});

export default rootReducer
