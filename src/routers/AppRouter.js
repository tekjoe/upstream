import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import React from "react";
import SignUpPage from "../components/SignUpPage";
import LoginPage from "../components/LoginPage";
import HomePage from "../components/HomePage";
import Navbar from "../components/Navbar";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import ProfilePage from "../components/ProfilePage";
import AddPostPage from "../components/AddPostPage";
import SettingsPage from "../components/SettingsPage";
import UploadTest from "../components/UploadTest";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Navbar />
      <Switch>
        <PublicRoute exact path="/" component={HomePage} />
        <Route path="/sign-up" component={SignUpPage} />
        <PrivateRoute path="/home" component={HomePage} />
        <PrivateRoute path="/add-post" component={AddPostPage} />
        <PublicRoute path="/login" component={LoginPage} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/upload" component={UploadTest} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
