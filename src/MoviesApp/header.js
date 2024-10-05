// import React from 'react'
// import { NavLink } from 'react-router-dom';
// import "./header.css"

// const Header = () => {
//   return (
//     <div className='header'>
//         <div className='headerLeft'>
//             <NavLink to="/"><img className='header__icon'alt='imdbimage' src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/imdb-icon.png'></img></NavLink>
//             <NavLink to="/movies/popular" style={{textDecoration:"none"}} ><span>Popular</span></NavLink>
//             <NavLink to="/movies/top_rated" style={{textDecoration:"none"}} ><span>Top_Rated</span></NavLink>
//             <NavLink to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></NavLink>
//         </div>

//     </div>
//   )
// }
// export default Header;

import img from "../movieimage2.jpeg";
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./Search_bar";
import "bootstrap/dist/css/bootstrap.min.css";
const linkstyle={
  textDecoration: "none", 
  color: "red"
}

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-none bg-none">
      <div
        className="container-fluid"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "center",
            gap: "80px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          <p
            style={{
              marginLeft: "20px",
              textDecorationColor: "red",
              fontWeight: "bold",
              fontSize: "24px",
              borderRadius: "8px",
              textAlign: "center",
              color:"white",
            }}
            
          >
            <img
              src={img}
              width="130px"
              height="100px"
              borderRadius="50px"
              alt="MN"
            />
            MovieNexus
          </p>
          <Link
            to="/"
            className="navbar-brand"
            style={linkstyle}
          >
            Home
          </Link>
          <Link
            to="/top-rated"
            style={linkstyle}
          >
            Top Rated
          </Link>
          <Link to="/telugu" style={linkstyle}>
            Telugu
          </Link>
          {/* <Link to="/kids" style={linkstyle}>
            Kids
          </Link> */}
        </div>
        <SearchBar />
      </div>
    </nav>
  );
};

export default Header;
