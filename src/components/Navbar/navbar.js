import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import VCSlogo from "../../media/VCSlogo.png";
import DataManager from "../../data_module/DataManager";

const TopNav = (props) => {
  const [isOpen, setIsOpen] = useState(props.hasUser);
  const [loggedINUser, setLoggedInUser] = useState("");

  const session_id = sessionStorage.getItem(`session_id`);

  const handleLogout = () => {
    DataManager.logoutUser(session_id).then(() => {
      sessionStorage.removeItem("logged_in_user");
      sessionStorage.removeItem("session_id");
      window.location.href = "/";
    });
  };

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (props.hasUser) {
      setLoggedInUser(true);
    }
  }, [props.hasUser]);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">VCS Speaker Portal</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {loggedINUser ? (
              <>
                <NavItem>
                  <NavLink href="/deadlines_and_Requirements">
                    Deadlines & Requirements
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/speaker_details">Speaker Details</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/presentation_details">
                    Presentation Details
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/continuing_education">CE Information</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/user_travel_info">Lodging</NavLink>
                </NavItem>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Contact Us
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <p>Sandi Strother</p>
                      <p>Email: vetcancersociety@yahoo.com</p>
                      <p>Phone: 573.823.8497</p>
                      <p>Address P.O. Box 30855 Columbia, MO 65205</p>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="http://vetcancersociety.org/" target="_blank">
                    VCS Website
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" onClick={handleLogout}>Logout</NavLink>
                </NavItem>
              </>
            ) : (
              ""
            )}
          </Nav>
          <img src={VCSlogo} height="70px"></img>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopNav;
