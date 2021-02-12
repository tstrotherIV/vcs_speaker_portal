import React, { useState, useEffect } from "react";
import { Container, Button } from "reactstrap";
import "./save_button.css";

function SaveButton(props) {
  const [editIndicator, setEditIndicator] = useState(false);


  useEffect(() => {
    if (props.saveBtnVisible) {
      setEditIndicator(true)
      props.setSaveBtnVisible(false)
    }
  }, [props.saveBtnVisible]);

  return (
    <>
      <Container>
        {!editIndicator ? (
          ""
        ) : (
          <Button
            color="danger"
            className="saveBtn"
            onClick={() => setEditIndicator(false)}
          >
            Save Changes
          </Button>
        )}
      </Container>
    </>
  );
}

export default SaveButton;
