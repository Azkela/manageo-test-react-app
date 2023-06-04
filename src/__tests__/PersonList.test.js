import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PersonList from '../components/personList/PersonList';

test('rendu de la liste des personnes', () => {
  const fakePeople = [
    { id: '1', firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
    { id: '2', firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com' },
  ];

  render(
    <MemoryRouter>
      <PersonList people={fakePeople} />
    </MemoryRouter>
  );

  expect(screen.getByText('John')).toBeInTheDocument();
  expect(screen.getByText('Jane')).toBeInTheDocument();
});