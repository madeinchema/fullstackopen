import React, { useState } from 'react'
import Search from './components/Search';
import NewContact from './components/NewContact';
import Numbers from './components/Numbers';

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



  return (
    <div>
      <h1>Phonebook</h1>
      <Search search={search} handleChange={handleChange} />
      <h2>Add a new contact</h2>
      <NewContact
        newName={newName}
        newNumber={newNumber}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Numbers persons={persons} search={search} />
    </div>
  )
}

export default App
