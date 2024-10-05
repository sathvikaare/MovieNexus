// import logo from './logo.svg';

// import './App.css';
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import Header from './MoviesApp/header';
// import Home from './MoviesApp/home';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Header/>
//         <Routes>
//           <Route index element={<Home/>}/>
//           <Route path="movie/:id" element={<h1>Movie Detail page</h1>}/>
//           <Route path="movies/:type" element={<h1>Movies list page</h1>}/>
//           <Route path="/*" element={<h1>Error page</h1>}/>
//         </Routes>
//       </Router>
   
//     </div>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './MoviesApp/header';
import Home from './MoviesApp/home';
import Movie from './MoviesApp/Movie';
import SearchResults from './MoviesApp/SearchResult';
import TopRatedMovies from './MoviesApp/TopRatedMovies';
import TeluguTopRated from './MoviesApp/top-rated-Telugu';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie/>} />
        <Route path="/top-rated" element={<TopRatedMovies />} />
        <Route path="/telugu" element={<TeluguTopRated />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
};
export default App;

