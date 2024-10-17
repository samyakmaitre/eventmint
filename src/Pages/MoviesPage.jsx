// MoviesPage.jsx
import React, { useState, useEffect } from 'react';
import Movie from '../components/Movie';
import '../assets/styles/MoviesPage.css'; 

import poster1 from '../assets/images/poster1.jpg';
import poster2 from '../assets/images/poster2.jpg';
import poster3 from '../assets/images/poster3.jpg';
import poster4 from '../assets/images/poster4.jpg';
import poster5 from '../assets/images/poster5.jpg';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample movie data
  useEffect(() => {
    const fetchMovies = async () => {
      // Mock API data
      const moviesData = [
        {
            id: 1,
            poster: poster1,
            title: 'Hindustani 2',
            description: 'A gripping action-drama with thrilling moments.',
            rating: 5.7,
            votes: '3.9K',
            genre: 'Action/Drama/Thriller'
          },
          {
            id: 2,
            poster: poster2,
            title: 'Kalki 2898 AD',
            description: 'A sci-fi thriller set in the future.',
            rating: 8.7,
            votes: '630.2K',
            genre: 'Action/Sci-Fi/Thriller'
          },
          {
            id: 3,
            poster: poster3,
            title: 'Deadpool & Wolverine',
            description: 'Action-packed adventure with comedic twists.',
            rating: 8.9,
            votes: '268.9K',
            genre: 'Action/Adventure/Comedy'
          },
          {
            id: 4,
            poster: poster4,
            title: 'Sarfira',
            description: 'A biographical drama of a brave soul.',
            rating: 8.9,
            votes: '7.5K',
            genre: 'Biography/Drama'
          },
          {
            id: 5,
            poster: poster5,
            title: 'Kill',
            description: 'An intense action-thriller that keeps you on edge.',
            rating: 9.0,
            votes: '24.7K',
            genre: 'Action/Thriller'
          },
      ];
      setMovies(moviesData);
    };
    fetchMovies();
  }, []);

  // Filter movies based on search term
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="movies-page">
      <h1 className="page-title">Movies List</h1>

      <input
        type="text"
        placeholder="Search Movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="movies-list">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Movie key={movie.id} {...movie} />
            
          ))
        ) : (
          <p className="no-results">No movies found</p>
        )}
      </div>
    </div>
  );
};

export default MoviesPage;
