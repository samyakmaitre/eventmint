import React from 'react';
import Movie from './Movie';
import '../assets/styles/MovieList.css';
import MovieList from './components/MovieList';


import poster1 from '../assets/images/poster1.jpg';
import poster2 from '../assets/images/poster2.jpg';
import poster3 from '../assets/images/poster3.jpg';
import poster4 from '../assets/images/poster4.jpg';
import poster5 from '../assets/images/poster5.jpg';

function MovieList() {
  const movies = [
    {
      poster: poster1,
      title: 'Hindustani 2',
      rating: 5.7,
      votes: '3.9K',
      genre: 'Action/Drama/Thriller'
    },
    {
      poster: poster2,
      title: 'Kalki 2898 AD',
      rating: 8.7,
      votes: '630.2K',
      genre: 'Action/Sci-Fi/Thriller'
    },
    {
      poster: poster3,
      title: 'Deadpool & Wolverine',
      rating: 8.9,
      votes: '268.9K',
      genre: 'Action/Adventure/Comedy'
    },
    {
      poster: poster4,
      title: 'Sarfira',
      rating: 8.9,
      votes: '7.5K',
      genre: 'Biography/Drama'
    },
    {
      poster: poster5,
      title: 'Kill',
      rating: 9.0,
      votes: '24.7K',
      genre: 'Action/Thriller'
    },
    {
      poster: poster1,
      title: 'Hindustani 2',
      rating: 5.7,
      votes: '3.9K',
      genre: 'Action/Drama/Thriller'
    },
    {
      poster: poster2,
      title: 'Kalki 2898 AD',
      rating: 8.7,
      votes: '630.2K',
      genre: 'Action/Sci-Fi/Thriller'
    },
    {
      poster: poster3,
      title: 'Deadpool & Wolverine',
      rating: 8.9,
      votes: '268.9K',
      genre: 'Action/Adventure/Comedy'
    },
    {
      poster: poster4,
      title: 'Sarfira',
      rating: 8.9,
      votes: '7.5K',
      genre: 'Biography/Drama'
    },
    {
      poster: poster5,
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
