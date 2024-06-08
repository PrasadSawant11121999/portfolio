import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';
import '../Global.css';

const NavigationBar = () => {
  const Name = {
    FirstName: 'Prasad', 
    LastName: 'Sawant' 
  };
  return (
    <Navbar className='bg-dark-custom' variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#home">
        <span className="Brand-FirstName">
          {Name.FirstName}
        </span>
        <span className="Brand-LastName">
        {Name.LastName}
        </span>        
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="custom-nav-link">Home</Nav.Link>
          <Nav.Link href="#portfolio" className="custom-nav-link">Portfolio</Nav.Link>
          <Nav.Link href="#contact" className="custom-nav-link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
