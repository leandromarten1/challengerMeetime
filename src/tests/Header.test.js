import React from 'react';
import Header from '../components/Header';
import renderWithRouter from './renderWithRouter';
import '@testing-library/jest-dom';

test('Verifica se existe logo no Header', () => {
  const { getByRole } = renderWithRouter(<Header />);
  const image = getByRole('img');
  expect(image).toBeInTheDocument();
  expect(image.src).toBe('http://localhost/logo.png');
});

test('Verifica se existem dois links no Header', () => {
  const { getByText } = renderWithRouter(<Header />);
  const leads = getByText('Leads');
  const adicionar = getByText('Adicionar');
  expect(leads).toBeInTheDocument();
  expect(adicionar).toBeInTheDocument();
});
