// import { useState, useCallback } from 'react';
// import axios from 'axios';

// const useMovieAPI = () => {
//     const [movies, setMovies] = useState([]);
//     const URL = "https://api.themoviedb.org/3";
//     const API_KEY = "ab57a424e6032b04c57d16cb953b0f53";

//     const fetchMovies = useCallback(async () => {
//         const fetchUrl = `${URL}/discover/movie?api_key=${API_KEY}`;
//         try {
//             const response = await axios.get(fetchUrl);
//             const data = response.data.results;
//             console.log(data); 
//             setMovies(data);
//         } catch (error) {
//             console.error('Error fetching movies:', error);
//         }
//     }, []);

//     return { movies, fetchMovies };
// };

// export default useMovieAPI;


const movies = [
    { id: 1, name: "Pirates of the Caribbean" },
    { id: 2, name: "Inception" },
    { id: 3, name: "The Dark Knight" },
    { id: 4, name: "Interstellar" },
    { id: 5, name: "The Shawshank Redemption" }
  ];

 export const getMovies = () => {
    return movies;
 }

 export const getMovieById = (movieId) => {
    return movies.find((movie) => movie.id === movieId);
 }

