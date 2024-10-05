
import React from 'react';
import MovieList from './movieList';
import "./movieCard.css"
import CaroselExample from './carousal';
import Footer from './footer';

const headstyle={
color:"red"
}

const Home = () => {
  return (
    <>
    <div className="container mt-4">
      <CaroselExample/>
      <h3 style={headstyle}>Telugu</h3>
      <MovieList query="telugu"/>      
      <h3 style={headstyle}>Trending</h3>
      <MovieList query="Trending"/>
      <h3 style={headstyle}>Horror</h3>
      <MovieList query="Horror"/>
    </div>
    <Footer/>
    </>
  );
};
export default Home;

