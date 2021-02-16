import React, { useState } from "react";
import { Route } from "react-router-dom";
import SignUp from "./CreateUser/create_user";
import Home from "./Home/home";
import SpeakerDetails from "./UserPage/user_page";
import PresentationInfo from "./PresentationInfo/presentation_info";
import UserTravelInfo from "./TravelInfo/travel_info";
import InfoPage from "./InfoPage/info_page";
import ContinuingEducation from "./ContinuingEducation/continuing_ed";

const ApplicationViews = (props) => {

  const setHasUser = props.setHasUser

  return (
    <>
      <Route
        exact
        path="/"
        render={(props) => {
          return <Home setHasUser={setHasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/deadlines_and_Requirements"
        render={(props) => {
          return <InfoPage setHasUser={setHasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/sign_up"
        render={(props) => {
          return <SignUp setHasUser={setHasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/speaker_details"
        render={(props) => {
          return <SpeakerDetails setHasUser={setHasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/presentation_details"
        render={(props) => {
          return <PresentationInfo setHasUser={setHasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/continuing_education"
        render={(props) => {
          return <ContinuingEducation setHasUser={setHasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/user_travel_info"
        render={(props) => {
          return <UserTravelInfo setHasUser={setHasUser} {...props} />;
        }}
      />
    </>
  );
};

export default ApplicationViews;
