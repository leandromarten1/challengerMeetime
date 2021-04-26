import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import '@testing-library/jest-dom';

test('A URL "/leads" é a Página principal', () => {
  const { history } = renderWithRouter(<App />);
  const path = history.location.pathname;
  expect(path).toBe('/leads');
});
