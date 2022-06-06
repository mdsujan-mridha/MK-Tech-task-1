import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Header.css";
const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="home"> <img className='logo-img' src="https://i.ibb.co/NYHNWXC/kevin-canlas-QYHeh-J9-Iovs-unsplash.jpg" alt="MK"/> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="home">Home</Nav.Link>
        <Nav.Link href="advertisers"> ADVERTISERS </Nav.Link>
        <Nav.Link href="publishers"> PUBLISHERS </Nav.Link>
        <Nav.Link href="influencers"> INFLUENCERS </Nav.Link>
        <Nav.Link href="adformats"> AD FORMATS </Nav.Link>
        <Nav.Link href="blogs"> BLOG </Nav.Link>
        <Nav.Link href="contactus"> CONTACT US </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;