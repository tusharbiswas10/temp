import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Sidebar from "./sidebar";
function Profile() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const history = useHistory();
  return (
    <div>
      <div>
        <div className="">
      </div>
        <h1>User Profile</h1>
      </div>
      <hr />
      {/* <Sidebar /> */}
      <Container>
      <Row className="justify-content-center">
        <Col md={6}>
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            First Name  :
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={user.firstName} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Last Name  :
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={user.lastName} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Address  :
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={user.address} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Phone  :
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={user.phone} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email  :
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={user.email} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Birthday  :
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={user.birthday} />
          </Col>
        </Form.Group>
      </Form>
      </Col>
      </Row>
      </Container>
      
      {/* <div className="">
        <h1>User Profile</h1>
      </div> */}
      {/* <hr style={{ border: "1px solid #17202A " }} />
      <div style={{ padding: "0.2rem" }}>
        <div>
          <span style={{ padding: "10px" }}>First Name</span>
          <span style={{ padding: "10px" }}>:</span>

          <span>
            <strong>{user.firstName}</strong>
          </span>
        </div>
        <div>
          <span style={{ padding: "10px" }}>Last Name</span>
          <span style={{ padding: "10px" }}>:</span>

          <span>
            <strong>{user.lastName}</strong>
          </span>
        </div>
        <div>
          <span style={{ padding: "10px" }}>User1</span>
          <span style={{ padding: "10px" }}>:</span>

          <span>
            <strong>{user.address}</strong>
          </span>
        </div>

        <div>
          <span style={{ padding: "10px" }}>Phone</span>
          <span style={{ padding: "10px" }}>:</span>

          <span>
            <strong>{user.phone}</strong>
          </span>
        </div>

        <div>
          <span style={{ padding: "10px" }}>Email</span>
          <span style={{ padding: "10px" }}>:</span>

          <span>
            <strong>{user.email}</strong>
          </span>
        </div>

        <div>
          <span style={{ padding: "10px" }}>Birthday</span>
          <span style={{ padding: "10px" }}>:</span>

          <span>
            <strong>{user.birthday}</strong>
          </span>
        </div>

      </div> */}
    </div>
  );
}

export default Profile;
