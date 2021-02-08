import React from "react";
import { Route } from "react-router-dom";
import SignUp from "./CreateUser/create_user";
import Home from "./Home/home";
import UserPage from "./UserPage/user_page";

const ApplicationViews = (props) => {
  return (
    <>
      <Route
        exact
        path="/"
        render={(props) => {
          return <Home {...props} />;
        }}
      />
      <Route
        exact
        path="/user_page"
        render={(props) => {
          return <UserPage {...props} />;
        }}
      />
      <Route
        exact
        path="/sign_up"
        render={(props) => {
          return <SignUp {...props} />;
        }}
      />
    </>
  );
};

export default ApplicationViews;
