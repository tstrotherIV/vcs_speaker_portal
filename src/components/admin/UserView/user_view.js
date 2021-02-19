import React, { useState, useEffect } from "react";
import DataManager from "../../../data_module/DataManager";
import { Container, Table } from "reactstrap";
import { DefaultEditor } from "react-simple-wysiwyg";

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
            <td>Learning Objective 1</td>
            <td><DefaultEditor value={user.learning_objectives_1 || ""} /></td>
          </tr>
          <tr>
            <td>Learning Objective 2</td>
            <td><DefaultEditor value={user.learning_objectives_2 || ""} /></td>
          </tr>
          <tr>
            <td>Learning Objective 3</td>
            <td>
              <DefaultEditor value={user.learning_objectives_3 || ""} />
            </td>
          </tr>
          <tr>
            <td>True/ False 1</td>
            <td>
              <DefaultEditor value={user.true_false_1 || ""} />
            </td>
          </tr>
          <tr>
            <td>True/ False 2</td>
            <td>
              <DefaultEditor value={user.true_false_2 || ""} />
            </td>
          </tr>
          <tr>
            <td>True/ False 3</td>
            <td>
              <DefaultEditor value={user.true_false_3 || ""} />
            </td>
          </tr>
          <tr>
            <td>True/ False 4</td>
            <td>
              <DefaultEditor value={user.true_false_4 || ""} />
            </td>
          </tr>
          <tr>
            <td>True/ False 5</td>
            <td>
              <DefaultEditor value={user.true_false_5 || ""} />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default UserDetailView;
