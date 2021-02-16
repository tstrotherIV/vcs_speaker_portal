import React, { useState, useEffect } from "react";
import "./travel_info.css";
import { Container, Input, Label, ButtonGroup, Button } from "reactstrap";
import SaveButton from "../../shared/SaveButton/save_button";

function UserTravelInfo(props) {
  const [rSelected, setRSelected] = useState(null);
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

  const updateRoomTypeKing = () => {
    setRSelected("King");
    setSaveBtnVisible(true);
  };
  const updateRoomTypeDouble = () => {
    setRSelected("Double");
    setSaveBtnVisible(true);
  };

  const checkForUser = () => {
    const user_id = sessionStorage.getItem(`logged_in_user`);
    props.setHasUser(user_id)
  } 

  useEffect(() => {
    checkForUser();
  }, []);

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
                        <Input
                          className="textAreaWidth"
                          type="date"
                          onChange={handleFieldChange}
                          id="arrival_date"
                        />
                      </div>
                    </div>
                    <hr></hr>
                    <div className="col-sm-3">
                      <h6 className="mb-0">Departure date:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary travel-details p-2">
                      <div className="p-3">
                        <Label>Select Date</Label>
                        <Input
                          className="textAreaWidth"
                          type="date"
                          onChange={handleFieldChange}
                          id="departure_date"
                        />
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
                          onClick={updateRoomTypeKing}
                          active={rSelected === "king"}
                        >
                          King
                        </Button>
                        <Button
                          color="primary"
                          onClick={updateRoomTypeDouble}
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

export default UserTravelInfo;
