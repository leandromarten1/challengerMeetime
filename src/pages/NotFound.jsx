import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

import { Container, Table } from 'react-bootstrap';

const NotFound = () => {
  return (
    <>
      <Header />
      <Container>
        <h3>Página não encontrada :(</h3>
        <p>
          Não encontramos a página que você está procurando. Talvez você esteja
          buscando:
        </p>
        <Link to='/leads'>Listar os leads</Link>
        <br />
        <Link to='/leads/novo'>Adicionar novo lead</Link>
      </Container>
    </>
  );
};

export default NotFound;
