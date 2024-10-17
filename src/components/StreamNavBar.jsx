// StreamNavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/StreamNavBar.css';

const StreamNavBar = () => {
  return (
    <nav className="stream-navbar">
      <div className="navbar-brand">EventMint</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/stream-events">Stream Events</Link></li>
      </ul>
    </nav>
  );
};

export default StreamNavBar;
