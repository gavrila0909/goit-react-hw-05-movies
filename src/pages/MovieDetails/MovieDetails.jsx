import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet,Link } from 'react-router-dom';
import { getMovieDetails, IMAGE_URL } from 'Helpers/API';
import Loader from 'components/Loader/Loader';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMovieDetails() {
      setIsLoading(true);
      try {
        const response = await getMovieDetails(movieId);
        setMovieDetails(response);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
    {/* <div>
      <Button>{<- Go Back}</Button>
    </div> */}
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.movieDetailsContainer}>
          <div className={styles.movieInfo}>
            <img
              src={IMAGE_URL + movieDetails.backdrop_path}
              alt={movieDetails.title}
            />
            <div>
              <h1>{movieDetails.title}</h1>
              <p>User score: {movieDetails.vote_average.toFixed(1)} %</p>
              <h4>Overview</h4>
              <p>{movieDetails.overview}</p>
              <p><b>Genre:</b> {movieDetails.genres.map(genre => genre.name).join(' ')}</p>
            </div>
          </div>
          <div className={styles.movieExtraInfo}>
            <h3>Additional information</h3>
            <div className={styles.castReviewDiv}>
              <ul>
                <li>
                  <Link to="cast">Cast</Link>
                </li>
                <li>
                  <Link to="reviews">Reviews</Link>
                </li>
              </ul>
            </div>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
