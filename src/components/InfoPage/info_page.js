import React from "react";
import { Container, Table } from "reactstrap";

function InfoPage() {
  return (
    <>
      <Container>
        <h2>Info Page</h2>
        <p>
          You will find general conference information here. Feel free to
          contact us with any questions and we'll be sure to respond as quickly
          as possible. Please report any technical issues you have so we can
          remedy those as soon as possible.
        </p>
        <hr></hr>
        <Container>
        <h3>Due Dates</h3>
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>Item</th>
                <th>Submissions Open</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Bios and W9</td>
                <td>02/20/2021</td>
                <td>03/01/2021</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>PowerPoint and Speaker Notes</td>
                <td>5/15/2021</td>
                <td>07/15/2021</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Travel Plans and Revisions</td>
                <td>08/15/2021</td>
                <td>09/01/2021</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Container>
    </>
  );
}

export default InfoPage;
