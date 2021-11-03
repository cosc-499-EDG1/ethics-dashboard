import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders navbar', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ethics Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
