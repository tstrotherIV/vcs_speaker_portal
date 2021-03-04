import React, { useState, useEffect } from "react";
import "./continuing_ed.css";
import { Container, Button } from "reactstrap";
import docTemplate from "../../media/VCS Continuing Education Q&A Template.docx";
import "./continuing_ed.css";

function ContinuingEducation(props) {
  const [saveBtnVisible, setSaveBtnVisible] = useState(false);

  useEffect(() => {
    const user_id = sessionStorage.getItem(`logged_in_user`);
    props.setHasUser(user_id);
  }, []);

  return (
    <>
      <Container className="headerMargin">
        <div className="main-body">
          <div className="row">
            <div className="col-md-12">
              <h3>Continuing Education Page</h3>
              <h6>
                All presenters, except for poster abstract presenters, are
                required to submit three learning objectives and five multiple
                choice questions with answers. Download the template found here
                and follow the directions on the template closely before
                uploading to the speaker portal. Your CE document is due no
                later than August 1st.
              </h6>
              <br></br>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">
                        VCS Continuing Education Q&A Template
                      </h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <a href={docTemplate} download>
                        Download File
                      </a>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Upload Completed File</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Button
                        href="https://www.dropbox.com/request/ORBJR9nRTa3t4MIJfPGR"
                        target="_blank"
                        color="primary"
                      >
                        Upload
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="footer-container">
        <Button
          color="primary"
          className="navButton"
          onClick={() => {
            window.location.href = "/presentation_details";
          }}
        >
          Previous
        </Button>
        <Button
          color="primary"
          className="navButton"
          onClick={() => {
            window.location.href = "/user_travel_info";
          }}
        >
          Next
        </Button>
      </Container>
    </>
  );
}

export default ContinuingEducation;
