import React, { useState, useEffect, useCallback } from "react";
import { Jumbotron, Button, Container, Table } from "reactstrap";
import DataManager from "../../data_module/DataManager";
import UserIdentHeader from "../../shared/User_Ident_Header/user_identity_header";
import "./info_page.css";

function DeadlinesAndRequirements(props) {
  const [user, setUser] = useState({
    first_name: "",
  });

  const checkForUserAndGetData = useCallback(() => {
    const user_id = sessionStorage.getItem(`logged_in_user`);
    if (!user_id) {
      props.history.push("/");
      return;
    }
    props.setHasUser(user_id);

    DataManager.getUser(user_id)
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log("Error retrieving user data: ", error);
      });
  }, [props]);

  useEffect(() => {
    checkForUserAndGetData();
  }, [checkForUserAndGetData]);

  return (
    <>
      <Container className="headerMargin pt-4">
        <div>
          <Jumbotron>
            <UserIdentHeader />
            <hr className="my-2" />
            <h1 className="display-4">Deadlines &amp; Requirements</h1>
            <p className="lead">
              Thank you for agreeing to participate as a speaker at the VCS
              Annual Conference. Per your contract, you are required to enter or
              upload a variety of information into this system. Please review
              your contract and adhere to all deadlines shown below.
            </p>
            {/* <hr className="my-2" /> */}
            <p className="lead">
              Contact{" "}
              <a href="mailto:info@vetcancersociety.org">
                info@vetcancersociety.org
              </a>{" "}
              with any questions that you may have.
            </p>
          </Jumbotron>
        </div>
      </Container>

      <Container>
        <h3 className="pt-4">Due Dates</h3>
        <Table>
          <thead>
            <tr>
              <th>Required Items</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <p>Speaker Details</p>
              </th>
              <td>04/01/2024</td>
            </tr>
            <tr>
              <th scope="row">
                <p>Presentation Details</p>
              </th>
              <td>04/01/2024</td>
            </tr>
            <tr>
              <th scope="row">
                <p>CE Information</p>
              </th>
              <td>07/15/2024</td>
            </tr>
            <tr>
              <th scope="row">
                <p>Technician Speaker Notes</p>
              </th>
              <td>07/15/2024</td>
            </tr>

            <tr>
              <th scope="row">
                <p>Resident Review Speaker Notes</p>
              </th>
              <td>10/01/2024</td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <Container className="footer-container">
        <Button
          color="primary"
          className="navButton"
          onClick={() => {
            window.location.href = "/speaker_details";
          }}
        >
          Next
        </Button>
      </Container>
    </>
  );
}

export default DeadlinesAndRequirements;
