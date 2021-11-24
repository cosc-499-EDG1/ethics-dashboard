import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders navbar', async () => {
  render(<App />);
  const linkElements = await screen.findAllByText(/Ethics Dashboard/i);
  expect(linkElements[0]).toBeInTheDocument();
});
