import React from 'react';


function Movie({ title, description }) {
  return (
    <div className="movie">
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Book Tickets</button>
    </div>
  );
}

export default Movie;
