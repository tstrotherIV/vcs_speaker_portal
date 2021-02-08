import React from "react";
import { Container, Button } from "reactstrap";
import "./pageNav.css";

function PageNav() {
  return (
    <>
      <Container className="navButtons p-3">
        <h6 className="m-2">Personal Info</h6>
        <div className="drawLine"></div>
        <h6 className="m-2">Presentation Info</h6>
      </Container>
    </>
  );
}

export default PageNav;
