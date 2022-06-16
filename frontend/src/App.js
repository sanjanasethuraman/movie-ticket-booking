import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import SignInForm from "./pages/SignInForm";
import SignUpForm from "./pages/SignUpForm";
import SignInAdmin from "./pages/SignInAdmin";
import SignUpAdmin from "./pages/SignUpAdmin";
import SeatPicker from "react-seat-picker";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/sign-in" component={SignInForm} />
        <Route exact path="/sign-up" component={SignUpForm} />
        <Route exact path="/admin-sign-in" component={SignInAdmin} />
        <Route exact path="/admin-sign-up" component={SignUpAdmin} />
        <Route exact path="/pick-seats" component={SeatPicker} />
      </Router>
    );
  }
}

export default App;
