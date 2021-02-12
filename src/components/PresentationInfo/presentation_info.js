import React, { useState } from "react";
import "./presentation_info.css";
import { Container, Button, ButtonGroup } from "reactstrap";
import TextareaAutosize from "react-textarea-autosize";
import SaveButton from "../../shared/SaveButton/save_button";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function PresentationInfo() {
  const [rSelected, setRSelected] = useState(null);

  const [saveBtnVisible, setSaveBtnVisible] = useState(false);

  //Speaker Intro State
  const [speaker_intro, setSpeakerIntro] = useState({
    speaker_intro: "",
  });

  //Presentation Synopsis State
  const [presentation_synopsis, setPresentation_Synopsis] = useState({
    presentation_synopsis: "",
  });

  // Speaker Intro Handle Change
  const handleChange_speaker_intro = (e) => {
    setSpeakerIntro({
      ...speaker_intro,
      speaker_intro: e,
    });
    setSaveBtnVisible(true);
  };

  // Speaker Intro Handle Change
  const handleChange_presentation_synopsis = (e) => {
    setPresentation_Synopsis({
      ...presentation_synopsis,
      presentation_synopsis: e,
    });
    setSaveBtnVisible(true);
  };

  return (
    <>
      <Container>
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
                    <div className="col-sm-3">
                      <h6 className="mb-0">Signed Contract</h6>
                      <p>*Not required of oral or poster abstract presenters</p>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Button color="primary">Upload</Button>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Professional Photo</h6>
                      <p>*High resolution (300+ dpi)</p>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Button color="primary">Upload</Button>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full CV</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Button color="primary">Upload</Button>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Speaker Notes</h6>
                      <p>
                        *Resident Review and Technician Workshop speakers only
                      </p>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Button color="primary">Upload</Button>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Speaker Introduction</h6>
                      <p>*How you wish to be introduced; 50-100 words.</p>
                    </div>
                    <div className="col-sm-9 text-secondary quillContainer">
                      <ReactQuill
                        className="quillBox2"
                        name="speaker_intro"
                        value={speaker_intro.speaker_intro}
                        onChange={handleChange_speaker_intro}
                      />
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Presentation Synopsis</h6>
                      <p>
                        250-300 words. NOT required of oral or poster abstract
                        presenters.
                      </p>
                    </div>
                    <div className="col-sm-9 text-secondary quillContainer">
                      <ReactQuill
                        className="quillBox2"
                        name="presentation_synopsis"
                        value={presentation_synopsis.presentation_synopsis}
                        onChange={handleChange_presentation_synopsis}
                      />
                    </div>
                  </div>
                  <hr></hr>
                  <p className="mb-0">
                    Conference registration is included for some presenters.
                    Refer to your contract to determine if it is. Oral and
                    poster presenters must be registered for the conference in
                    order to present their abstract.
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
                          onClick={() => setRSelected("Yes")}
                          active={rSelected === "Yes"}
                        >
                          Yes
                        </Button>
                        <Button
                          color="primary"
                          onClick={() => setRSelected("No")}
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
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default PresentationInfo;
