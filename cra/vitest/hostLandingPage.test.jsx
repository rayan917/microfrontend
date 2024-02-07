
import { expect, test } from 'vitest'
import { render } from '@testing-library/react';
import HostLandingPage from '../host/src/HostLandingPage';


test('renders HostLandingPage with title', async () => {
  const title = 'Test Title';
  const { getByText } = render(<HostLandingPage title={title} />);

  expect(getByText(/Bienvenue sur la page d'accueil de l'hôte/i)).toBeInTheDocument();

  expect(getByText(`param : ${title}`)).toBeInTheDocument();

});
