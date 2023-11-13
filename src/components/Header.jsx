import { NavLink } from "react-router-dom";
import "./Header.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Header(props) {

  console.log("header comp was invoked")

  const [numberOfMoviesFromAPI, setNumberOfMoviesFromAPI] = useState(0)

  useEffect(() => {
    axios
      .get("https://json-server-movies-api.adaptable.app/movies/")
      .then((response) => {
        setNumberOfMoviesFromAPI(response.data.length);

        console.log(`Number of movies....${numberOfMoviesFromAPI}`);
      })
      .catch((error) => {
        console.log("Error getting list of movies from the API...");
        console.log(error);
      });
  }, []);


  
  

  return (
    <header className="Header">
      <h1>Welcome to Popcorn Time!</h1>

      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </nav>

      {props.numberOfMovies > 0 ? (
        <h2>Number of movies: {props.numberOfMovies}</h2>
      ) : (
        <h2>Sorry, no movies to display</h2>
      )}

        <h2>NUMBER OF MOVIES IN THE API: {numberOfMoviesFromAPI}</h2>

    </header>
  );
}

export default Header;
