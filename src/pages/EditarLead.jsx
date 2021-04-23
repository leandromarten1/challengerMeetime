import React from 'react';
import Header from '../components/Header';

import { Container, Form, Button } from 'react-bootstrap';

const EditarLead = () => {
  return (
    <>
      <Header />
      <Container>
        <h3>Editar Lead</h3>
        <Form>
          <Form.Group controlId='cadence'>
            <Form.Label>Cadência</Form.Label>
            <Form.Control as='select'>
              <option value='' label='Escolha uma Cadência' />
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='name'>
            <Form.Label>Nome</Form.Label>
            <Form.Control type='text' value='' />
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' value='' />
          </Form.Group>

          <Form.Group controlId='phone'>
            <Form.Label>Telefone</Form.Label>
            <Form.Control type='text' value='' />
          </Form.Group>

          <Button variant='secondary' type='reset'>
            Limpar
          </Button>
          <Button variant='primary' type='button'>
            Adicionar
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default EditarLead;
