import React, { useState, useEffect } from "react";
import "./admin_login.css";
import { Container, Input, Label, Button } from "reactstrap";
import DataManager from "../../../data_module/DataManager";

function AdminLoginPage(props) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [adminUser, setAdminUser] = useState("");

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const loginUser = () => {
    const loginData = {
      email: credentials.email,
      password: credentials.password,
    };
    if (loginData.email === "") {
      alert("Please Enter an Email Address");
    } else if (loginData.password === "") {
      alert("Please Enter a Password");
    } else {
      DataManager.loginUser(loginData).then((data) => {
        if (!data.id) {
          alert("Email or Password is not correct. Please Try again.");
        } else {
          DataManager.getUser(data.user_id).then((person) => {
            if (!person.admin || person.admin === false) {
              alert("You are not authorized");
            } else {
              sessionStorage.setItem("session_id", data.id);
              sessionStorage.setItem("logged_in_user", data.user_id);
              props.history.push("/vcs-admin-dashboard");
            }
          });
        }
      });
    }
  };

  const checkForUser = () => {
    const user_id = sessionStorage.getItem(`logged_in_user`);
    props.setHasUser(user_id);
    if (user_id) {
      props.history.push("/deadlines_and_Requirements");
    }
  };

  useEffect(() => {
    checkForUser();
  }, []);

  return (
    <>
      <section className="home_container">
        <Container className="text-center p-4">
          <h1>Admin Login</h1>
        </Container>
        <Container className="p-4 login_container">
          <h3>Log in</h3>

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
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
              onChange={handleFieldChange}
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <Input
                type="checkbox"
                className="custom-control-Input"
                id="customCheck1"
              />
              <Label className="custom-control-Label" htmlFor="customCheck1">
                Remember me
              </Label>
            </div>
          </div>

          <Button
            type="submit"
            className="btn btn-dark btn-lg btn-block"
            onClick={loginUser}
          >
            Sign in
          </Button>
          {/* <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p> */}
          <p className="forgot-password text-right">
            <a href="/sign_up">Create VCS Speaker Account</a>
          </p>
        </Container>
      </section>
    </>
  );
}

export default AdminLoginPage;
