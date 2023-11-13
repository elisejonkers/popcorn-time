import { Link } from "react-router-dom";

function MovieSummary(props) {
  return (
    <section className="container">
      {props.movieDetails.imgURL ? (
        <img src={props.movieDetails.imgURL} />
      ) : (
        <img src="https://dummyimage.com/182x268/ffffff/000000" />
      )}
      <div className="moviedetails">
        {props.movieDetails.rating > 8 && <p>RECOMMENDED</p>}
        <h2>{props.movieDetails.title}</h2>
        <p>Rating: {props.movieDetails.rating}</p>

        <button
          className="deleteButton"
          onClick={function () {
            props.callbackToDelete(props.movieDetails.id);
          }}
        >
          Delete
        </button>
        <br />

        <Link to={`/movies/${props.movieDetails.id}`}>More Details</Link>
      </div>
    </section>
  );
}

export default MovieSummary;
