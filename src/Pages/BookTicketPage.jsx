// BookTicketPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "../assets/styles/BookTicketPage.css"; // CSS styling
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const BookTicketPage = ({ movies }) => {
  const { id } = useParams(); // Get movie ID from the URL
  const navigate = useNavigate(); // To navigate to other pages
  const [movie, setMovie] = useState([]);
  const [selectedShowtime, setSelectedShowtime] = useState('');
  const [numTickets, setNumTickets] = useState(1);
  const [error, setError] = useState(null);

  // Find the movie based on ID
  useEffect(() => {
    const movieData = movies.find((movie) => movie.id === parseInt(id, 10));
    if (movieData) {
      setMovie(movieData);
    } else {
      setError('Movie not found');
    }
  }, [id, movies]);

  const handleBooking = (e) => {
    e.preventDefault();
    alert(`Successfully booked ${numTickets} ticket(s) for ${movie.title} at ${selectedShowtime}`);
    navigate('/'); // Redirect to homepage after booking
  };

  if (error) return <div className="error-message">{error}</div>;
  if (!movie) return <div>Loading movie details...</div>;

  return (
    <>
      <Navbar />
      <div className="book-ticket-page">
        <h1>Book Tickets for {movie.title}</h1>
        <div className="movie-info">
          <img src={movie.poster} alt={`${movie.title} poster`} className="movie-poster" />
          <p>{movie.description}</p>
          <p><strong>Genre:</strong> {movie.genre}</p>
        </div>

        <form onSubmit={handleBooking} className="booking-form">
          {/* <label>
            Select Showtime:
            <select
              value={selectedShowtime}
              onChange={(e) => setSelectedShowtime(e.target.value)}
              required
            >
              <option value="">Choose a time</option>
              {movie.showtimes.map((showtime, index) => (
                <option key={index} value={`${showtime.time} (${showtime.format})`}>
                  {showtime.time} ({showtime.format})
                </option>
              ))}
            </select>
          </label> */}

          <label>
            Number of Tickets:
            <input
              type="number"
              min="1"
              max="10"
              value={numTickets}
              onChange={(e) => setNumTickets(e.target.value)}
              required
            />
          </label>

          <button type="submit" className="book-button">Book Tickets</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default BookTicketPage;
