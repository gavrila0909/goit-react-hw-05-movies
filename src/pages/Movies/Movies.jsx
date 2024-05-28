import React, { useState, useEffect } from 'react';
import { getSearchMovies } from 'Helpers/API';
import Loader from '../../components/Loader/Loader';
import Searchbar from '../../components/Searchbar/Searchbar';
import SearchMoviesList from '../../components/SearchMoviesList/SearchMoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

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
    <section>
      <Searchbar onSubmit={handleSubmit} />
      {isLoading ? <Loader /> : <SearchMoviesList movies={movies} />}
    </section>
  );
};

export default Movies;
