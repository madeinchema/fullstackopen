import React from 'react';

const NewContact = ({newName, newNumber, handleChange, handleSubmit}) => {
  return (
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
  );
};

export default NewContact;
