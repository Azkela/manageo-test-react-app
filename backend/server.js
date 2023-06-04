const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

let people = [
  { id: 1, firstName: 'John', lastName: 'Adams', email: 'john.adams@example.com' },
  { id: 2, firstName: 'Jane', lastName: 'Baker', email: 'jane.baker@example.com' },
  { id: 3, firstName: 'Bob', lastName: 'Clark', email: 'bob.clark@example.com' },
  { id: 4, firstName: 'Alice', lastName: 'Davis', email: 'alice.davis@example.com' },
  { id: 5, firstName: 'David', lastName: 'Evans', email: 'david.evans@example.com' },
  { id: 6, firstName: 'Emma', lastName: 'Fisher', email: 'emma.fisher@example.com' },
  { id: 7, firstName: 'Frank', lastName: 'Garcia', email: 'frank.garcia@example.com' },
  { id: 8, firstName: 'Grace', lastName: 'Hill', email: 'grace.hill@example.com' },
  { id: 9, firstName: 'Henry', lastName: 'Irwin', email: 'henry.irwin@example.com' },
  { id: 10, firstName: 'Ivy', lastName: 'Jackson', email: 'ivy.jackson@example.com' },
  { id: 11, firstName: 'Jack', lastName: 'Kim', email: 'jack.kim@example.com' },
  { id: 12, firstName: 'Kate', lastName: 'Lee', email: 'kate.lee@example.com' },
  { id: 13, firstName: 'Luke', lastName: 'Miller', email: 'luke.miller@example.com' },
  { id: 14, firstName: 'Mary', lastName: 'Nelson', email: 'mary.nelson@example.com' },
  { id: 15, firstName: 'Nathan', lastName: 'Owens', email: 'nathan.owens@example.com' },
  { id: 16, firstName: 'Olivia', lastName: 'Parker', email: 'olivia.parker@example.com' },
  { id: 17, firstName: 'Peter', lastName: 'Quinn', email: 'peter.quinn@example.com' },
  { id: 18, firstName: 'Rachel', lastName: 'Roberts', email: 'rachel.roberts@example.com' },
  { id: 19, firstName: 'Samuel', lastName: 'Smith', email: 'samuel.smith@example.com' },
  { id: 20, firstName: 'Sophia', lastName: 'Thompson', email: 'sophia.thompson@example.com' },
  { id: 21, firstName: 'Thomas', lastName: 'Underwood', email: 'thomas.underwood@example.com' },
  { id: 22, firstName: 'Uma', lastName: 'Vargas', email: 'uma.vargas@example.com' },
  { id: 23, firstName: 'Victor', lastName: 'Walker', email: 'victor.walker@example.com' },
  { id: 24, firstName: 'Wendy', lastName: 'Xu', email: 'wendy.xu@example.com' },
  { id: 25, firstName: 'Xavier', lastName: 'Yates', email: 'xavier.yates@example.com' },
  { id: 26, firstName: 'Yara', lastName: 'Zhang', email: 'yara.zhang@example.com' }
];

app.get('/person', (req, res) => {
  res.json(people);
});

app.get('/person/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const person = people.find((p) => p.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).json({ error: 'Person not found' });
  }
});

app.post('/person', (req, res) => {
  const newPerson = req.body;
  const id = people.length + 1;
  newPerson.id = id;
  people.push(newPerson);
  res.status(201).json(newPerson);
});

app.put('/person/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedPerson = req.body;
  const personIndex = people.findIndex((p) => p.id === id);
  if (personIndex !== -1) {
    people[personIndex] = { ...people[personIndex], ...updatedPerson };
    res.json(people[personIndex]);
  } else {
    res.status(404).json({ error: 'Person not found' });
  }
});

app.delete('/person/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const personIndex = people.findIndex((p) => p.id === id);
  if (personIndex !== -1) {
    const deletedPerson = people.splice(personIndex, 1)[0];
    res.json(deletedPerson);
  } else {
    res.status(404).json({ error: 'Person not found' });
  }
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
