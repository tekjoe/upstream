import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import blogs from "../reducers/blog";
import auth from "../reducers/auth";

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })) ||
  compose;

export default () => {
  const store = createStore(
    combineReducers({ blogs, auth }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
