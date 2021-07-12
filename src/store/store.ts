import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers";

const middlewares = [thunk];
// Only use the redux-logger middleware in development
if (process.env.NODE_ENV === "development") {
  // middlewares.push(createLogger());
}

export default createStore(allReducers, applyMiddleware(...middlewares));
