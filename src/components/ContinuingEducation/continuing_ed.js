import React from "react";
import "./continuing_ed.css";
import { Container, Row, Col } from "reactstrap";
import TextareaAutosize from "react-textarea-autosize";
import SaveButton from "../../shared/SaveButton/save_button";

function ContinuingEducation() {
  return (
    <>
      <Container>
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-12">
              <h3>Continuing Education Page</h3>
              <h6>
                The following information is required of all presenters
                including oral abstract presenters. You may use multiple choice
                or true/false questions. Poster abstract presenters do not need
                to enter this information.
              </h6>
              <div className="card mb-3">
                <div className="card-body">
                  <div>
                    <h5>Example of how to format your question and answers:</h5>
                    <div>
                      <p>What is the first letter of the alphabet?</p>
                      <ol>
                        <li>B</li>
                        <li>K</li>
                        <li>M</li>
                        <li>A</li>
                      </ol>
                    </div>
                    <p>The correct answer is #4</p>
                  </div>
                  <hr></hr>
                  <div>
                    <h5>Learning Objectives</h5>
                    <p>Enter two or three learning objectives</p>
                  </div>
                  <hr></hr>
                  <div>
                    <h5>Multiple Choice or True/False Questions</h5>
                  </div>

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

export default ContinuingEducation;
