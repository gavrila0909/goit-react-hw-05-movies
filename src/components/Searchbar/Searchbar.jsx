import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  //actualizam noua valoare input
  const handleInputChange = (event) => {
    const query = event.target.value;
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <>
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
