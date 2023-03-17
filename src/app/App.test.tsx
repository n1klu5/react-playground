import { App } from '@app/App';
import { render, screen } from '@testing-library/react';

test('App is an empty <div/> element', async () => {
  render(<App />);

  expect(await screen.findByRole('main')).toBeEmptyDOMElement();
});
