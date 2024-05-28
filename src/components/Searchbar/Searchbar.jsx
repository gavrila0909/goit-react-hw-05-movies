import React, { useState } from 'react';
import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  //actualizam noua valoare input
  const handleInputChange = event => {
    setQuery(event.target.value);
   console.log(query);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    < >
      <form onSubmit={handleSubmit} className={styles.searcbarForm}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="inputValue"
          value={query}
          onChange={handleInputChange}
        />
        <button>Search</button>
      </form>
    </>
  );
};

export default Searchbar;
