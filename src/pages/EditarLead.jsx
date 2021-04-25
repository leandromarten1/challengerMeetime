import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Formik } from 'formik';
import Header from '../components/Header';

import { Container, Form, Button } from 'react-bootstrap';

import { api } from '../services/api';
import phoneMask from '../utils/phoneMask';

const EditarLead = () => {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    api.get(`leads/?id=${id}`).then(({ data: { data } }) => {
      const response = {
        id: data[0].id,
        name: data[0].lead_name,
        email: data[0].lead_email,
        phone: phoneMask(data[0].phones[0].phone),
      };
      setInitialValues(response);
    });
  }, [id]);

  return (
    <>
      <Header />
      <Container>
        <h3>Editar Lead</h3>
        {initialValues && (
          <Formik
            initialValues={initialValues}
            onSubmit={(values, form) => {
              console.log(values);
            }}
          >
            {(props) => (
              <Form>
                <Form.Group controlId='name'>
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type='text'
                    onChange={props.handleChange}
                    value={props.values.name}
                  />
                </Form.Group>

                <Form.Group controlId='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    onChange={props.handleChange}
                    value={props.values.email}
                  />
                </Form.Group>

                <Form.Group controlId='phone'>
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control
                    type='text'
                    onChange={props.handleChange}
                    value={props.values.phone}
                  />
                </Form.Group>

                <Button variant='secondary' type='reset'>
                  Limpar
                </Button>
                <Button variant='primary' type='button'>
                  Adicionar
                </Button>
              </Form>
            )}
          </Formik>
        )}
      </Container>
    </>
  );
};

export default EditarLead;
