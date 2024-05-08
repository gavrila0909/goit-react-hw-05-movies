import { Link } from "react-router-dom";

const TredingToday =({movies})  => {
     console.log(movies);
  return (
   

    <>

      <h2>Treding today</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <p>{`${movie.name}`}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TredingToday;
