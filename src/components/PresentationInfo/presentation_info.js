import React, { useState, useEffect } from "react";
import "./presentation_info.css";
import { Container, Button, ButtonGroup, Input, Label } from "reactstrap";
import SaveButton from "../../shared/SaveButton/save_button";
import DataManager from "../../data_module/DataManager";
import { DefaultEditor } from "react-simple-wysiwyg";
import CompletedImage from "../../media/completed.png";

function PresentationInfo(props) {
  const [rSelected, setRSelected] = useState(null);
  const [saveBtnVisible, setSaveBtnVisible] = useState(false);
  const [user, setUser] = useState({
    attending_conference: "",
    speaker_intro: "",
    presentation_synopsis_title: "",
    presentation_synopsis: "",
  });

  const users_id = sessionStorage.getItem(`logged_in_user`);

  const handleFieldChange = (e) => {
    setUser({
      ...user,
      [e.currentTarget.id]: e.target.value,
    });
    setTimeout(() => {
      setSaveBtnVisible(true);
    }, 100);
  };

  const updateAttending = (e) => {
    e.target.value === "Yes" ? setRSelected("Yes") : setRSelected("No");
    setTimeout(() => {
      setSaveBtnVisible(true);
    }, 100);
  };

  const updateUser = () => {
    const edited_user = {
      speaker_intro: user.speaker_intro,
      presentation_synopsis: user.presentation_synopsis,
      presentation_synopsis_title: user.presentation_synopsis_title,
      attending_conference: rSelected,
    };
    DataManager.updateUser(users_id, edited_user).then(() => {});
  };

  const getLoggedInUser = () => {
    const current_user = sessionStorage.getItem(`logged_in_user`);
    DataManager.getUser(current_user).then((data) => {
      setUser(data);
      setRSelected(data.attending_conference);
    });
  };

  useEffect(() => {
    const user_id = sessionStorage.getItem(`logged_in_user`);
    props.setHasUser(user_id);
    getLoggedInUser();
  }, []);

  return (
    <>
      <Container className="headerMargin">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-12">
              <h3>Presentation Details Page</h3>
              <h6>
                The following information is required of ALL presenters unless
                noted otherwise.
              </h6>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3">
                      <h6 className="mb-0">Signed Contract</h6>
                      <p>*Not required of oral or poster abstract presenters</p>
                    </div>
                    <div className="col-4 text-secondary">
                      <Button
                        href="https://www.dropbox.com/request/82Pl4Dhc57Maa4qPXkpp"
                        target="_blank"
                        color="primary"
                      >
                        Upload
                      </Button>
                    </div>
                    <div className="col-3">
                      {user.signed_contract ? (
                        <img src={CompletedImage} height="50px"></img>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Professional CV</h6>
                      <p>
                        *This is NOT required for oral or poster abstract
                        presenters
                      </p>
                    </div>
                    <div className="col-4 text-secondary">
                      <Button
                        href="https://www.dropbox.com/request/IAdS6QNz3yjBva2iekFl"
                        target="_blank"
                        color="primary"
                      >
                        Upload
                      </Button>
                    </div>
                    <div className="col-3">
                      {user.cv ? (
                        <img src={CompletedImage} height="50px"></img>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Professional Photo</h6>
                      <p>*High resolution (300+ dpi)</p>
                    </div>
                    <div className="col-4 text-secondary">
                      <Button
                        href="https://www.dropbox.com/request/1KnCvEbGaNbFF6pRvkAp"
                        target="_blank"
                        color="primary"
                      >
                        Upload
                      </Button>
                    </div>
                    <div className="col-3">
                      {user.professional_photo ? (
                        <img src={CompletedImage} height="50px"></img>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Speaker Notes</h6>
                      <p>
                        *Technician Workshop speaker notes due 8/1/2021.
                        Resident Review Workshop speaker notes due 10/1/2021. No other presenters are required to upload speaker notes.
                      </p>
                    </div>
                    <div className="col-4 text-secondary">
                      <Button
                        href="https://www.dropbox.com/request/LlM1HxbhkEL3DVzFte0h"
                        target="_blank"
                        color="primary"
                      >
                        Upload
                      </Button>
                    </div>
                    <div className="col-3">
                      {user.speaker_notes ? (
                        <img src={CompletedImage} height="50px"></img>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Speaker Introduction</h6>
                      <p>*How you wish to be introduced; 50-75 words.</p>
                    </div>
                    <div className="col-sm-9 text-secondary quillContainer">
                      <DefaultEditor
                        id="speaker_intro"
                        value={user.speaker_intro || ""}
                        onChange={handleFieldChange}
                      />
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <h6 className="col-sm-3">Presentation Title</h6>
                    <div className="col-sm-9">
                      <Input
                        id="presentation_synopsis_title"
                        type="text"
                        value={user.presentation_synopsis_title || ""}
                        placeholder="Add Presentation Title"
                        onChange={handleFieldChange}
                      ></Input>
                      <br></br>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Presentation Synopsis</h6>
                      <p>
                        250-300 words. This section is not required of oral and
                        poster abstract presenters.
                      </p>
                    </div>
                    <div className="col-sm-9 text-secondary quillContainer">
                      <DefaultEditor
                        id="presentation_synopsis"
                        value={user.presentation_synopsis || ""}
                        onChange={handleFieldChange}
                      />
                    </div>
                  </div>
                  <hr></hr>
                  <p className="mb-0">
                    Refer to your contract to determine if conference
                    registration is complimentary.
                  </p>
                  <br></br>
                  <div className="row">
                    <div className="col-sm-3">
                      <p>Do you plan to register for the conference?</p>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <ButtonGroup>
                        <Button
                          color="primary"
                          value="Yes"
                          onClick={updateAttending}
                          active={rSelected === "Yes"}
                        >
                          Yes
                        </Button>
                        <Button
                          color="primary"
                          value="No"
                          onClick={updateAttending}
                          active={rSelected === "No"}
                        >
                          No
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
            window.location.href = "/speaker_details";
          }}
        >
          Previous
        </Button>
        <Button
          color="primary"
          className="navButton"
          onClick={() => {
            window.location.href = "/continuing_education";
          }}
        >
          Next
        </Button>
      </Container>
    </>
  );
}

export default PresentationInfo;
