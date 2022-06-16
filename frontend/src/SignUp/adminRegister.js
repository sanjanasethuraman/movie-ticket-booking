import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import admin from "../Images/admin.jpg";
import secondAdmin from "../Images/secondAdmin.jpg";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: `url(${admin})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  signIn: {
    justify: "center"
  }
}));

export default function AdminRegister() {
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFirstName({ ...firstName, [name]: value });
    setLastName({ ...lastName, [name]: value });
    setEmail({ ...email, [name]: value });
    setPassword({ ...password, [name]: value });
    setConfirmPassword({ ...confirmPassword, [name]: value });
  }

  const backendRegisterUrl = `http://localhost:8080/auth/signup`

  
  const registerHandler = async (req, res) => {
    const jsonData = JSON.stringify({
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    })
  
    console.log(jsonData);
    console.log(firstName, lastName, email, password, confirmPassword)
    await axios.post(backendRegisterUrl, {
      jsonData
    },
    )
    if (res.status === 200 || res.status === 201) {
      console.log("data: ", res.data, "statusCode: ", res.status);
      return { data: res.data, statusCode: res.status }
    } else {
      console.log("statusCode: ", res.status)
      return { statusCode: res.status };
    }
  }
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Box marginBottom={2} align="center">
            <img src={secondAdmin} style={{ width: 400, height: 150 }} />
          </Box>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="fname"
              autoFocus
              onChange={handleChange}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="lname"
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Re-type Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <Grid item xs={12}>
              <Link style={{ textDecoration: "none" }} to="/register">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={registerHandler}
                >
                  Register
                </Button>
              </Link>
            </Grid>
            <Grid container>
              <Grid item>
                <Link style={{ textDecoration: "none" }} to="/" variant="body2">
                  <Box>Already have an account? Sign in</Box>
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
