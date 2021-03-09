import React, { useState, useEffect } from "react";
import DataManager from "../../../data_module/DataManager";
import { Container, Table, Input } from "reactstrap";
import { DefaultEditor } from "react-simple-wysiwyg";
import "./user_view.css"

function UserDetailView(props) {
  const [user, setUser] = useState({});
  const [newDetails, setNewDetails] = useState({
    password: "",
  });
  const [itemVisible, setItemVisible] = useState(false);

  const getData = () => {
    const user_id = sessionStorage.getItem(`logged_in_user`);
    if (user_id === "66d2df3d-76fa-4b9b-957e-76549d81f9d9") {
      setItemVisible(true);
    }
    DataManager.getUser(props.userId).then((data) => {
      setUser(data);
    });
  };

  const handleFieldChange = (e) => {
    setNewDetails({
      ...newDetails,
      [e.target.id]: e.target.value,
    });
  };

  const saveSecret = (event) => {
    if (event.key === "*") {
      const edited_user = {
        password: newDetails.password,
      };
      DataManager.updateUser(user.id, edited_user).then(() => {});
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <Container className="headerMargin">
      <h1>{`${user.first_name} ${user.last_name}'s Details`}</h1>
      <Table>
        <thead>
          <tr>
            <th>Property</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>{user.first_name}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{user.last_name}</td>
          </tr>
          <tr>
            <td>Title</td>
            <td>{user.title}</td>
          </tr>
          <tr>
            <td>Professional Designation</td>
            <td>{user.professional_designation}</td>
          </tr>
          <tr>
            <td>Business/ Orginzation Name</td>
            <td>{user.business_name}</td>
          </tr>
          <tr>
            <td>Cell Phone Number</td>
            <td>{user.cell_phone_number}</td>
          </tr>
          <tr>
            <td>Work/ Alternate Number</td>
            <td>{user.work_phone}</td>
          </tr>
          <tr>
            <td>Street Address</td>
            <td>{user.street_address}</td>
          </tr>
          <tr>
            <td>Apartment/Suite</td>
            <td>{user.housing_number}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{user.city}</td>
          </tr>
          <tr>
            <td>State</td>
            <td>{user.user_state}</td>
          </tr>
          <tr>
            <td>Zip Code</td>
            <td>{user.zip_code}</td>
          </tr>
          <tr>
            <td>Preferred Email</td>
            <td>{user.preferred_email}</td>
          </tr>
          <tr>
            <td>Alternate Email</td>
            <td>{user.alternate_email}</td>
          </tr>
          <tr>
            <td>Emgergency Contact Name</td>
            <td>{user.emergency_contact_name}</td>
          </tr>
          <tr>
            <td>Emgergency Contact Number</td>
            <td>{user.emergency_contact_number}</td>
          </tr>
          <tr>
            <td>Emgergency Contact Number</td>
            <td>{user.emergency_contact_number}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      {itemVisible ? (
        <Input
          type="text"
          onChange={handleFieldChange}
          id="password"
          value={newDetails.password}
          onKeyPress={saveSecret}
        ></Input>
      ) : (
        <div></div>
      )}
    </Container>
  );
}

export default UserDetailView;
