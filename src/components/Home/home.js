import React from "react";
import "./home.css";
import { Container, Input, Label, Button } from "reactstrap";

function Home(props) {
  return (
    <>
      <section className="home_container">
        <Container className="text-center p-4">
          <h1>VCS Speaker Portal</h1>
        </Container>
        <Container className="p-4 login_container">
          <h3>Log in</h3>

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

          <Button type="submit" className="btn btn-dark btn-lg btn-block">
            Sign in
          </Button>
          {/* <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p> */}
          <p className="forgot-password text-right"><a href="/sign_up">Create VCS Speaker Account</a>
          </p>
        </Container>
      </section>
    </>
  );
}

export default Home;
