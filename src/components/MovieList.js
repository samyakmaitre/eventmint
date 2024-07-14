import React from 'react';
import Movie from './Movie';
import '../assets/styles/MovieList.css';
 


function MovieList() {
  const movies = [
    {
      poster: '..assets/images/poster2.jpg',
      title: 'Hindustani 2',
      rating: 5.7,
      votes: '3.9K',
      genre: 'Action/Drama/Thriller'
    },
    {
      poster: 'path/to/kalki.jpg',
      title: 'Kalki 2898 AD',
      rating: 8.7,
      votes: '630.2K',
      genre: 'Action/Sci-Fi/Thriller'
    },
    {
      poster: 'path/to/deadpool.jpg',
      title: 'Deadpool & Wolverine',
      rating: 8.9,
      votes: '268.9K',
      genre: 'Action/Adventure/Comedy'
    },
    {
      poster: 'path/to/sarfira.jpg',
      title: 'Sarfira',
      rating: 8.9,
      votes: '7.5K',
      genre: 'Biography/Drama'
    },
    {
      poster: 'path/to/kill.jpg',
      title: 'Kill',
      rating: 9.0,
      votes: '24.7K',
      genre: 'Action/Thriller'
    }
  ];

  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <Movie
          key={index}
          poster={movie.poster}
          title={movie.title}
          rating={movie.rating}
          votes={movie.votes}
          genre={movie.genre}
        />
      ))}
    </div>
  );
}

export default MovieList;
