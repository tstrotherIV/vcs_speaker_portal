import React, { useState, useEffect } from "react";
import { Button, Container, Table } from "reactstrap";
import DataManager from "../../data_module/DataManager";
import UserIdentHeader from "../../shared/User_Ident_Header/user_identity_header";
import "./info_page.css"

function DeadlinesAndRequirements(props) {
  const [user, setUser] = useState({
    first_name: "",
  });

  const current_user = sessionStorage.getItem(`logged_in_user`);

  const checkForUser = () => {
    const user_id = sessionStorage.getItem(`logged_in_user`);
    props.setHasUser(user_id);
    if (!user_id) {
      props.history.push("/");
    }
  };

  const getLoggedInUser = () => {
    DataManager.getUser(current_user).then((data) => {
      setUser(data);
    });
  };

  useEffect(() => {
    checkForUser();
    getLoggedInUser();
  }, []);

  return (
    <>
      <Container className="pt-4" className="headerMargin">
        <UserIdentHeader />
        <h2>Deadlines &amp; Requirements Page</h2>
        <p>
          Thank you for confirming your participation as a presenter at the VCS
          Annual Conference this year. By agreeing to participate, you must
          provide VCS with a variety of information as dictated by your
          contract, if you have been given one, and based upon your presenter
          type as shown in the list below. You will find the navigation to all
          areas of this speaker portal along the top of this page.
        </p>
        <p>
          Feel free to contact us{" "}
          <a href="mailto:vetcancersociety@yahoo.com">
            vetcancersociety@yahoo.com
          </a>{" "}
          with any questions that you may have and report any technical issues
          you encounter along the way to{" "}
          <a href="mailto:tom@liveitnowent.com">tom@liveitnowent.com</a>.
        </p>
      </Container>

      <Container className="pt-4">
        <h4>
          Please complete the various sections of this portal based on your
          presenter title:
        </h4>
        <ul>
          <li>Keynote Presenters: All sections.</li>
          <li>Specialty Session Presenters: All sections.</li>
          <li>
            Resident Review and Pre-Conference Workshop Presenters: All
            sections.
          </li>
          <li>Technician Workshop Presenters: All sections.</li>
          <li>
            Oral Abstract Presenters: All sections except Lodging.
          </li>
          <li>
            Poster Abstract Presenters: Only complete Speaker Details and
            Presentation Details pages.
          </li>
        </ul>
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
              <td>05/01/2022</td>
            </tr>
            <tr>
              <th scope="row">
                <p>Presentation Details</p>
              </th>
              <td>05/01/2022</td>
            </tr>
            <tr>
              <th scope="row">
                <p>CE Information</p>
              </th>
              <td>08/01/2022</td>
            </tr>
            <tr>
              <th scope="row">
                <p>Technician Speaker Notes</p>
              </th>
              <td>08/01/2022</td>
            </tr>
            
            <tr>
              <th scope="row">
                <p>
                  Resident Review Speaker Notes
                </p>
              </th>
              <td>10/01/2022</td>
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
