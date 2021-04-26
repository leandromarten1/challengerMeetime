import React from 'react';
import NotFound from '../pages/NotFound';
import renderWithRouter from './renderWithRouter';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

test('Aparece o heading<h3> com o texto Página não encontrada', () => {
  const { getByRole } = renderWithRouter(<NotFound />);
  const title = getByRole('heading');
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('Página não encontrada :(');
});

test('Contem um link que redireciona para /leads', () => {
  const { getByText, history } = renderWithRouter(<NotFound />);
  const link = getByText('Listar os leads');
  expect(link).toBeInTheDocument();
  userEvent.click(link);
  const { pathname } = history.location;
  expect(pathname).toBe('/leads');
});

test('Contem um link que redireciona para /leads/novo', () => {
  const { getByText, history } = renderWithRouter(<NotFound />);
  const link = getByText('Adicionar novo lead');
  expect(link).toBeInTheDocument();
  userEvent.click(link);
  const { pathname } = history.location;
  expect(pathname).toBe('/leads/novo');
});
