import { render, screen } from '@testing-library/react';
import BookingForm from '../BookingForm/BookingForm'; // Correct path

test('Renders the "Choose date" label', () => {
  render(<BookingForm />);
  const labelElement = screen.getByText(/choose date/i);
  expect(labelElement).toBeInTheDocument();
});