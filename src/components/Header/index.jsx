import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Navbar.Brand href='#home'>
        <img
          alt='Meetime'
          src='/logo.png'
          width='104'
          height='34'
          className='d-inline-block align-top'
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href=''>Leads</Nav.Link>
          <Nav.Link href=''>Adicionar</Nav.Link>
          <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
            <NavDropdown.Item href=''>Action</NavDropdown.Item>
            <NavDropdown.Item href=''>Another action</NavDropdown.Item>
            <NavDropdown.Item href=''>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href=''>Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
