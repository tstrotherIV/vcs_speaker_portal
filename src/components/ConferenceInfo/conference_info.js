import React from "react";
import "./conference_info.css";
import { Container, Button } from "reactstrap";
import TextareaAutosize from "react-textarea-autosize";
import SaveButton from "../../shared/SaveButton/save_button";

function UserConferenceInfo() {
  return (
    <>
      <Container>
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-12">
              <h3>Presentation and Speaker Information</h3>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Signed W9</h6>
                      <p>Only if your honorarium is $600 or more</p>
                      <p>(*Required by Keynote Speakers)</p>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Button>Upload</Button>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Signed Contract</h6>
                      <p>(*Required by Keynote Speakers)</p>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Button>Upload</Button>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Professional Photo</h6>
                      <p>(*Required by Keynote Speakers)</p>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Button>Upload</Button>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Speaker Notes</h6>
                      <p>(*Required by Keynote Speakers)</p>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Button>Upload</Button>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full CV</h6>
                      <p>(*Required by Keynote Speakers)</p>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Button>Upload</Button>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Brief Introduction</h6>
                      <p>100 Words Max</p>
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
                      <h6 className="mb-0">Presentation Synopsis</h6>
                      <p>250-300 words max</p>
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
                        Learning Objectives(List three Objectives)
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
                  <h3>
                    Multiple Choice Questions (type in six questions with
                    answers)
                  </h3>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Question 1</h6>
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
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Question 2</h6>
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
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Question 3</h6>
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
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Question 4</h6>
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
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Question 5</h6>
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
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Question 6</h6>
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

export default UserConferenceInfo;
