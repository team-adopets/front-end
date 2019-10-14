import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "../reducers/index";

const logger = createLogger();

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
