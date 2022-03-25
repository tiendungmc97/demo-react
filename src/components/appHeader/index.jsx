import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";
import { NavLink as Link } from "react-router-dom";

AppHeader.propTypes = {};

function AppHeader(props) {
  return (
    <>
      <Navbar color="light" light expand="md">
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to="/">Home</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/todo">Todo</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/form">Form</Link></NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  User
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Information
                  </DropdownItem>
                  <DropdownItem>
                    Change password
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
    </>
  );
}

export default AppHeader;
