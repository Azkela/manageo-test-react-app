import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AddButton from '../components/home/components/addButton/AddButton';

test('renders the add button', () => {
  render(
    <MemoryRouter>
      <AddButton />
    </MemoryRouter>
  );

  expect(screen.getByText('Ajouter')).toBeInTheDocument();
});