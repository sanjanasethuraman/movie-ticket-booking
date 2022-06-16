import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AccountAdmin.css";
const SignInAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
  };

  return (

    <div className="AppAdmin">
        <div className="appAsideAdmin" />
        <div className="appFormAdmin">

          


    <div className="formCenterAdmin">
      <form className="formFieldsAdmin" onSubmit={handleSubmit}>
        <div className="formFieldAdmin">
          <label className="formFieldLabelAdmin" htmlFor="email">
            E-Mail Address
          </label>
          <input
            type="email"
            id="email"
            className="formFieldInputAdmin"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>

        <div className="formFieldAdmin">
          <label className="formFieldLabelAdmin" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="formFieldInputAdmin"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <div className="formFieldAdmin">
          <button className="formFieldButtonAdmin">Sign In</button>{" "}
          <Link to="/account/" className="formFieldLinAdmink">
            Create an account
          </Link>
        </div>
      </form>
    </div>
    
    </div>
    </div>
  );
};

export default SignInAdmin;
