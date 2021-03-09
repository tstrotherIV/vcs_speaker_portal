import React, { useState, useEffect } from "react";
import { Container, Table, Button, Input, Row } from "reactstrap";
import "./admin_login.css";
import DataManager from "../../../data_module/DataManager";
import { CSVLink } from "react-csv";

function AdminDashboard(props) {
  const [users, setUsers] = useState([]);

  const getData = () => {
    const isAdmin = sessionStorage.getItem("authorized");

    isAdmin
      ? DataManager.getAllUsers().then((data) => {
          setUsers(data.Items);
        })
      : props.history.push("/vcs-admin-login");
  };

  const session_id = sessionStorage.getItem(`session_id`);
  const handleLogout = () => {
    DataManager.logoutUser(session_id).then(() => {
      sessionStorage.removeItem("logged_in_user");
      sessionStorage.removeItem("session_id");
      sessionStorage.removeItem("authorized");
      window.location.href = "/";
    });
  };

  // //https://github.com/react-csv/react-csv#readme
  // const USERcsvdata = [];
  // users.map((user) => {
  //   const item = {
  //     first_name: user.first_name,
  //     last_name: user.last_name,
  //     title: user.title,
  //     professional_designation: user.professional_designation,
  //     cell_phone_number: user.cell_phone_number,
  //     work_phone: user.work_phone,
  //     preferred_email: user.preferred_email,
  //     alternate_email: user.alternate_email,
  //     street_address: user.street_address,
  //     housing_number: user.housing_number,
  //     city: user.city,
  //     state: user.user_state,
  //     zip_code: user.zip_code,
  //     emergency_contact_name: user.emergency_contact_name,
  //     emergency_contact_number: user.emergency_contact_number,
  //     speaker_intro: user.speaker_intro,
  //     presentation_synopsis_title: user.presentation_synopsis_title,
  //     presentation_synopsis: user.presentation_synopsis,
  //     attending_conference: user.CSVLinkattending_conference,
  //     arrival_date: user.arrival_date,
  //     departure_date: user.departure_date,
  //     hotel_room_type: user.hotel_room_type,
  //     w9: user.w9,
  //     signed_contract: user.signed_contract,
  //     professional_photo: user.professional_photo,
  //     cv: user.cv,
  //     speaker_notes: user.speaker_notes,
  //     ce_document: user.ce_document,
  //   };
  //   USERcsvdata.push(item);
  // });

  const handleCheckboxChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    const userId = target.id;

    const editedSpeaker = {
      [name]: value,
    };
    DataManager.updateUser(userId, editedSpeaker);
    // setUsers({...users, [name]: value})
    console.log(userId, editedSpeaker);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container className="headerMargin">
      <Row>
        {/* <div>
        <CSVLink data={USERcsvdata} onClick={() => {}}>
          Download Complete CSV
        </CSVLink>
      </div> */}
        <div>
          <Button onClick={handleLogout}>Logout</Button>
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
              <th>W9</th>
              <th>Contract</th>
              <th>CV</th>
              <th>Photo</th>
              <th>Speaker Notes</th>
              <th>CE File</th>
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
                  <Input
                    type="checkbox"
                    id={user.id}
                    name="w9"
                    checked={user.w9}
                    onChange={handleCheckboxChange}
                  >
                    w9
                  </Input>
                </td>
                <td>
                  <Input
                    type="checkbox"
                    id={user.id}
                    name="signed_contract"
                    checked={user.signed_contract}
                    onChange={handleCheckboxChange}
                  >
                    Signed Contract
                  </Input>
                </td>
                <td>
                  <Input
                    type="checkbox"
                    id={user.id}
                    name="cv"
                    checked={user.cv}
                    onChange={handleCheckboxChange}
                  >
                    CV
                  </Input>
                </td>
                <td>
                  <Input
                    type="checkbox"
                    id={user.id}
                    name="professional_photo"
                    checked={user.professional_photo}
                    onChange={handleCheckboxChange}
                  >
                    Photo
                  </Input>
                </td>
                <td>
                  <Input
                    type="checkbox"
                    id={user.id}
                    name="speaker_notes"
                    checked={user.speaker_notes}
                    onChange={handleCheckboxChange}
                  >
                    Speaker Notes
                  </Input>
                </td>
                <td>
                  <Input
                    type="checkbox"
                    id={user.id}
                    name="ce_document"
                    checked={user.ce_document}
                    onChange={handleCheckboxChange}
                  >
                    CE file
                  </Input>
                </td>
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
      </Row>
    </Container>
  );
}

export default AdminDashboard;
