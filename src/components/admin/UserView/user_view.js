import React, { useState, useEffect } from "react";
import DataManager from "../../../data_module/DataManager";
import { Container, Table } from "reactstrap";


function UserDetailView(props) {
  const [user, setUser] = useState("");

  const getData = () => {
    DataManager.getUser(props.userId).then((data) => {
      setUser(data);
    });
  };

  useEffect(() => {
    getData();
  });

  return (
    <Container>
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
        </tbody>
      </Table>
    </Container>
  );
}

export default UserDetailView;
