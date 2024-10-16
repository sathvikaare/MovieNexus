import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './movieCard';
import { BeatLoader} from 'react-spinners';

const API_KEY = '8bcb42fc';
const API_URL = 'https://www.omdbapi.com/';

function TeluguTopRated() {
  const [teluguMovies, setTeluguMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeluguMovies = async () => {
      try {
        const allMovies = [];
        let page = 1;

     
        while (allMovies.length < 300) {
          const response = await axios.get(`${API_URL}?s=telugu&page=${page}&apikey=${API_KEY}`);
          const moviesData = response.data.Search || [];

          // Fetch detailed data for each movie or series
          const detailedMovies = await Promise.all(
            moviesData.map(async (movie) => {
              const movieDetails = await axios.get(`${API_URL}?i=${movie.imdbID}&apikey=${API_KEY}`);
              return movieDetails.data;
            })
          );

          // Filter movies that have "Telugu" as the value for the language
          const filteredTeluguMovies = detailedMovies.filter(movie =>
            movie.Language && movie.Language.includes('Telugu')
          );

          allMovies.push(...filteredTeluguMovies);

          if (filteredTeluguMovies.length === 0) break; // Stop if no more Telugu content is found

          page++;
        }

        setTeluguMovies(allMovies.slice(0, 300));
        setLoading(false);
      } catch (err) {
        console.error('Error fetching Telugu movies:', err);
        setError('Could not fetch Telugu movies. Please try again later.');
        setLoading(false);
      }
    };

    fetchTeluguMovies();
  }, []);

 

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>{loading?<div style={{textAlign:"center"}}><BeatLoader loading={loading} color='rgba(255, 255, 255, 0.8)'style={{width:"50px"}}/></div>:  <div className="container mt-4">
      <h5 style={{color:"red"}}>Telugu Movies & Series</h5>
      <div className="d-flex movie-cards flex-wrap" style={{gap:"20px",justifyContent:"center"}}>
        {teluguMovies.length > 0 ? (
          teluguMovies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <div>No Telugu movies found.</div>
        )}
      </div>
    </div>}
  
    </div>
  );
}

export default TeluguTopRated;
