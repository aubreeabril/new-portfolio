import React, { Component } from "react";
import { Navbar, NavItem, Nav, NavbarBrand, NavLink } from "reactstrap";

class Menu extends Component {
  render() {
    return (
      <Navbar sticky="top" className="menu">
        <Nav>
          <NavbarBrand href="/portfolio/#aa">
            <strong>AA</strong>
          </NavbarBrand>
          <NavItem>
            <strong>
              <NavLink href="/portfolio/#about">About</NavLink>
            </strong>
          </NavItem>
          <NavItem>
            <strong>
              <NavLink href="/portfolio/#projects">Projects</NavLink>
            </strong>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Menu;
