import React from "react";
import "./travel_info.css";
import { Container, Input } from "reactstrap";
import TextareaAutosize from "react-textarea-autosize";
import SaveButton from "../../shared/SaveButton/save_button";

function UserTravelInfo() {
  return (
    <>
      <Container>
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-12">
              <h3>Speaker Travel Information</h3>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Will you be flying or driving?</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <TextareaAutosize
                        className="textAreaWidth"
                        type="text"
                        name=""
                        minRows="4"
                      />
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">
                        Will you be attending the conference (yes/no)
                      </h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <TextareaAutosize
                        className="textAreaWidth"
                        type="text"
                        name=""
                        minRows="4"
                      />
                    </div>
                  </div>
                  <hr></hr>
                  <h3>Travel Details</h3>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Arrival date(for lodging)</h6>
                    </div>
                    <div className="col-sm-9 text-secondary travel-details p-2">
                      <Input className="textAreaWidth" type="date" />
                      <Input className="textAreaWidth" type="time" />
                    </div>
                    <hr></hr>
                    <div className="col-sm-3">
                      <h6 className="mb-0">Departure date(for lodging)</h6>
                    </div>
                    <div className="col-sm-9 text-secondary travel-details p-2">
                      <Input className="textAreaWidth" type="date" />
                      <Input className="textAreaWidth" type="time" />
                    </div>
                  </div>
                  <hr></hr>
                  <h4 className="pb-2">
                    Emergency Contact (Verify/ Edit Details)
                  </h4>
                  <div className="row p-2">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Emergency Contact Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Input></Input>
                    </div>
                  </div>
                  <div className="row p-2">
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

export default UserTravelInfo;
