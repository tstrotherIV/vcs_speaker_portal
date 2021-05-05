import React, { useState, useEffect } from "react";
import { Container, Table, Button, Input, Row } from "reactstrap";
import "./admin_login.css";
import DataManager from "../../../data_module/DataManager";

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

  const handleCheckboxChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    const userId = target.id;

    const editedSpeaker = {
      [name]: value,
    };
    DataManager.updateUser(userId, editedSpeaker).then(() => {
      getData();
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container className="headerMargin">
      <Row>
        <div className="m-auto">
          <h1>Admin Dashboard</h1>
        </div>
        <div className="m-auto">
          <Button onClick={handleLogout}>Logout</Button>
        </div>
        <Table>
          <thead>
            <tr>
              <th className="center">Name</th>
              <th className="center">Phone Number</th>
              <th className="center">Email</th>
              <th className="center">W9</th>
              <th className="center">Contract</th>
              <th className="center">CV</th>
              <th className="center">Photo</th>
              <th className="center">Speaker Notes</th>
              <th className="center">CE File</th>
              <th className="center"></th>
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
                  <input
                    type="checkbox"
                    id={user.id}
                    name="w9"
                    checked={user.w9}
                    onChange={handleCheckboxChange}
                  />
                </td>
                <td className="pl-4">
                  <input
                    type="checkbox"
                    id={user.id}
                    name="signed_contract"
                    checked={user.signed_contract}
                    onChange={handleCheckboxChange}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    id={user.id}
                    name="cv"
                    checked={user.cv}
                    onChange={handleCheckboxChange}
                  />
                </td>
                <td className="pl-4">
                  <input
                    type="checkbox"
                    id={user.id}
                    name="professional_photo"
                    checked={user.professional_photo}
                    onChange={handleCheckboxChange}
                  />
                </td>
                <td className="pl-5">
                  <Input
                    type="checkbox"
                    id={user.id}
                    name="speaker_notes"
                    checked={user.speaker_notes}
                    onChange={handleCheckboxChange}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    id={user.id}
                    name="ce_document"
                    checked={user.ce_document}
                    onChange={handleCheckboxChange}
                  />
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
