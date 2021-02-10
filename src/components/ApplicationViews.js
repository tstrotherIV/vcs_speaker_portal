import React from "react";
import { Route } from "react-router-dom";
import SignUp from "./CreateUser/create_user";
import Home from "./Home/home";
import SpeakerDetails from "./UserPage/user_page";
import UserConferenceInfo from "./ConferenceInfo/conference_info";
import UserTravelInfo from "./TravelInfo/travel_info";
import InfoPage from "./InfoPage/info_page";

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
        path="/deadlines_and_Requirements"
        render={(props) => {
          return <InfoPage {...props} />;
        }}
      />
      <Route
        exact
        path="/sign_up"
        render={(props) => {
          return <SignUp {...props} />;
        }}
      />
      <Route
        exact
        path="/speaker_details"
        render={(props) => {
          return <SpeakerDetails {...props} />;
        }}
      />
      <Route
        exact
        path="/user_conference_info"
        render={(props) => {
          return <UserConferenceInfo {...props} />;
        }}
      />
      <Route
        exact
        path="/user_travel_info"
        render={(props) => {
          return <UserTravelInfo {...props} />;
        }}
      />
    </>
  );
};

export default ApplicationViews;
