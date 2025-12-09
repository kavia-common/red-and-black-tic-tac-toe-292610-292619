import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const title = screen.getByText(/Tic Tac Toe/i);
  expect(title).toBeInTheDocument();
});

test('renders 9 squares', () => {
  render(<App />);
  const squares = screen.getAllByRole('gridcell');
  expect(squares.length).toBe(9);
});
