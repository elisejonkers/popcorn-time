import { useState } from 'react';
import movies from "./data/movies.json";
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);


  const addNewMovie = (newMovie) => {
    const newList = [newMovie, ...moviesToDisplay];
    setMoviesToDisplay(newList);
  }

  const deleteMovie = (movieTitle) => {
    const newList = moviesToDisplay.filter((movieDetails) => {
      return movieDetails.title !== movieTitle;
    });
    setMoviesToDisplay(newList);
  }


  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />
      <AddMovie callbackToAddMovie={addNewMovie} />
      <MovieList moviesArr={moviesToDisplay} callbackToDelete={deleteMovie}  />
      <Footer />
    </>
  )
}

export default App