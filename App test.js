import { render, screen } from '@testing-library/react';
import App from './petrol-delivery-frontend/src/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
