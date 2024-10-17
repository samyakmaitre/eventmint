// StreamEvent.jsx
import React from 'react';
import '../assets/styles/StreamEventsPage.css';

function StreamEvent({ name, image, date, venue, genre }) {
  return (
    <div className="stream-event">
      <img src={image} alt={`${name} thumbnail`} className="event-thumbnail" />
      <h2 className="event-name">{name}</h2>
      <p className="event-genre">🎭 {genre}</p>
      <p className="event-date">📅 {new Date(date).toDateString()}</p>
      <p className="event-venue">📍 {venue}</p>
    </div>
  );
}

export default StreamEvent;
