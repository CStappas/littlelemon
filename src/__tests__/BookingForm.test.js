import { render, screen } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

describe('BookingForm HTML5 Validation', () => {
  test('renders date input with correct attributes', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
    const dateInput = screen.getByLabelText(/choose date/i);

    expect(dateInput).toBeRequired();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('min', new Date().toISOString().split('T')[0]);
  });

  test('renders time input with correct attributes', () => {
    render(<BookingForm availableTimes={['18:00', '19:00']} dispatch={() => {}} submitForm={() => {}} />);
    const timeSelect = screen.getByLabelText(/choose time/i);

    expect(timeSelect).toBeRequired();
  });

  test('renders guests input with correct attributes', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);

    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  test('renders occasion input with correct attributes', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    expect(occasionSelect).toBeRequired();
  });
});
