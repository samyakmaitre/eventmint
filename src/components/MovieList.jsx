import React from 'react';
import Movie from './Movie';

function MovieList() {
  const movies = [
    { id: 1, title: 'Movie 1', description: 'Description of Movie 1' },
    { id: 2, title: 'Movie 2', description: 'Description of Movie 2' },
    { id: 3, title: 'Movie 3', description: 'Description of Movie 3' }
  ];

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Movie key={movie.id} title={movie.title} description={movie.description} />
      ))}
    </div>
  );
}

export default MovieList;
