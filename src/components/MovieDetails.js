import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, useParams } from 'react-router-dom';
import Header from "./Header.js";
import "../assets/styles/MovieDetails.css";
import Navbar from './NavBar.js';
import Footer from './Footer.js';

// Import movie stills
import moviestill1 from "../assets/images/moviestill1.jpg";
import moviestill2 from "../assets/images/moviestill2.jpg";
import moviestill3 from "../assets/images/moviestill3.jpg";

// Import cast photos
import cast1 from "../assets/images/cast1.jpg";
import cast2 from "../assets/images/cast2.jpg";
import cast3 from "../assets/images/cast3.jpg";
import cast4 from "../assets/images/cast4.jpg";

// Import movie posters
import poster1 from "../assets/images/poster1.jpg";
import poster2 from "../assets/images/poster2.jpg";
import poster3 from "../assets/images/poster3.jpg";
import poster4 from "../assets/images/poster4.jpg";
import poster5 from "../assets/images/poster5.jpg";

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [trailerUrl, setTrailerUrl] = useState('');
    const [castPhotos, setCastPhotos] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [showtimes, setShowtimes] = useState([]);
    const { id } = useParams();

    // Updated movies array with the imported poster images
    const movies = [
      {
        id: 1,
        poster: poster1,
        title: 'Hindustani 2',
        description: 'A gripping action-drama with thrilling moments.',
        rating: 5.7,
        votes: '3.9K',
        genre: 'Action/Drama/Thriller',
        trailerUrl: 'https://www.youtube.com/watch?v=-yBOZzNSpIM',
        cast: [
          { name: 'Actor 1', photo: cast1 },
          { name: 'Actor 2', photo: cast2 },
          { name: 'Actor 3', photo: cast3 },
          { name: 'Actor 4', photo: cast4 },
        ],
        photos: [
          { url: moviestill1, alt: 'Movie Still 1' },
          { url: moviestill2, alt: 'Movie Still 2' },
          { url: moviestill3, alt: 'Movie Still 3' },
        ],
        showtimes: [
          { time: '10:00 AM', format: '2D' },
          { time: '1:00 PM', format: '3D' },
          { time: '4:00 PM', format: 'IMAX' },
        ],
      },
      {
        id: 2,
        poster: poster2,
        title: 'Kalki 2898 AD',
        description: 'A sci-fi thriller set in the future.',
        rating: 8.7,
        votes: '630.2K',
        genre: 'Action/Sci-Fi/Thriller',
        trailerUrl: 'https://www.youtube.com/watch?v=aninoDcPWo4',
        cast: [
          { name: 'Actor 1', photo: cast3 },
          { name: 'Actor 2', photo: cast4 },
          { name: 'Actor 3', photo: cast1 },
          { name: 'Actor 4', photo: cast2 },
        ],
        photos: [
          { url: moviestill1, alt: 'Movie Still 1' },
          { url: moviestill2, alt: 'Movie Still 2' },
          { url: moviestill3, alt: 'Movie Still 3' },
        ],
        showtimes: [
          { time: '10:00 AM', format: '2D' },
          { time: '1:00 PM', format: '3D' },
          { time: '4:00 PM', format: 'IMAX' },
        ],
      },
      {
        id: 3,
        poster: poster3,
        title: 'Deadpool & Wolverine',
        description: 'Action-packed adventure with comedic twists.',
        rating: 8.9,
        votes: '268.9K',
        genre: 'Action/Adventure/Comedy',
        trailerUrl: 'https://www.youtube.com/watch?v=73_1biulkYk',
        cast: [
          { name: 'Actor 1', photo: cast1 },
          { name: 'Actor 2', photo: cast2 },
          { name: 'Actor 3', photo: cast3 },
          { name: 'Actor 4', photo: cast4 },
        ],
        photos: [
          { url: moviestill1, alt: 'Movie Still 1' },
          { url: moviestill2, alt: 'Movie Still 2' },
          { url: moviestill3, alt: 'Movie Still 3' },
        ],
        showtimes: [
          { time: '10:00 AM', format: '2D' },
          { time: '1:00 PM', format: '3D' },
          { time: '4:00 PM', format: 'IMAX' },
        ],
      },
      {
        id: 4,
        poster: poster4,
        title: 'Sarfira',
        description: 'A biographical drama of a brave soul.',
        rating: 8.9,
        votes: '7.5K',
        genre: 'Biography/Drama',
        trailerUrl: 'https://www.youtube.com/watch?v=8Iy2geJD8HY',
        cast: [
          { name: 'Actor 1', photo: cast2 },
          { name: 'Actor 2', photo: cast1 },
          { name: 'Actor 3', photo: cast4 },
          { name: 'Actor 4', photo: cast3 },
        ],
        photos: [
          { url: moviestill1, alt: 'Movie Still 1' },
          { url: moviestill2, alt: 'Movie Still 2' },
          { url: moviestill3, alt: 'Movie Still 3' },
        ],
        showtimes: [
          { time: '10:00 AM', format: '2D' },
          { time: '1:00 PM', format: '3D' },
          { time: '4:00 PM', format: 'IMAX' },
        ],
      },
      {
        id: 5,
        poster: poster5,
        title: 'Kill',
        description: 'An intense action-thriller that keeps you on edge.',
        rating: 9.0,
        votes: '24.7K',
        genre: 'Action/Thriller',
        trailerUrl: 'https://www.youtube.com/watch?v=da7lKeeS67c',
        cast: [
          { name: 'Actor 1', photo: cast2 },
          { name: 'Actor 2', photo: cast3 },
          { name: 'Actor 3', photo: cast4 },
          { name: 'Actor 4', photo: cast1 },
        ],
        photos: [
          { url: moviestill1, alt: 'Movie Still 1' },
          { url: moviestill2, alt: 'Movie Still 2' },
          { url: moviestill3, alt: 'Movie Still 3' },
        ],
        showtimes: [
          { time: '10:00 AM', format: '2D' },
          { time: '1:00 PM', format: '3D' },
          { time: '4:00 PM', format: 'IMAX' },
        ],
      },
    ];

    const fetchMovieDetails = async (id) => {
        try {
            const movieData = movies.find((movie) => movie.id === parseInt(id, 10)); // Match by ID
            return movieData || {}; // Return empty object if no match found
        } catch (error) {
            throw new Error(`Error fetching movie details for ID ${id}: ${error.message}`);
        }
    };

    useEffect(() => {
        const fetchMovie = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const movieData = await fetchMovieDetails(id);
                setMovie(movieData);
                setTrailerUrl(movieData?.trailerUrl || '');
                setCastPhotos(movieData?.cast || []);
                setPhotos(movieData?.photos || []);
                setShowtimes(movieData?.showtimes || []);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovie();
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading movie details: {error.message}</div>;
    }

    return (
<>
  <Header />
  <Navbar />
  <div className="movie-details-container mt-0 flex flex-col md:flex-row p-4 md:p-8">
    <div className="left-section w-full md:w-2/5">
      <div className="movie-poster">
        <img src={movie.poster} alt={`${movie.title} poster`} className="w-full h-auto" />
      </div>
    </div>
    <div className="right-section w-full md:w-3/5 md:pl-6">
      <div className="movie-title text-2xl font-bold mb-4">{movie.title}</div>
      <div className="movie-description text-lg mb-4">{movie.description}</div>
      <div className="movie-genre text-md text-gray-600 mb-4">{movie.genre}</div>
      <div className="movie-rating text-md text-gray-800 mb-4">
        Rating: {movie.rating}/10 ({movie.votes} votes)
      </div>
      <div className="movie-showtimes mb-6">
        <h3 className="text-lg font-semibold mb-2">Showtimes</h3>
        {showtimes.map((showtime, index) => (
          <div key={index} className="text-md">
            {showtime.time} ({showtime.format})
          </div>
        ))}
      </div>

      <div className="movie-cast mb-6">
        <h3 className="text-lg font-semibold mb-4">Cast</h3>
        <Carousel
          className="carousel-container"
          responsive={{
            desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
            tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
            mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
          }}
        >
          {castPhotos.map((cast, index) => (
            <div className="cast-member text-center" key={index}>
              <img src={cast.photo} alt={`${cast.name} photo`} className="rounded-lg mb-2" />
              <div className="text-sm">{cast.name}</div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="movie-photos mb-6">
        <h3 className="text-lg font-semibold mb-4">Photos</h3>
        <Carousel
          className="carousel-container"
          responsive={{
            desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
            tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
            mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
          }}
        >
          {photos.map((photo, index) => (
            <div className="photo" key={index}>
              <img src={photo.url} alt={photo.alt} className="rounded-lg" />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="movie-trailer mb-6">
        <h3 className="text-lg font-semibold mb-4">Watch Trailer</h3>
        {trailerUrl && (
          <YouTube
            videoId={trailerUrl.split("v=")[1]}
            opts={{
              height: '390',
              width: '100%',
              playerVars: { autoplay: 0 },
            }}
            className="w-full"
          />
        )}
      </div>
    </div>

    <div className="buttons-sec flex justify-between mt-6">
      <Link to="/book-tickets">
        <button className="book-tickets-button bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 transition duration-300">
          Book Tickets
        </button>
      </Link>
      <Link to="/">
        <button className="book-tickets-button bg-gray-500 text-white py-2 px-6 rounded hover:bg-gray-600 transition duration-300">
          Back
        </button>
      </Link>
    </div>
  </div>
  <Footer />
</>

    );
};

export default MovieDetails;
