import TredingToday from 'components/TredingToday';
import { getMovies } from '../API';
const Home = () => {
  const movies = getMovies();
  return (
    <main>
      <h2>
        Aici esti pe pagina de acasa si trebuie sa fie lista cu filmele de azi
      </h2>
      <TredingToday movies={movies} />
    </main>
  );
};

export default Home;
