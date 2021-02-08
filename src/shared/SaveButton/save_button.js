import React from "react";
import { Container, Button } from "reactstrap";
import "./save_button.css"

function SaveButton() {
  return (
    <>
      <Container>
        <Button className="saveBtn">Save Detail</Button>
      </Container>
    </>
  );
}

export default SaveButton;
