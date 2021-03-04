import React from "react";
import { Button, Container } from "reactstrap";
import "./footer.css";
import history from "../helpers/history"

function Footer(props) {
  return (
    <Container className="footer-container">
      <Button
        color="primary"
        className="navButton"
        onClick={() => {
          history.push(`${props.back}`);
        }}
      >
        Previous
      </Button>
      <Button
        color="primary"
        className="navButton"
        onClick={() => {
          history.push(`${props.next}`);
        }}
      >
        Next
      </Button>
    </Container>
  );
}

export default Footer;
