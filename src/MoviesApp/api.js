const API_KEY = '8bcb42fc';
const API_URL = 'https://www.omdbapi.com/';

// console.log(API_URL)
export const fetchMovies = async (query) => {
  const response = await fetch(`${API_URL}?s=${query}&apiKey=${API_KEY}`);
  const data = await response.json();
  return data.Search;
};

export const fetchMovieDetails = async (id) => {
  const response = await fetch(`${API_URL}?i=${id}&apiKey=${API_KEY}`);
  const data = await response.json();
  return data;
};