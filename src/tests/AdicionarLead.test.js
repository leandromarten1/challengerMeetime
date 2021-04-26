import React from 'react';
import AdicionarLead from '../pages/AdicionarLead';
import renderWithRouter from './renderWithRouter';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { waitFor, screen } from '@testing-library/react';

test('Aparece o heading<h3> com o texto Adicionar Lead', () => {
  const { getByRole } = renderWithRouter(<AdicionarLead />);
  const title = getByRole('heading');
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('Adicionar Lead');
});

test('Tem um campo select e o valor default seja "" ', () => {
  const { getByRole } = renderWithRouter(<AdicionarLead />);
  const select = getByRole('combobox');
  expect(select).toBeInTheDocument();
  expect(select).toHaveValue('');
});

test('Verifica se renderiza 3 inputs ', () => {
  const { getAllByRole } = renderWithRouter(<AdicionarLead />);
  const inputs = getAllByRole('textbox');
  expect(inputs.length).toBe(3);
});

test('Verifica se existe o botão Limpar ', () => {
  const { getByTestId } = renderWithRouter(<AdicionarLead />);
  const btn = getByTestId('btn-reset');
  expect(btn).toHaveTextContent('Limpar');
});

test('Verifica se existe o botão Adicionar ', () => {
  const { getByTestId } = renderWithRouter(<AdicionarLead />);
  const btn = getByTestId('btn-add');
  expect(btn).toHaveTextContent('Adicionar');
});
