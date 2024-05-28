import React, { useState, useEffect } from 'react';
import { Link } from '../../components/App.styled';
import { getMovies, IMAGE_URL } from '../../Helpers/API';
import Loader from '../../components/Loader/Loader';
import styles from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      try {
        const response = await getMovies();
        //console.log(response.results);
        setMovies(response.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div className={styles.tredingContainer}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2>Trending today</h2>
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <img
                    src={IMAGE_URL + movie.backdrop_path}
                    alt={movie.title}
                  />
                  <p>{`${movie.title}`}</p>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Home;
