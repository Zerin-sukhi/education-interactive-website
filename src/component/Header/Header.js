import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';

const Header = () => {
  return (
    <div className="navbar">
      <Navbar bg="light" expand="lg">
        <Container fluid className="head">
          <div>
            <img />
            <span>Green University Of Bangladesh</span>
          </div>
          <div>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home" style={{ textDecoration: "none", fontSize: "20px", marginRight: "10px", padding: "6px", }}>Home</Nav.Link>
            <Nav.Link href="/about" style={{ textDecoration: "none", fontSize: "20px", marginRight: "10px", padding: "6px", }}>About Us</Nav.Link>
            <Nav.Link href="/course" style={{ textDecoration: "none", fontSize: "20px", marginRight: "10px", padding: "6px", }}>Courses</Nav.Link>
            <Nav.Link href="/platform" style={{ textDecoration: "none", fontSize: "20px", marginRight: "10px", padding: "6px", }}>Platform</Nav.Link>
          </Nav>
          </div>
          
          
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;