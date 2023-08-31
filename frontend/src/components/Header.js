import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";

function Header() {
  let user = JSON.parse(localStorage.getItem('user-info'));
  const history = useHistory(); // Move this hook here

  function Logout() {
    localStorage.clear();
    history.push('/login');
  }
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Portal</Navbar.Brand>
          <Nav className="me-auto navbar_wrapper">

            localStorage.getItem('user-info')?
            <>
              <Link to="/profile">Profile</Link>
            </>
            :
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>

            
          </Nav>
          <Nav>
          {user ? (
              <NavDropdown title={user.firstName}>
                <NavDropdown.Item>Change Password</NavDropdown.Item>
                <NavDropdown.Item onClick={Logout}>Log out</NavDropdown.Item>
              </NavDropdown>
            ) : null}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header