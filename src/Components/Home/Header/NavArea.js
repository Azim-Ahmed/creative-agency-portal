import React, { useContext, useState } from "react";
import {
  NavbarToggler,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Collapse,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../App";

const NavArea = () => {
  const [loggedInUser] = useContext(UserContext);

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand>
          <NavLink to="/">
            <img
              className="logoStyle"
              src="https://i.ibb.co/kmzR5Ly/logo.png"
              alt="logo of the website"
            />
          </NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2 bg-dark" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ml-auto align-items-center" navbar>
            <NavItem>
              <NavLink className="mr-3 text-dark" to="/home">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mr-4 text-dark" to="/portfolio">
                Our Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mr-3 text-dark" to="/customer">
                Our Team
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mr-3 text-dark" to="/#contact">
                Contact Us
              </NavLink>
            </NavItem>

            <NavItem>
              {loggedInUser.email ? (
                <h5>{loggedInUser.name}</h5>
              ) : (
                <Button
                  outline
                  color="danger"
                  className="text-center text-dark"
                >
                  <NavLink className="mr-3 text-dark" to="/login">
                    Login
                  </NavLink>
                </Button>
              )}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavArea;
