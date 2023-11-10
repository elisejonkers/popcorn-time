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
    const movieIds = moviesToDisplay.map(function(elm){
      return elm.id
    })
    const maxId= Math.max(...movieIds)
    const nextId = maxId + 1

    const movieDetails = {
      ...newMovie, 
      id: nextId
    }


    const newList = [movieDetails, ...moviesToDisplay];
    setMoviesToDisplay(newList);
  }

  const deleteMovie = (movieID) => {
    const newList = moviesToDisplay.filter((movieDetails) => {
      return movieDetails.id !== movieID;
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