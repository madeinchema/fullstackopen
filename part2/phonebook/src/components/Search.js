import React from 'react';

const Search = ({search, handleChange}) => {
  return (
    <div>
      Search by name: <input value={search} onChange={(e) => handleChange(e, 'search')}/>
    </div>
  );
};

export default Search;
