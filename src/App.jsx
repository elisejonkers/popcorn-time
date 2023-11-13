import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import movies from "./data/movies.json";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import About from "./components/About";
import MovieDetails from "./components/MovieDetails";

function App() {

  console.log("App comp was invoked") 

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const addNewMovie = (newMovie) => {
    const movieIds = moviesToDisplay.map(function (elm) {
      return elm.id;
    });
    const maxId = Math.max(...movieIds);
    const nextId = maxId + 1;

    const movieDetails = {
      ...newMovie,
      id: nextId,
    };

    const newList = [movieDetails, ...moviesToDisplay];
    setMoviesToDisplay(newList);
  };

  const deleteMovie = (movieID) => {
    const newList = moviesToDisplay.filter((movieDetails) => {
      return movieDetails.id !== movieID;
    });
    setMoviesToDisplay(newList);
  };

  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />
      <AddMovie callbackToAddMovie={addNewMovie} />

      <Routes>
        <Route
          path="/"
          element={
            <p>
              {" "}
              <MovieList
                moviesArr={moviesToDisplay}
                callbackToDelete={deleteMovie}
              />
            </p>
          }
        />
        <Route
          path="/movies/:movieId"
          element={<MovieDetails moviesArr={moviesToDisplay} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
