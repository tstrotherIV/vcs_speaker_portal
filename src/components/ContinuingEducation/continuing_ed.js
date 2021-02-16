import React, { useState, useEffect } from "react";
import "./continuing_ed.css";
import { Container, Row, Col } from "reactstrap";
import SaveButton from "../../shared/SaveButton/save_button";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function ContinuingEducation(props) {
  const [saveBtnVisible, setSaveBtnVisible] = useState(false);

  // Learning Objectives State
  const [learning_objectives_1, setlearning_objectives_1] = useState({
    learning_objectives_1: "",
  });
  const [learning_objectives_2, setlearning_objectives_2] = useState({
    learning_objectives_2: "",
  });
  const [learning_objectives_3, setlearning_objectives_3] = useState({
    learning_objectives_3: "",
  });

  // True/False State
  const [true_false_1, settrue_false_1] = useState({
    true_false_1: "",
  });
  const [true_false_2, settrue_false_2] = useState({
    true_false_2: "",
  });
  const [true_false_3, settrue_false_3] = useState({
    true_false_3: "",
  });
  const [true_false_4, settrue_false_4] = useState({
    true_false_4: "",
  });
  const [true_false_5, settrue_false_5] = useState({
    true_false_5: "",
  });

  // Learning Objectives Handle Change
  const handleChange_learning_objectives_1 = (e) => {
    setlearning_objectives_1({
      ...learning_objectives_1,
      learning_objectives_1: e,
    });
    setSaveBtnVisible(true);
  };

  const handleChange_learning_objectives_2 = (e) => {
    setlearning_objectives_2({
      learning_objectives_2: e,
    });
    setSaveBtnVisible(true);
  };

  const handleChange_learning_objectives_3 = (e) => {
    setlearning_objectives_3({
      learning_objectives_3: e,
    });
    setSaveBtnVisible(true);
  };

  // True/False Handle Change
  const handleChange_true_false_1 = (e) => {
    settrue_false_1({
      ...true_false_1,
      true_false_1: e,
    });
    setSaveBtnVisible(true);
  };
  const handleChange_true_false_2 = (e) => {
    settrue_false_2({
      ...true_false_2,
      true_false_2: e,
    });
    setSaveBtnVisible(true);
  };
  const handleChange_true_false_3 = (e) => {
    settrue_false_3({
      ...true_false_3,
      true_false_3: e,
    });
    setSaveBtnVisible(true);
  };
  const handleChange_true_false_4 = (e) => {
    settrue_false_4({
      ...true_false_4,
      true_false_4: e,
    });
    setSaveBtnVisible(true);
  };
  const handleChange_true_false_5 = (e) => {
    settrue_false_5({
      ...true_false_5,
      true_false_5: e,
    });
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
                        <ReactQuill
                          className="quillBox"
                          name="true_false_1"
                          value={true_false_1.true_false_1}
                          onChange={handleChange_true_false_1}
                        />
                        <br></br>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Question 2</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <ReactQuill
                          className="quillBox"
                          name="true_false_2"
                          value={true_false_2.true_false_2}
                          onChange={handleChange_true_false_2}
                        />
                        <br></br>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Question 3</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <ReactQuill
                          className="quillBox"
                          name="true_false_3"
                          value={true_false_3.true_false_3}
                          onChange={handleChange_true_false_3}
                        />
                        <br></br>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Question 4</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <ReactQuill
                          className="quillBox"
                          name="true_false_4"
                          value={true_false_4.true_false_4}
                          onChange={handleChange_true_false_4}
                        />
                        <br></br>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Question 5</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <ReactQuill
                          className="quillBox"
                          name="true_false_5"
                          value={true_false_5.true_false_5}
                          onChange={handleChange_true_false_5}
                        />
                        <br></br>
                      </div>
                    </div>
                  </Container>
                </div>
              </div>
              <div className="saveBtn">
                <SaveButton
                  saveBtnVisible={saveBtnVisible}
                  setSaveBtnVisible={setSaveBtnVisible}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ContinuingEducation;
