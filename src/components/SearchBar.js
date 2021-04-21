import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (evt) => {
    evt.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="ui segment serch-bar">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label htmlFor="search-input">Video Search</label>
          <input
            id="search-input"
            type="text"
            value={term}
            onChange={(evt) => setTerm(evt.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
