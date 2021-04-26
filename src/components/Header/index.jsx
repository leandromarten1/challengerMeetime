import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Container>
        <Navbar.Brand href='/leads'>
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
            <Nav.Link href='/leads' data-testid='link-leads'>
              Leads
            </Nav.Link>
            <Nav.Link href='/leads/novo' data-testid='link-adicionar'>
              Adicionar
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
