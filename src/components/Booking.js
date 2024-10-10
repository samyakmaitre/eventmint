// src/components/Booking.js

import React, { useState, useEffect } from "react";
import "../assets/styles/Booking.css";

const Booking = () => {
  const [formData, setFormData] = useState({
    movieTime: "",
    cinemaHouse: "",
    selectedSeats: [],
    customTime: "", // For custom time input
  });
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState("");
  const [movieTimes, setMovieTimes] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSeatSelection = (seat) => {
    if (formData.selectedSeats.includes(seat)) {
      setFormData((prevData) => ({
        ...prevData,
        selectedSeats: prevData.selectedSeats.filter((s) => s !== seat),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        selectedSeats: [...prevData.selectedSeats, seat],
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { cinemaHouse, selectedSeats } = formData;
    // Use custom time if provided, otherwise use the selected movie time
    const movieTime = formData.customTime || formData.movieTime;

    if (!movieTime || !cinemaHouse || selectedSeats.length === 0) {
      setError("Please fill in all fields and select at least one seat.");
      return;
    }

    setConfirmation("Booking successful!");
    setError("");
    // Clear the form after booking
    setFormData({
      movieTime: "",
      cinemaHouse: "",
      selectedSeats: [],
      customTime: "",
    });
  };

  // Function to generate movie times based on the current time
  const generateMovieTimes = (interval) => {
    const times = [];
    const now = new Date();
    let currentTime = new Date(now);
    // Round to the next half hour
    currentTime.setMinutes(Math.ceil(now.getMinutes() / interval) * interval);
    
    const endTime = new Date(now.setHours(23, 0, 0)); // 11 PM
    while (currentTime <= endTime) {
      const hours = String(currentTime.getHours()).padStart(2, "0");
      const minutes = String(currentTime.getMinutes()).padStart(2, "0");
      times.push(`${hours}:${minutes}`);
      currentTime.setMinutes(currentTime.getMinutes() + interval);
    }
    return times;
  };

  // Generate movie times every 30 minutes from now until 11 PM
  useEffect(() => {
    const availableTimes = generateMovieTimes(30);
    setMovieTimes(availableTimes);
  }, []);

  const seats = Array.from({ length: 10 }, (_, index) => `Seat ${index + 1}`);

  return (
    <div className="booking-container">
      <h1>Book Your Tickets</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="movieTime">Movie Time:</label>
          <select
            id="movieTime"
            name="movieTime"
            value={formData.movieTime}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select a time
            </option>
            {movieTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
          <div>
            <label htmlFor="customTime">Or enter a custom time:</label>
            <input
              type="time"
              id="customTime"
              name="customTime"
              value={formData.customTime}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="cinemaHouse">Cinema House:</label>
          <input
            type="text"
            id="cinemaHouse"
            name="cinemaHouse"
            value={formData.cinemaHouse}
            onChange={handleChange}
            required
          />
        </div>
        <div className="seats-container">
          <h2>Select Seats:</h2>
          {seats.map((seat, index) => (
            <div
              key={index}
              className={`seat ${
                formData.selectedSeats.includes(seat) ? "selected" : ""
              }`}
              onClick={() => handleSeatSelection(seat)}
            >
              {seat}
            </div>
          ))}
        </div>
        <button type="submit">Confirm Booking</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {confirmation && <p className="confirmation-message">{confirmation}</p>}
    </div>
  );
};

export default Booking;


