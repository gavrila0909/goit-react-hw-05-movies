import React, { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {BackLink} from '../../Helpers/Link.styled';
import { getSearchMovies } from 'Helpers/API';
import Loader from '../../components/Loader/Loader';
import Searchbar from '../../components/Searchbar/Searchbar';
import SearchMoviesList from '../../components/SearchMoviesList/SearchMoviesList';
import styles from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    async function searchMovies() {
      setIsLoading(true);
      try {
        const response = await getSearchMovies(query);
        //console.log(response.results);
        setMovies(response.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      } finally {
        setIsLoading(false);
      }
    }
    searchMovies();
  }, [query]);

  const handleSubmit = newQuery => {
    setMovies([]);
    setQuery(newQuery);
  };

  return (
    <>
    <div className={styles.back}>
      <BackLink to={backLinkHref}> ❮ Go Back</BackLink>
      <Searchbar onSubmit={handleSubmit} />
    </div>
      
      {isLoading ? <Loader /> : <SearchMoviesList movies={movies} />}
    </>
  );
};

export default Movies;
