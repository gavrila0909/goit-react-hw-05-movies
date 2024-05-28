import { Routes, Route } from 'react-router-dom';
import SharedLayout from '../SharedLayout/SharedLayout';
import Home from '../../pages/Home/Home';
import MovieDetails from '../../pages/MovieDetails/MovieDetails';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import Movies from '../../pages/Movies/Movies';
import NotFound from '../../pages/NotFound/NotFound';

export const App = () => {
  return (
    <>
      <section>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </section>
    </>
  );
};
