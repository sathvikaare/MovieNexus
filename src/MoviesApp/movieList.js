import React, { useEffect, useState } from 'react';
import { fetchMovies } from './api';
import MovieCard from './movieCard';
// import { BeatLoader } from 'react-spinners';

const MovieList = ({ query }) => {
  const [movies, setMovies] = useState([]);
  // const [loading,setLoading]=useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const movieResults = await fetchMovies(query);
      let filteredmovieResults=movieResults.filter((each)=>each.Poster!=='N/A');
      console.log(filteredmovieResults);
      setMovies(filteredmovieResults.slice(0,7));
      console.log(filteredmovieResults.slice(0,7))
      // setLoading(false)
    };
    
    fetchData();
  }, [query]);

  return (
    <div>
    {/* {loading?<div style={{textAlign:"center"}}><BeatLoader loading={loading} color='rgba(255, 255, 255, 0.8)'style={{width:"50px"}}/></div>: */}
     <div className="d-flex" style={{justifyContent:"center"}} >
    {movies?.map((movie) => (
      <MovieCard key={movie.imdbID} movie={movie}/>
    ))}
  </div>
  {/* } */}
   
    </div>
  );
};

export default MovieList;
