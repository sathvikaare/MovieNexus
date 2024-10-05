import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from './api';
import { BeatLoader } from 'react-spinners';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const movieData = await fetchMovieDetails(id);
      setMovie(movieData);
      setLoading(false)
    };

    fetchData();
  }, [id]);

 

  return (
    <div>
      {(loading)?<div style={{textAlign:"center"}}><BeatLoader loading={loading} color='rgba(255, 255, 255, 0.8)'style={{width:"50px"}}/></div>:<div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <img src={movie.Poster} className="img-fluid" alt={movie.Title} />
        </div>
        <div className="col-md-8">
          <h1 style={{color:'white'}}>{movie.Title}</h1>
          <p><strong>Year :</strong> {movie.Year}</p>
          <p><strong>Genre :</strong> {movie.Genre}</p>
          <p><strong>Director :</strong> {movie.Director}</p>
          <p><strong>Actors :</strong> {movie.Actors}</p>
          <p><strong>Plot :</strong> {movie.Plot}</p>
          <p><strong>Ratings :</strong></p>
          <ul style={{color:"white"}}>
            {movie.Ratings?.map((rating) => (
              <li key={rating.Source}><strong>{rating.Source}: </strong> {rating.Value}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>}
    </div>
  );
};

export default MovieDetail;
