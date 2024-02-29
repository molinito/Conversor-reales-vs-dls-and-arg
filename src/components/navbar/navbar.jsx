import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar
      style={{ backgroundColor: "#ff7f00"}}
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="flex-column flex-md-row"
    >
      <Navbar.Brand>
        <img src={logo} alt="logo" className="navbar-logo" />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="ml-auto order-1 order-md-0"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-0" style={{ width: "100%", justifyContent:"space-between" }}>
          <Nav.Link as={Link} to="terms-of-service">Condiciones</Nav.Link>
          <Nav.Link as={Link} to="/about">Acerca</Nav.Link>
          <Nav.Link as={Link} to="/donar">Donación</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
