import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (persons.some(person => newName === person.name)) {
      alert(`${newName} is already added to phonebook`);
    } else if (!newNumber || !newName) {
      alert(`Please fill the following field${!newNumber && !newName ? 's' : ''}:
        ${!newName ? 'Name' : ''}
        ${!newNumber && 'Number'}
      `);
    } else {
      setPersons(persons => [...persons, { name: newName, number: newNumber }]);
    }
    setNewName('');
    setNewNumber('');
  }

  const handleChange = (e, type) => {
    if (type === 'name') {
      setNewName(e.target.value);
    } else if (type === 'number') {
      setNewNumber(e.target.value);
    } else if (type === 'search') {
      setSearch(e.target.value);
    }
  };

  const filterSearch = (item) => {
    return item.filter(person => person.name.toLowerCase().search(search) !== -1);
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        Search by name: <input value={search} onChange={(e) => handleChange(e, 'search')}/>
      </div>
      <h2>Add a new contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input value={newName} onChange={(e) => handleChange(e, 'name')}/>
        </div>
        <div>
          Number: <input value={newNumber} onChange={(e) => handleChange(e, 'number')}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filterSearch(persons).map(person => (
        <p key={person.name}>
          <span style={{fontWeight: 'bold'}}>{person.name}</span> {person.number}
        </p>
      ))}
    </div>
  )
}

export default App
