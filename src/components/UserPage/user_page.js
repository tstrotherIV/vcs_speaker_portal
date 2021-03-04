import React, { useState, useEffect } from "react";
import "./user_page.css";
import { Container, Button, Input } from "reactstrap";
import SaveButton from "../../shared/SaveButton/save_button";
import DataManager from "../../data_module/DataManager";
import UserIdentHeader from "../../shared/User_Ident_Header/user_identity_header";

function SpeakerDetails(props) {
  const [saveBtnVisible, setSaveBtnVisible] = useState(false);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    title: "",
    professional_designation: "",
    business_name: "",
    cell_phone_number: "",
    work_phone: "",
    street_address: "",
    housing_number: "",
    city: "",
    user_state: "",
    zip_code: "",
    preferred_email: "",
    alternate_email: "",
    emergency_contact_name: "",
    emergency_contact_number: "",
  });

  const handleFieldChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
    setSaveBtnVisible(true);
  };

  const updateUser = () => {
    const edited_user = {
      first_name: user.first_name,
      last_name: user.last_name,
      title: user.title,
      professional_designation: user.professional_designation,
      business_name: user.business_name,
      cell_phone_number: user.cell_phone_number,
      work_phone: user.work_phone,
      street_address: user.street_address,
      housing_number: user.housing_number,
      city: user.city,
      user_state: user.user_state,
      zip_code: user.zip_code,
      preferred_email: user.preferred_email,
      alternate_email: user.alternate_email,
      emergency_contact_name: user.emergency_contact_name,
      emergency_contact_number: user.emergency_contact_number,
    };
    DataManager.updateUser(user.id, edited_user).then(() => {});
  };

  const getLoggedInUser = () => {
    const current_user = sessionStorage.getItem(`logged_in_user`);
    DataManager.getUser(current_user).then((data) => {
      setUser(data);
    });
  };

  const checkForUser = () => {
    const user_id = sessionStorage.getItem(`logged_in_user`);
    props.setHasUser(user_id);
  };

  useEffect(() => {
    checkForUser();
  }, []);

  useEffect(() => {
    getLoggedInUser();
  }, []);

  const next = "/deadlines_and_Requirements";
  const back = "/presentation_details";

  return (
    <>
      <Container className="headerMargin">
        <UserIdentHeader />
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="mt-3">
                      <h4>
                        {user.first_name} {user.last_name}
                      </h4>
                      <p className="text-secondary mb-1">Title: {user.title}</p>
                      <p className="text-muted font-size-sm">
                        <p className="m-0">{user.street_address}</p>
                        <p className="m-0">{user.housing_number}</p>
                        <p className="m-0">
                          {user.city}, {user.user_state}, {user.zip_code}
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">Business Name</h6>
                    <span className="text-secondary">{user.business_name}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">Email</h6>
                    <span className="text-secondary">
                      {user.preferred_email}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">Phone Number</h6>
                    <span className="text-secondary">
                      {user.cell_phone_number}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">Address</h6>
                    <span className="text-secondary">
                      <p>{user.street_address}</p>
                      <p>{user.housing_number}</p>
                      <p>
                        {user.city}, {user.user_state}, {user.zip_code}
                      </p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* user info end */}

            {/* Edit/ Upload section begin */}
            <div className="col-md-8">
              <h3>Speaker Details</h3>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">First Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Input
                        type="text"
                        onChange={handleFieldChange}
                        id="first_name"
                        value={user.first_name}
                      ></Input>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Last Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Input
                        type="text"
                        onChange={handleFieldChange}
                        id="last_name"
                        value={user.last_name}
                      ></Input>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Title</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Input
                        type="text"
                        onChange={handleFieldChange}
                        id="title"
                        value={user.title}
                      ></Input>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Professional Designation</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Input
                        type="text"
                        onChange={handleFieldChange}
                        id="professional_designation"
                        value={user.professional_designation}
                      ></Input>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Business/ Organization Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Input
                        type="text"
                        onChange={handleFieldChange}
                        id="business_name"
                        value={user.business_name}
                      ></Input>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Cell Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Input
                        type="text"
                        onChange={handleFieldChange}
                        id="cell_phone_number"
                        value={user.cell_phone_number}
                      ></Input>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Work/Alternate Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Input
                        type="text"
                        onChange={handleFieldChange}
                        id="work_phone"
                        value={user.work_phone}
                      ></Input>
                    </div>
                  </div>
                  <hr></hr>

                  {/* Mailing Address */}
                  <div>
                    <h4 className="pb-2">Preferred Mailing Address</h4>
                    <div className="row">
                      <div className="col-sm-3 mt-2 mb-2">
                        <h6 className="mb-0">Street Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary col-sm-3 mt-2 mb-2">
                        <Input
                          type="text"
                          onChange={handleFieldChange}
                          id="street_address"
                          value={user.street_address}
                        ></Input>
                      </div>
                      <div className="col-sm-3 mt-2 mb-2">
                        <h6 className="mb-0">Street / Apartment / Suite</h6>
                      </div>
                      <div className="col-sm-9 text-secondary col-sm-3 mt-2 mb-2">
                        <Input
                          type="text"
                          onChange={handleFieldChange}
                          id="housing_number"
                          value={user.housing_number}
                        ></Input>
                      </div>
                      <div className="col-sm-3 col-sm-3 mt-2 mb-2">
                        <h6 className="mb-0">City</h6>
                      </div>
                      <div className="col-sm-9 text-secondary mt-2 mb-2">
                        <Input
                          type="text"
                          onChange={handleFieldChange}
                          id="city"
                          value={user.city}
                        ></Input>
                      </div>
                      <div className="col-sm-3 col-sm-3 mt-2 mb-2">
                        <h6 className="mb-0">State</h6>
                      </div>
                      <div className="col-sm-9 text-secondary mt-2 mb-2">
                        <Input
                          type="text"
                          onChange={handleFieldChange}
                          id="user_state"
                          value={user.user_state}
                        ></Input>
                      </div>
                      <div className="col-sm-3 col-sm-3 mt-2 mb-2">
                        <h6 className="mb-0">Zip Code</h6>
                      </div>
                      <div className="col-sm-9 text-secondary mt-2 mb-2">
                        <Input
                          type="text"
                          onChange={handleFieldChange}
                          id="zip_code"
                          value={user.zip_code}
                        ></Input>
                      </div>
                    </div>
                  </div>
                  <hr></hr>

                  {/* Email Section */}
                  <div>
                    <h4 className="pb-2">Email</h4>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Preferred Email Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <Input
                          type="text"
                          onChange={handleFieldChange}
                          id="preferred_email"
                          value={user.preferred_email}
                        ></Input>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Alternate Email Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <Input
                          type="text"
                          onChange={handleFieldChange}
                          id="alternate_email"
                          value={user.alternate_email}
                        ></Input>
                      </div>
                    </div>
                  </div>
                  <hr></hr>

                  {/* Emergency Contact */}
                  <div>
                    <h4 className="pb-2">Emergency Contact</h4>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Emergency Contact Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <Input
                          type="text"
                          onChange={handleFieldChange}
                          id="emergency_contact_name"
                          value={user.emergency_contact_name}
                        ></Input>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Emergency Contact Phone Number</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <Input
                          type="text"
                          onChange={handleFieldChange}
                          id="emergency_contact_number"
                          value={user.emergency_contact_number}
                        ></Input>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-6">
                        <h6 className="mb-0">Completed W9</h6>
                        <p>
                          *For any presenter whose total honorarium will exceed
                          $600
                        </p>
                      </div>
                    </div>
                    <Button
                      color="primary"
                      href="https://www.dropbox.com/request/IuYsh153bQVJnd2vDZnk"
                      target="_blank"
                    >
                      Upload w9
                    </Button>
                  </div>
                </div>
              </div>
              <SaveButton
                saveBtnVisible={saveBtnVisible}
                setSaveBtnVisible={setSaveBtnVisible}
                updateUser={updateUser}
              />
            </div>
          </div>
        </div>
      </Container>
      <Container className="footer-container">
        <Button
          color="primary"
          className="navButton"
          onClick={() => {
            window.location.href = "/deadlines_and_Requirements";
          }}
        >
          Previous
        </Button>
        <Button
          color="primary"
          className="navButton"
          onClick={() => {
            window.location.href = "/presentation_details";
          }}
        >
          Next
        </Button>
      </Container>
    </>
  );
}

export default SpeakerDetails;
