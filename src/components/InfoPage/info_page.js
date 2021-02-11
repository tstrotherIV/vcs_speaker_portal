import React from "react";
import { Container, Table } from "reactstrap";

function DeadlinesAndRequirements() {
  return (
    <>
      <Container className="pt-4">
        <h2>Deadlines &amp; Requirements Page</h2>
        <p>
          Thank you for agreeing to be a presenter at the VCS Annual Conference.
          Your participation requires you to provide us with a variety of
          information based upon your presenter type and as dictated by your
          contract (if you have one). We appreciate your attention to the
          deadlines posted below.{" "}
        </p>
        <p>
          Feel free to contact us <a href="mailto:vetcancersociety@yahoo.com">vetcancersociety@yahoo.com</a> with
          any questions that you may have and report any technical issues you
          encounter along the way to <a href="mailto:tom@liveitnowent.com">tom@liveitnowent.com</a>.
        </p>
      </Container>

      <Container className="pt-4">
        <h4>
          Please complete the various sections of this portal based on your
          presenter title:
        </h4>
        <ul>
          <li>Keynote Presenters: All sections.</li>
          <li>Concurrent Specialty Session Presenters: All sections.</li>
          <li>
            Resident Review and Pre-Conference Workshop Presenters: All
            sections.
          </li>
          <li>
            Technician Workshop Presenters: All sections except Lodging.
          </li>
          <li>
            15 Minute Oral Abstract Presenters: All sections speaker
            lodging.
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
              <th scope="row">Speaker Details</th>
              <td>05/01/2021</td>
            </tr>
            <tr>
              <th scope="row">Presentation Details</th>
              <td>05/01/2021</td>
            </tr>
            <tr>
              <th scope="row">CE Information</th>
              <td>08/01/2021</td>
            </tr>
            <tr>
              <th scope="row">Technician Speaker Notes</th>
              <td>08/01/2021</td>
            </tr>
            <tr>
              <th scope="row">Lodging Information (specific speakers only)</th>
              <td>09/01/2021</td>
            </tr>
            <tr>
              <th scope="row">Resident Review Speaker Notes</th>
              <td>10/01/2021</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default DeadlinesAndRequirements;
