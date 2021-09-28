import React, { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import './navigation-styles.scss';

const NavigationBar:FC = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
  <Container fluid>
  <Navbar.Brand href="#home">Restaurant Name Here</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink to="/home" className="navigation-link">Home</NavLink>
      <NavLink to="/about" className="navigation-link">About</NavLink>
      <NavLink to="/ordering" className="navigation-link">Order Now</NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavigationBar
