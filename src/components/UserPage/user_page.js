import React from "react";
import "./user_page.css";
import { Container, Button, Input } from "reactstrap";
import SaveButton from "../../shared/SaveButton/save_button";

function SpeakerDetails() {
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
                      <Input></Input>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Last Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Input></Input>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Title</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Input></Input>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Professional Designation</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Input></Input>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Business/ Orginization Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Input></Input>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Cell Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Input></Input>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Work/Alternate Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Input></Input>
                    </div>
                  </div>
                  <hr></hr>

                  {/* Mailing Address */}
                  <div>
                    <h4 className="pb-2">PreferredMailing Address</h4>
                    <div className="row">
                      <div className="col-sm-3 mt-2 mb-2">
                        <h6 className="mb-0">Street Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary col-sm-3 mt-2 mb-2">
                        <Input></Input>
                      </div>
                      <div className="col-sm-3 mt-2 mb-2">
                        <h6 className="mb-0">Street / Apartment / Suite</h6>
                      </div>
                      <div className="col-sm-9 text-secondary col-sm-3 mt-2 mb-2">
                        <Input></Input>
                      </div>
                      <div className="col-sm-3 col-sm-3 mt-2 mb-2">
                        <h6 className="mb-0">City</h6>
                      </div>
                      <div className="col-sm-9 text-secondary mt-2 mb-2">
                        <Input></Input>
                      </div>
                      <div className="col-sm-3 col-sm-3 mt-2 mb-2">
                        <h6 className="mb-0">State</h6>
                      </div>
                      <div className="col-sm-9 text-secondary mt-2 mb-2">
                        <Input></Input>
                      </div>
                      <div className="col-sm-3 col-sm-3 mt-2 mb-2">
                        <h6 className="mb-0">Zip Code</h6>
                      </div>
                      <div className="col-sm-9 text-secondary mt-2 mb-2">
                        <Input></Input>
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
                        <Input></Input>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Alternate Email Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <Input></Input>
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
                        <Input></Input>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Emergency Contact Phont Number</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <Input></Input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <SaveButton />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SpeakerDetails;
