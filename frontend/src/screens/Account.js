import React from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "../pages/SignUpForm";
import SignInForm from "../pages/SignInForm";

//import "./Account.css";

const Account = () => {
  return (
    <Router>
      <div className="App">
        <div className="appAside" />
        <div className="appForm">

          <div className="formTitle">
            <NavLink
              to="/account/sign-in"
              activeClassName="formTitleLink-active"
              className="formTitleLink"
            >
              Sign In
            </NavLink>{" "}
            or{" "}
            <NavLink
              exact
              to="/account/"
              activeClassName="formTitleLink-active"
              className="formTitleLink"
            >
              Sign Up
            </NavLink>
          </div>

          <Route exact path="/account/" component={SignUpForm} />
          <Route path="/account/sign-in" component={SignInForm} />
        </div>
      </div>
    </Router>
  );
};

export default Account;
