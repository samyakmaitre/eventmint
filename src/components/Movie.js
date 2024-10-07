import React from 'react';

// Define the Movie component
const Movie = ({ title, year, genre, rating, poster }) => {
  return (
    <div className="movie-card">
      {/* Movie Poster */}
      <img src={poster} alt={`${title} poster`} className="movie-poster" />

      {/* Movie Details */}
      <div className="movie-details">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-year">Year: {year}</p>
        <p className="movie-genre">Genre: {genre}</p>
        <p className="movie-rating">Rating: {rating}/10</p>
      </div>
    </div>
  );
};

// Set default props in case some data is missing
Movie.defaultProps = {
  title: "Unknown Title",
  year: "N/A",
  genre: "Unknown Genre",
  rating: "N/A",
  poster: "https://via.placeholder.com/150"  // Placeholder image URL
};

// Export the Movie component
export default Movie;
