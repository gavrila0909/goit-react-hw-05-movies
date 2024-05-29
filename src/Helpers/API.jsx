import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ab57a424e6032b04c57d16cb953b0f53';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

// Ways to handle API fetch requests

export async function getMovies() {
  const fetchMoviesURL = `${URL}/trending/all/day?language=en-US&api_key=${API_KEY}`;
  try {
    const response = await fetch(fetchMoviesURL);
    const data = await response.json();
    //console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieDetails(movieId) {
  const fetchMoviesURL = `${URL}/movie/${movieId}?language=en-US&api_key=${API_KEY}`;
  try {
    const response = await axios.get(fetchMoviesURL);
    if (response.status !== 200) {
      throw new Error('Error fetching credits movies!');
    }
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const getMovieCredits = async movieId => {
  const fetchMoviesURL = `${URL}/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`;
  try {
    const response = await axios.get(fetchMoviesURL);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieReviews = async movieId => {
  const fetchMoviesURL = `${URL}/movie/${movieId}/reviews?language=en-US&api_key=${API_KEY}`;
  try {
    const response = await axios.get(fetchMoviesURL);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchMovies = async query => {
  const fetchMoviesURL = `${URL}/search/movie?language=en-US&query=${query}&api_key=${API_KEY}`;
  try {
    const response = await axios.get(fetchMoviesURL);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
