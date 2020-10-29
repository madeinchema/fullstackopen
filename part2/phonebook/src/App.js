import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { 'Arto Hellas': '040-1234567' }
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (persons.some(person => newName in person)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons => [...persons, { [newName]: newNumber }]);
    }
    setNewName('');
    setNewNumber('');
  }

  const handleChange = (e, type) => {
    if (type === 'name') {
      setNewName(e.target.value);
    } else if (type === 'number') {
      setNewNumber(e.target.value);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={(e) => handleChange(e, 'name')}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={(e) => handleChange(e, 'number')}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={Object.keys(person)}><span style={{fontWeight: 'bold'}}>{Object.keys(person)}</span> {Object.values(person)}</p>)}
    </div>
  )
}

export default App
