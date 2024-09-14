import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./nav.css";

function NavBar() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} lg={12}>
            <Navbar expand="lg">
              <Navbar.Brand className="logo" href="/">
                ToDo App
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <Nav.Link href="/Project">Sign In</Nav.Link>
                  <Nav.Link href="/Contact">Sign Up</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NavBar;
