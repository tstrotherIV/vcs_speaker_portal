import React, { useState } from "react";
import "./travel_info.css";
import { Container, Input, Label, ButtonGroup, Button } from "reactstrap";
import SaveButton from "../../shared/SaveButton/save_button";

function UserTravelInfo() {
  const [rSelected, setRSelected] = useState(null);

  return (
    <>
      <Container>
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-12">
              <h3>Speaker Lodging Page</h3>
              <p>
                You are only required to complete this page if your contract
                specifies that hotel accommodations are included. Depending upon
                the arrival and departure dates that you enter, you may be asked
                to make your own hotel reservation. A VCS representative will
                contact you with additional information.
              </p>
              <div className="card mb-3">
                <div className="card-body">
                  <h3>Travel Details</h3>
                  <br></br>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Arrival date:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary travel-details p-2">
                      <div className="p-3">
                        <Label>Select Date</Label>
                        <Input className="textAreaWidth" type="date" />
                      </div>
                      <div className="p-3">
                        <Label>Select Time</Label>
                        <Input className="textAreaWidth" type="time" />
                      </div>
                    </div>
                    <hr></hr>
                    <div className="col-sm-3">
                      <h6 className="mb-0">Departure date:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary travel-details p-2">
                      <div className="p-3">
                        <Label>Select Date</Label>
                        <Input className="textAreaWidth" type="date" />
                      </div>
                      <div className="p-3">
                        <Label>Select Time</Label>
                        <Input className="textAreaWidth" type="time" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <p>Preferred room type:</p>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <ButtonGroup>
                        <Button
                          color="primary"
                          onClick={() => setRSelected("King")}
                          active={rSelected === "king"}
                        >
                          King
                        </Button>
                        <Button
                          color="primary"
                          onClick={() => setRSelected("Double")}
                          active={rSelected === "Double"}
                        >
                          Double
                        </Button>
                      </ButtonGroup>
                      <p>Selected: {rSelected}</p>
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
