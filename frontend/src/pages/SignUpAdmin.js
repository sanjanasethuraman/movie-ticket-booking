import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AccountAdmin.css";

const SignUpAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("The form was submitted with the following data:");
  };

  return (
    <div className="AppAdmin">
        <div className="appAsideAdmin" />
        <div className="appFormAdmin">

    <div className="formCenterAdmin">
      <form onSubmit={handleSubmit} className="formFieldsAdmin">
        <div className="formFieldAdmin">
          <label className="formFieldLabelAdmin" htmlFor="name">
            First Name
          </label>
          <input
            type="text"
            id="name"
            className="formFieldInputAdmin"
            placeholder="Enter your first name"
            name="name"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
              console.log(event.target.value);
            }}
          />
        </div>
        <div className="formFieldAdmin">
          <label className="formFieldLabelAdmin" htmlFor="name">
            Last Name
          </label>
          <input
            type="text"
            id="name"
            className="formFieldInputAdmin"
            placeholder="Enter your last name"
            name="name"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
              console.log(event.target.value);
            }}
          />
        </div>
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
          <label className="formFieldLabelAdmin" htmlFor="password">
            Confirm Password
          </label>
          <input
            type="password"
            id="password"
            className="formFieldInputAdmin"
            placeholder="Enter your password"
            name="password"
            value={confirmPassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
        </div>

        <div className="formFieldAdmin">
          <button className="formFieldButtonAdmin">Sign Up</button>{" "}
          <Link to="/account/sign-in" className="formFieldLinkAdmin">
            I'm already member
          </Link>
        </div>
      </form>
    </div>

    </div>
    </div>
  );
};

export default SignUpAdmin;
