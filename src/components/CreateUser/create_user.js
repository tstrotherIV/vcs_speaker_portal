import React, { useState, useEffect } from "react";
import { Container, Label, Input, Button } from "reactstrap";
import "./create_user.css";
import DataManager from "../../data_module/DataManager";

function SignUp(props) {
  const [credentials, setCredentials] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleCreateAcct = (e) => {
    e.preventDefault();
    if (
      credentials.first_name === "" ||
      credentials.last_name === "" ||
      credentials.email === "" ||
      credentials.password === ""
    ) {
      window.alert("Please enter your Login Information below");
    } else {
      const newUser = {
        first_name: credentials.first_name,
        last_name: credentials.last_name,
        email: credentials.email,
        password: credentials.password,
      };

      DataManager.createNewAccount(newUser).then((user) => {
        if (user.status === 200) {
          console.log("account created", user);
          DataManager.loginUser(newUser).then((data) => {
            if (!data.id) {
              alert("Email or Password is not correct. Please Try again.");
            } else {
              sessionStorage.setItem("session_id", data.id);
              sessionStorage.setItem("logged_in_user", data.user_id);
              props.history.push("/deadlines_and_Requirements");
            }
          });
        }
        if (user.status === 400) {
          alert("The email provided has already been used. Please use another email address.")
        }
      });
    }
  };

  return (
    <Container>
      <h3>Register</h3>

      <div className="form-group">
        <Label>First name</Label>
        <Input
          id="first_name"
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={handleFieldChange}
        />
      </div>

      <div className="form-group">
        <Label>Last name</Label>
        <Input
          id="last_name"
          type="text"
          className="form-control"
          placeholder="Last name"
          onChange={handleFieldChange}
        />
      </div>

      <div className="form-group">
        <Label>Email</Label>
        <Input
          type="email"
          id="email"
          className="form-control"
          placeholder="Enter email"
          onChange={handleFieldChange}
        />
      </div>

      <div className="form-group">
        <Label>Password</Label>
        <Input
          id="password"
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={handleFieldChange}
        />
      </div>

      <Button
        color="primary"
        type="submit"
        className="btn btn-lg btn-block"
        onClick={handleCreateAcct}
      >
        Register
      </Button>
      <p className="forgot-password text-right">
        Already registered <a href="/">log in?</a>
      </p>
    </Container>
  );
}

export default SignUp;
