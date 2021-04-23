import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

import { Container, Table, Button } from 'react-bootstrap';
import { api } from '../services/api';

const Leads = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    api.get('leads').then(({ data }) => {
      console.log(data.data);
      const response = data.data.map((lead) => {
        return {
          id: lead.id,
          name: lead.lead_name,
          email: lead.lead_email,
          createdAt: lead.lead_created_date,
          phone: lead.phones,
        };
      });
      setLeads(response);
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <h3>Leads</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Criado em</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => {
              return (
                <tr key={lead.id}>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.createdAt}</td>
                  {lead.phone.map((phone) => (
                    <td>{phone.phone}</td>
                  ))}
                  <td>
                    <Button variant='info' type='button' size='sm' block>
                      Editar
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Leads;
