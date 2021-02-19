import React, { useState, useEffect } from "react";
import "./continuing_ed.css";
import { Container } from "reactstrap";
import SaveButton from "../../shared/SaveButton/save_button";
import { DefaultEditor } from "react-simple-wysiwyg";
import DataManager from "../../data_module/DataManager";

function ContinuingEducation(props) {
  const [saveBtnVisible, setSaveBtnVisible] = useState(false);
  const [user, setUser] = useState({
    learning_objectives_1: "",
    learning_objectives_2: "",
    learning_objectives_3: "",
    true_false_1: "",
    true_false_2: "",
    true_false_3: "",
    true_false_4: "",
    true_false_5: "",
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

  const updateUser = () => {
    const edited_user = {
      learning_objectives_1: user.learning_objectives_1,
      learning_objectives_2: user.learning_objectives_2,
      learning_objectives_3: user.learning_objectives_3,
      true_false_1: user.true_false_1,
      true_false_2: user.true_false_2,
      true_false_3: user.true_false_3,
      true_false_4: user.true_false_4,
      true_false_5: user.true_false_5,
    };
    console.log(edited_user.true_false_1)
    console.log(edited_user.true_false_2)
    DataManager.updateUser(users_id, edited_user).then(() => {});
  };

  const getLoggedInUser = () => {
    const current_user = sessionStorage.getItem(`logged_in_user`);
    DataManager.getUser(current_user).then((data) => {
      setUser(data);
    });
  };

  useEffect(() => {
    const user_id = sessionStorage.getItem(`logged_in_user`);
    props.setHasUser(user_id);
    getLoggedInUser();
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
                        <DefaultEditor
                          id="learning_objectives_1"
                          value={user.learning_objectives_1 || ""}
                          onChange={handleFieldChange}
                        />
                        <br></br>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 text-secondary">
                        <DefaultEditor
                          id="learning_objectives_2"
                          value={user.learning_objectives_2 || ""}
                          onChange={handleFieldChange}
                        />
                        <br></br>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 text-secondary">
                        <DefaultEditor
                          id="learning_objectives_3"
                          value={user.learning_objectives_3 || ""}
                          onChange={handleFieldChange}
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
                        <DefaultEditor
                          id="true_false_1"
                          value={user.true_false_1 || ""}
                          onChange={handleFieldChange}
                        />
                        <br></br>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Question 2</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <DefaultEditor
                          id="true_false_2"
                          value={user.true_false_2 || ""}
                          onChange={handleFieldChange}
                        />
                        <br></br>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Question 3</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <DefaultEditor
                          id="true_false_3"
                          value={user.true_false_3 || ""}
                          onChange={handleFieldChange}
                        />
                        <br></br>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Question 4</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <DefaultEditor
                          id="true_false_4"
                          value={user.true_false_4 || ""}
                          onChange={handleFieldChange}
                        />
                        <br></br>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Question 5</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <DefaultEditor
                          id="true_false_5"
                          value={user.true_false_5 || ""}
                          onChange={handleFieldChange}
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
                  updateUser={updateUser}
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
