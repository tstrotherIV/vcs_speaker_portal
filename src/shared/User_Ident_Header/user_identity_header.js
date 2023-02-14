import React, { useState, useEffect } from "react";
import { Jumbotron } from "reactstrap";
import DataManager from "../../data_module/DataManager";

function UserIdentHeader(props) {
  const [user, setUser] = useState({
    first_name: "",
  });

  const current_user = sessionStorage.getItem(`logged_in_user`);

  const getLoggedInUser = () => {
    DataManager.getUser(current_user).then((data) => {
      setUser(data);
    });
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  return (
    <>
      <h3 className="display-5">
        Hello, {user.first_name} {user.last_name}
      </h3>
    </>
  );
}

export default UserIdentHeader;
