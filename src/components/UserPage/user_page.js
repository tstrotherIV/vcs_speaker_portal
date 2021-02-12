import React, { useState } from "react";
import "./user_page.css";
import { Container, Button, Input } from "reactstrap";
import SaveButton from "../../shared/SaveButton/save_button";

function SpeakerDetails() {
  const [saveBtnVisible, setSaveBtnVisible] = useState(false);
  const [user, setUser] = useState({
    name: "",
  });

  const handleFieldChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
    setSaveBtnVisible(true);
  };

  return (
    <>
      <Container>
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/features/_2016/05_2016/how_to_choose_the_right_vet_features/1800x1200_how_to_choose_the_right_vet_features.jpg"
                      width="300px"
                    ></img>
                    <div className="mt-3">
                      <h4>John Doe</h4>
                      <p className="text-secondary mb-1">Vet Doctor</p>
                      <p className="text-muted font-size-sm">
                        Bay Area, San Francisco, CA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">Company</h6>
                    <span className="text-secondary">Best Place Ever</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">Email</h6>
                    <span className="text-secondary">
                      imthebestdr@bestdr.com
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">Phone Number</h6>
                    <span className="text-secondary">555-867-5309</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">Address</h6>
                    <span className="text-secondary">
                      555 Best Street, Awesome State, WY, 55555
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
                        id="fist_name"
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
                      ></Input>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Business/ Orginization Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Input
                        type="text"
                        onChange={handleFieldChange}
                        id="business_name"
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
                        id="work_number"
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
                        ></Input>
                      </div>
                      <div className="col-sm-3 col-sm-3 mt-2 mb-2">
                        <h6 className="mb-0">State</h6>
                      </div>
                      <div className="col-sm-9 text-secondary mt-2 mb-2">
                        <Input
                          type="text"
                          onChange={handleFieldChange}
                          id="state"
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
                        ></Input>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Emergency Contact Phont Number</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <Input
                          type="text"
                          onChange={handleFieldChange}
                          id="emergency_contact_number"
                        ></Input>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-6">
                        <h6 className="mb-0">Signed W9</h6>
                        <p>
                          *for keynote speakers or other presenters whose
                          honorariums will be $600 or more.
                        </p>
                      </div>
                      <div className="col-sm-3 text-secondary">
                        <Button color="primary"
                        >Upload</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <SaveButton
                saveBtnVisible={saveBtnVisible}
                setSaveBtnVisible={setSaveBtnVisible}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SpeakerDetails;
