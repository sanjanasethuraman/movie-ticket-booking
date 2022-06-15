import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Account from "./screens/Account";
import SignInForm from "./pages/SignInForm";
import SignUpForm from "./pages/SignUpForm";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/sign-in" component={SignInForm} />
        <Route exact path="/sign-up" component={SignUpForm} />
      </Router>
    );
  }
}

export default App;