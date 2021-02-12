import React, { useState } from "react";
import "./continuing_ed.css";
import { Container, Row, Col } from "reactstrap";
import TextareaAutosize from "react-textarea-autosize";
import SaveButton from "../../shared/SaveButton/save_button";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function ContinuingEducation() {
  const [learning_objectives_1, setlearning_objectives_1] = useState({
    learning_objectives_1: "",
  });
  const [learning_objectives_2, setlearning_objectives_2] = useState({
    learning_objectives_2: "",
  });
  const [learning_objectives_3, setlearning_objectives_3] = useState({
    learning_objectives_3: "",
  });

  const handleChange_learning_objectives_1 = (e) => {
    setlearning_objectives_1({
      ...learning_objectives_1,
      learning_objectives_1: e,
    });
    console.log("quill 1", e);
  };

  const handleChange_learning_objectives_2 = (e) => {
    setlearning_objectives_2({
      learning_objectives_2: e,
    });
    console.log("quill 2", e);
  };

  const handleChange_learning_objectives_3 = (e) => {
    setlearning_objectives_3({
      learning_objectives_3: e,
    });
    console.log("quill 3", e);
  };

  return (
    <>
      <Container>
        <div className="main-body">
          <div className="row">
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
                  <div className="example-question-box">
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
                  <div className="pb-5">
                    <h5>Learning Objectives</h5>
                    <p>Enter two or three learning objectives</p>
                    <div className="row">
                      <div className="col-sm-12 text-secondary">
                        <ReactQuill
                          className="quillBox"
                          name="learning_objectives_1"
                          value={learning_objectives_1.learning_objectives_1}
                          onChange={handleChange_learning_objectives_1}
                        />
                        <br></br>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 text-secondary">
                        <ReactQuill
                          className="quillBox"
                          name="learning_objectives_2"
                          value={learning_objectives_2.learning_objectives_2}
                          onChange={handleChange_learning_objectives_2}
                        />
                        <br></br>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 text-secondary">
                        <ReactQuill
                          className="quillBox"
                          name="learning_objectives_3"
                          value={learning_objectives_3.learning_objectives_3}
                          onChange={handleChange_learning_objectives_3}
                        />
                        <br></br>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <Container>
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
                  </Container>
                </div>
              </div>
              <div className="saveBtn">
                <SaveButton />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ContinuingEducation;
