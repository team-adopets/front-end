import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../_reducers/index";

const logger = createLogger();

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
