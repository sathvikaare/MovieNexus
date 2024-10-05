import React from 'react';
import { useLocation } from 'react-router-dom';
import MovieList from './movieList';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const query = useQuery().get('query');

  return (
    <div className="container mt-4">
      <h2>Search Results</h2>
      <MovieList query={query} />
    </div>
  );
};

export default SearchResults;
