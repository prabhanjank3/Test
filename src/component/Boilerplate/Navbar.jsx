import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./css/Navbar.css";
export default (props) => {
  console.log(props);
  return (
    <Navbar bg="dark" variant="dark" className="navbar">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        {props.auth_info.isAuthenticated === false ? (
          <Button variant="outline-info">Login</Button>
        ) : (
          <Button variant="outline-info">{props.auth_info.firstname}</Button>
        )}
      </Form>
    </Navbar>
  );
};
