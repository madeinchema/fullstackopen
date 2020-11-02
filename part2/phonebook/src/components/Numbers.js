import React from 'react';

const Numbers = ({ persons, search }) => {
  const filterSearch = (item) => {
    return item.filter(person => person.name.toLowerCase().search(search) !== -1);
  }

  return (
    <div>
      {filterSearch(persons).map(person => (
        <p key={person.name}>
          <span style={{ fontWeight: 'bold' }}>{person.name}</span> {person.number}
        </p>
      ))}
    </div>
  );
};

export default Numbers;
