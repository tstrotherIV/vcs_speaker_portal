import React from "react";
import { Container, Label, Input } from "reactstrap";
import "./create_user.css";

function SignUp(props) {
  return (
    <Container>
      <h3>Register</h3>

      <div className="form-group">
        <Label>First name</Label>
        <Input type="text" className="form-control" placeholder="First name" />
      </div>

      <div className="form-group">
        <Label>Last name</Label>
        <Input type="text" className="form-control" placeholder="Last name" />
      </div>

      <div className="form-group">
        <Label>Email</Label>
        <Input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <Label>Password</Label>
        <Input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <button type="submit" className="btn btn-dark btn-lg btn-block">
        Register
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="/">log in?</a>
      </p>
    </Container>
  );
}

export default SignUp;
