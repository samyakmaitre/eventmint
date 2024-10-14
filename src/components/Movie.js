import React from "react";
import "../assets/styles/Movie.css";
import { Link } from "react-router-dom";

function Movie({ id, poster, title, rating, votes, genre }) {
  return (
    <div className="movie">
      <img src={poster} alt={`${title} poster`} className="movie-poster" />
      <span className="promoted">PROMOTED</span>
      <p className="movie-rating">
        <span className="rating-star">★</span>
        <span className="rating-points"> {rating}/10 </span>
        <span className="votes">({votes} Votes)</span>
      </p>
      <h2 className="movie-title">{title}</h2>
      <p className="movie-genre">{genre}</p>
      <Link to={`/movies/${id}`}>
        <button className="book-tickets-button">More Details</button>
      </Link>
    </div>
  );
}

export default Movie;
