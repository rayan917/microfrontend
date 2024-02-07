import React from 'react';
import { expect, test } from 'vitest';
import { renderer } from '@testing-library/react';
import RemoteLandingPage from '../remote/src/RemoteLandingPage';


test('renders RemoteLandingPage', async () => {
  const { getByText } = renderer(<RemoteLandingPage></RemoteLandingPage>);
  expect(screen.getByText(/Testing/i)).toBeDefined()

  expect(getByText(/Bienvenue sur la page d'accueil à distance/i)).toBeInTheDocument();

});
