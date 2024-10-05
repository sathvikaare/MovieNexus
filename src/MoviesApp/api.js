// const API_KEY = '8bcb42fc';
// const API_URL = 'http://www.omdbapi.com/';

export const fetchMovies = async (query) => {
  const response = await fetch(`${process.env.API_URL}?s=${query}&apiKey=${process.env.API_KEY}`);
  const data = await response.json();
  return data.Search;
};

export const fetchMovieDetails = async (id) => {
  const response = await fetch(`${process.env.API_URL}?i=${id}&apiKey=${process.env.API_KEY}`);
  const data = await response.json();
  return data;
};