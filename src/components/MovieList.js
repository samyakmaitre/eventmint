import React from 'react';
import '../assets/styles/Movie.css'; // Assuming you have styles for each movie card

function Movie({ poster, title, rating, votes, genre }) {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} className="movie-poster" />
      <div className="movie-details">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-genre">{genre}</p>
        <div className="movie-rating-votes">
          <span className="movie-rating">Rating: {rating}/10</span>
          <span className="movie-votes">Votes: {votes}</span>
        </div>
      </div>
    </div>
  );
}

export default Movie;
