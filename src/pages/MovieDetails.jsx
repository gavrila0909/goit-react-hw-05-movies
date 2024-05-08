import { useParams } from "react-router-dom";
import { getMovieById } from "../API";

const MovieDetails = () => {
    const {id} = useParams();
    const movie = getMovieById(id);
    return (
        <main>
           <h2>Detalii film</h2> 
        </main>
    )
}

export default MovieDetails;