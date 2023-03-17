import { App } from '@app/App';
import { render, screen } from '@testing-library/react';
import { superheroHandler } from 'src/tests/serverMocks/heroes';
import { setupMockServer } from 'src/tests/setupMockServer';

setupMockServer(superheroHandler());

test('App is an empty <div/> element', async () => {
  render(<App />);
  expect(await screen.findByRole('main')).toBeEmptyDOMElement();
});
