import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
function Profile() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const history = useHistory();
  return (
    <div>
      <Navbar className='center'>
        <Container>
          <Navbar.Brand>User Profile</Navbar.Brand>
          <Nav className="me-auto navbar_wrapper"></Nav>
        </Container>
      </Navbar>
      <hr />
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            First Name
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={user.firstName} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Last Name
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={user.lastName} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Address
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={user.address} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Phone
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={user.phone} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={user.email} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Birthday
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={user.birthday} />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Profile;
