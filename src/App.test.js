import { render, screen } from '@testing-library/react';
import App from './App';

test('renders with "sample app" text', () => {
  render(<App />);
  const linkElement = screen.getByText(/sample app/i);
  expect(linkElement).toBeInTheDocument();
});
