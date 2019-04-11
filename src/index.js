import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import { Provider } from "react-redux";
import { firebase } from "./firebase/firebase";
import configureStore from "./store/";
import AppRouter from "./routers/AppRouter";
import { login, startGetProfile } from "./actions/auth";
import { startGetBlogs } from "./actions/blog";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid, user.displayName));
    store.dispatch(startGetBlogs());
    store.dispatch(startGetProfile());
  }
});
