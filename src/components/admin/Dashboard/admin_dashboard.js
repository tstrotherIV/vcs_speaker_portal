import React, { useState, useEffect } from "react";
import { Container, Table, Button, Input } from "reactstrap";
import "./admin_login.css";
import DataManager from "../../../data_module/DataManager";
import { CSVLink } from "react-csv";
import UserDetailView from "../UserView/user_view";

function AdminDashboard(props) {
  const [users, setUsers] = useState([]);

  const getData = () => {
    DataManager.getAllUsers().then((data) => {
      setUsers(data.Items);
    });
  };

  //https://github.com/react-csv/react-csv#readme
  const USERcsvdata = [];
  users.map((user) => {
    const item = {
      first_name: user.first_name,
      last_name: user.last_name,
      title: user.title,
      professional_designation: user.professional_designation,
      cell_phone_number: user.cell_phone_number,
      work_phone: user.work_phone,
      preferred_email: user.preferred_email,
      alternate_email: user.alternate_email,
      street_address: user.street_address,
      housing_number: user.housing_number,
      city: user.city,
      state: user.user_state,
      zip_code: user.zip_code,
      emergency_contact_name: user.emergency_contact_name,
      emergency_contact_number: user.emergency_contact_number,
      speaker_intro: user.speaker_intro,
      presentation_synopsis: user.presentation_synopsis,
      attending_conference: user.CSVLinkattending_conference,
      learning_objectives_1: user.learning_objectives_1,
      learning_objectives_2: user.learning_objectives_2,
      learning_objectives_3: user.learning_objectives_3,
      true_false_1: user.true_false_1,
      true_false_2: user.true_false_2,
      true_false_3: user.true_false_3,
      true_false_4: user.true_false_4,
      true_false_5: user.true_false_5,
      arrival_date: user.arrival_date,
      departure_date: user.departure_date,
      hotel_room_type: user.hotel_room_type,
      w9_link: user.w9,
      signed_contract_link: user.signed_contract,
      professional_photo_link: user.professional_photo,
      cv_link: user.cv,
      speaker_notes_link: user.speaker_notes,
    };
    USERcsvdata.push(item);
  });

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <div>
        <CSVLink data={USERcsvdata} onClick={() => {}}>
          Download Complete CSV
        </CSVLink>
      </div>
      <div>
        <h1>Admin Dashboard</h1>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                {user.first_name} {user.last_name}
              </td>
              <td>{user.cell_phone_number}</td>
              <td>{user.email}</td>
              <td>
                <Button
                  onClick={() => {
                    props.history.push(`/vcs-admin-dashboard/${user.id}`);
                  }}
                >
                  More Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdminDashboard;
