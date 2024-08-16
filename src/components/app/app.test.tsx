import { render, screen } from '@testing-library/react';
import App from './app';
import { films } from '../../mocks/films';

test('Renders app-component', () => {
  render(<App films={films} />);
  const textElement = screen.getByText(/Hello, world!/i);
  expect(textElement).toBeInTheDocument();
});
