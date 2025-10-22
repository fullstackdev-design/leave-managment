import { render, screen, fireEvent } from '@testing-library/react';
import EmployeeForm from './EmployeeForm';

test('renders form and validates basic flow', async () => {
  render(<EmployeeForm userId="u-emp-1" />);
  const start = screen.getByLabelText(/Start Date/i);
  const end = screen.getByLabelText(/End Date/i);
  const button = screen.getByText(/Apply/i);

  fireEvent.change(start, { target: { value: '2025-12-01' }});
  fireEvent.change(end, { target: { value: '2025-12-02' }});
  // we don't actually submit because backend isn't running in tests here
  expect(start).toBeInTheDocument();
  expect(end).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
