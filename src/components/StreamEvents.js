import React from "react";
import "../assets/styles/StreamEvents.css";
import { Link } from "react-router-dom";

function StreamEvent({ id, poster, title, rating, votes, genre, eventDateTime }) {
  return (
    <div className="stream-event">
      <img src={poster} alt={`${title} poster`} className="stream-event-poster" />
      <p className="stream-event-rating">
        <span className="rating-star">★</span>
        <span className="rating-points"> {rating}/10 </span>
        <span className="votes">({votes} Votes)</span>
      </p>
      <h2 className="stream-event-title">{title}</h2>
      <p className="stream-event-genre">{genre}</p>
      <p className="stream-event-date-time">
        <span className="event-label">Event Date & Time:</span> {eventDateTime}
      </p>
      <Link to={`/stream-events/${id}`}>
        <button className="stream-tickets-button">Watch Now</button>
      </Link>
    </div>
  );
}

export default StreamEvent;
