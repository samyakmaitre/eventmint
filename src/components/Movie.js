// import React from 'react';
// import '../assets/styles/Movie.css';

// function Movie({ poster, title, rating, votes, genre }) {
//   return (
//     <div className="movie">
//       <img src={poster} alt={`${title} poster`} className="movie-poster" />
//       <h2 className="movie-title">{title}</h2>
//       <p className="movie-rating">
//         <span className="rating-star">★</span> {rating}/10 <span className="votes">({votes} Votes)</span>
//       </p>
//       <p className="movie-genre">{genre}</p>
//       <button className="book-tickets-button">Book Tickets</button>
//     </div>
//   );
// }

// export default Movie;


// src/components/Movie.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Movie.css';

function Movie({ poster, title, rating, votes, genre }) {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/booking'); // Redirect to the booking page
  };

  return (
    <div className="movie">
      <img src={poster} alt={`${title} poster`} className="movie-poster" />
      <h2 className="movie-title">{title}</h2>
      <p className="movie-rating">
        <span className="rating-star">★</span> {rating}/10 <span className="votes">({votes} Votes)</span>
      </p>
      <p className="movie-genre">{genre}</p>
      <button className="book-tickets-button" onClick={handleBookingClick}>
        Book Tickets
      </button>
    </div>
  );
}

export default Movie;
