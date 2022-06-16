import React from "react";
import SignInSide from "./LogIn/LogIn";
import Register from "./SignUp/Register";
import Dashboard from "./dashboard/dashboard";
import UserDashboard from "./dashboard/userDashboard";
import SeatPickerUser from "./pages/SeatPicker";
import "./styles.css";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddMovie from "./forms/addMovie";
import AddTheatre from "./forms/addTheatre";
import ButtonExport from "./option/option";
import AdminRegister from "./SignUp/adminRegister";
import AdminSignInSide from "./LogIn/adminLogin";

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5b7bb2"
    },
    secondary: {
      main: "#7b95c1"
    }
  },
  typography: {
    fontFamily: "BlinkMacSystemFont"
  }
});

export default function App() {
  return (
    <Router>
      <div>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/" exact component={SignInSide} />
            <Route path="/admin" exact component={AdminSignInSide} />
            <Route path="/register" component={Register} />
            <Route path="/admin-register" component={AdminRegister} />
            <Route path ="/admin-dashboard" component={Dashboard} />
            <Route path ="/user-dashboard" component={UserDashboard} />
            <Route path ="/add-show" component={AddMovie} />
            <Route path ="/add-theatre" component={AddTheatre} />
            <Route path ="/seat-pick" component={SeatPickerUser}/>
            <Route path ="/option" component={ButtonExport} />
          </Switch>
        </ThemeProvider>
      </div>
    </Router>
  );
}
