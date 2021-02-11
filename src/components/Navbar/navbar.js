import React, { useState } from "react";
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
  NavbarText,
} from "reactstrap";
import VCSlogo from "../../media/VCSlogo.png";

const TopNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">VCS Speaker Portal</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/deadlines_and_Requirements">Deadlines & Requirements</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/speaker_details">Speaker Details</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/presentation_details">Presentation Details</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/continuing_education">CE Information</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/user_travel_info">Lodging</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://vetcancersociety.org/" target="_blank">
                VCS Website
              </NavLink>
            </NavItem>
          </Nav>
          <img src={VCSlogo} height="70px"></img>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopNav;
