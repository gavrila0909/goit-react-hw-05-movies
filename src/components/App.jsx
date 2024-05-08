import { Routes, Route } from 'react-router-dom';
import { Link } from './App.styled';
import Home from '../pages/Home';
import MovieDetails from '../pages/MovieDetails';
import Movies from '../pages/Movies';
import NotFound from '../pages/NotFound';
import styles from './App.module.css';

export const App = () => {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="./movies" end>
            Movies
          </Link>
        </nav>
      </header>
      <section className={styles.routes}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={< MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
    </>
  );
};
