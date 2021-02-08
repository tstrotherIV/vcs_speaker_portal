import React from "react";
import "./user_page.css";
import { Container, Button, Input } from "reactstrap";
import SaveButton from "../../shared/SaveButton/save_button";

function UserPage() {
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
                    <h6 className="mb-0">Website</h6>
                    <div className="text-secondary">
                      <a href="http://vetcancersociety.org/">
                        http://vetcancersociety.org/
                      </a>
                    </div>
                  </li>
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
              <h3>Personal Information</h3>
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
                  <h4 className="pb-2">Personal Mailing Address</h4>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Street</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Input></Input>
                    </div>
                    <div className="col-sm-3">
                      <h6 className="mb-0">City</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Input></Input>
                    </div>
                    <div className="col-sm-3">
                      <h6 className="mb-0">State</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Input></Input>
                    </div>
                    <div className="col-sm-3">
                      <h6 className="mb-0">Zipcode</h6>
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
                      <h6 className="mb-0">Credentials</h6>
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
                      <h6 className="mb-0">Work Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Input></Input>
                    </div>
                  </div>
                  <hr></hr>
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
              <SaveButton />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default UserPage;
