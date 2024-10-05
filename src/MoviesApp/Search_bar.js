import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  };

  return (
    <form className="d-flex" onSubmit={handleSearch}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-outline-danger" style={{fontWeight:"bold",fontSize:"18px"}} type="submit">Search</button>
    </form>
  );
};
export default SearchBar;
