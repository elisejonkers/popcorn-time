import { Link, useParams } from "react-router-dom";

function MovieDetails(props){

    const {movieId} = useParams()

    const movieDetails = props.moviesArr.find((movie) => {
        return movie.id == movieId
    })

    return(
        <>
        {movieDetails.imgURL && <img src={movieDetails.imgURL} alt={movieDetails.title}/> }

        <h1>{movieDetails.title}</h1>
               
        {movieDetails.rating && <p>Rating: {movieDetails.rating}</p>}
        {movieDetails.year && <p>Year: {movieDetails.year}</p>}
        {movieDetails.genres && movieDetails.genres.map((genreString, i)=>{
            return <span key={i} className="badge">{genreString}</span>
        })}

        <div>
        <Link to="/">Home</Link>
        </div>

        
        
        </>
    )

  
}

export default MovieDetails;