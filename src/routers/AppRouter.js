import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import React from "react";
import SignUpPage from "../components/SignUpPage";
import LoginPage from "../components/LoginPage";
import HomePage from "../components/HomePage";
import Navbar from "../components/Navbar";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import DashboardPage from "../components/DashboardPage";
import AddPostPage from "../components/AddPostPage";

const history = createBrowserHistory();

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
        <PrivateRoute path="/dashboard" component={DashboardPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
