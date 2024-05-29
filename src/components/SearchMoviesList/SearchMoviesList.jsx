import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../Helpers/API';
import styles from './SearchMoviesList.module.css';

const SearchMoviesList = ({ movies }) => {
  //console.log(movies);
  return (
    <>
      <div className={styles.moviesListContainer}>
        {movies.map(movie => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            className={styles.moviesList}
          >
            <div>
              <img src={IMAGE_URL + movie.backdrop_path} alt={movie.title} />
            </div>
            <div>
              <h3>{movie.title}</h3>
              <p>Release data: {movie.release_date}</p>
              <p>User score: {movie.vote_average.toFixed(1)} %</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

SearchMoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      backdrop_path: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SearchMoviesList;
