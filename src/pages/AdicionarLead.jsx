import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

import { api, createLead } from '../services/api';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { Container, Form, Button } from 'react-bootstrap';

const validationSchema = yup.object().shape({
  cadence: yup.string().required(' Campo obrigatório - Escolha uma Cadência'),
  name: yup.string(),
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
  phone: yup.number(),
});

const AdicionarLead = () => {
  const [cadencias, setCadencias] = useState([]);

  useEffect(() => {
    api.get('cadences').then(({ data }) => {
      const cadences = data.data.map((cadencia) => {
        return {
          name: cadencia.name,
          idCadence: cadencia.id,
          tokenCadence: cadencia.token,
        };
      });
      setCadencias(cadences);
    });
  }, []);

  const formik = useFormik({
    onSubmit: async (values, _form) => {
      const response = await createLead(
        values.cadence,
        values.name,
        values.email,
        values.phone,
      );
      return response;
    },
    validationSchema,
    initialValues: {
      cadence: '',
      name: '',
      email: '',
      phone: '',
    },
  });

  return (
    <>
      <Header />
      <Container>
        <h3>Adicionar Lead</h3>
        <Form>
          <Form.Group controlId='cadence'>
            <Form.Label>Cadência</Form.Label>
            <Form.Control
              as='select'
              onChange={formik.handleChange}
              value={formik.values.cadence}
            >
              <option value='' label='Escolha uma Cadência' />
              {cadencias.map((cadencia) => {
                return (
                  <option
                    key={cadencia.idCadence}
                    value={`${cadencia.idCadence}/lead?token=${cadencia.tokenCadence}`}
                    label={cadencia.name}
                  />
                );
              })}
            </Form.Control>
            {formik.touched.cadence && (
              <Form.Text className='text-danger'>
                {formik.errors.cadence}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group controlId='name'>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type='text'
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && (
              <Form.Text className='text-danger'>
                {formik.errors.name}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && (
              <Form.Text className='text-danger'>
                {formik.errors.email}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group controlId='phone'>
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type='text'
              onChange={formik.handleChange}
              value={formik.values.phone}
              placeholder='(DDD) + Número'
            />
            {formik.touched.phone && (
              <Form.Text className='text-danger'>
                {formik.errors.phone}
              </Form.Text>
            )}
          </Form.Group>

          <Button variant='secondary' type='reset'>
            Limpar
          </Button>
          <Button variant='primary' type='button' onClick={formik.handleSubmit}>
            Adicionar
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AdicionarLead;
