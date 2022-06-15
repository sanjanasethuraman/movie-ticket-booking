import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
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
    <div className="formCenter">
      <form onSubmit={handleSubmit} className="formFields">
        <div className="formField">
          <label className="formFieldLabel" htmlFor="name">
            First Name
          </label>
          <input
            type="text"
            id="name"
            className="formFieldInput"
            placeholder="Enter your first name"
            name="name"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
              console.log(event.target.value);
            }}
          />
        </div>
        <div className="formField">
          <label className="formFieldLabel" htmlFor="name">
            Last Name
          </label>
          <input
            type="text"
            id="name"
            className="formFieldInput"
            placeholder="Enter your last name"
            name="name"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
              console.log(event.target.value);
            }}
          />
        </div>
        <div className="formField">
          <label className="formFieldLabel" htmlFor="email">
            E-Mail Address
          </label>
          <input
            type="email"
            id="email"
            className="formFieldInput"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="formField">
          <label className="formFieldLabel" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="formFieldInput"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="formField">
          <label className="formFieldLabel" htmlFor="password">
            Confirm Password
          </label>
          <input
            type="password"
            id="password"
            className="formFieldInput"
            placeholder="Enter your password"
            name="password"
            value={confirmPassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
        </div>

        <div className="formField">
          <button className="formFieldButton">Sign Up</button>{" "}
          <Link to="/account/sign-in" className="formFieldLink">
            I'm already member
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
