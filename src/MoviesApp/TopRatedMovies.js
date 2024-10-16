// TopRatedMovies.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './movieCard';
import { BeatLoader, SyncLoader } from 'react-spinners';



const API_KEY = '8bcb42fc';
const API_URL = 'https://www.omdbapi.com/';

function TopRatedMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
    
        const keywords = ['rrr','kalki',"K.G.F","kantara","thumbad","magadheera",'superman', 'harry potter', 'matrix'];
        const moviePromises = keywords.map((keyword) =>
          axios.get(`${API_URL}?s=${keyword}&apikey=${API_KEY}`)
        );

        const responses = await Promise.all(moviePromises);
        const allMovies = responses.flatMap((response) => response.data.Search || []).slice(0, 100); 

        const moviesWithRatings = await Promise.all(
          allMovies.map(async (movie) => {
            const detailsResponse = await axios.get(`${API_URL}?i=${movie.imdbID}&apikey=${API_KEY}`);
            return detailsResponse.data;
          })
        );

        const sortedMovies = moviesWithRatings
          .filter(movie => movie.imdbRating !== 'N/A') // Filter out movies without ratings
          .sort((a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating))
          .slice(0, 100);

        setMovies(sortedMovies);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching top-rated movies:', err);
        setError('Could not fetch top-rated movies. Please try again later.');
        setLoading(false);
      }
    };

    fetchTopRatedMovies();
  }, []);



  if (error) {
    return <div>{error}</div>;
  }

  return (
   <>
   {loading?<div style={{textAlign:"center"}}><BeatLoader loading={loading} color='rgba(255, 255, 255, 0.8)'style={{width:"50px"}}/></div>: <div className="container mt-4">
    <h5 style={{color:"red"}}>Top Rated Movies</h5>
    <div className="d-flex movie-cards flex-wrap" style={{gap:"20px",justifyContent:"center"}}>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie}/>
      ))}
    </div>
  </div>}
   
   </>
  );
}

export default TopRatedMovies;

