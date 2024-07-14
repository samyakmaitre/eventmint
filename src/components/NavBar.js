// NavBar.js
import React from 'react';
import '../assets/styles/NavBar.css'; // Import a CSS file for styling

function NavBar() {
  return (
    <nav className="navbar">
      <div className="main-nav">
        <ul>
          <li>Movies</li>
          <li>Stream</li>
          <li>Events</li>
          <li>Plays</li>
          <li>Sports</li>
          <li>Activities</li>
        </ul>
      </div>
      <div className="additional-links">
        <ul>
          <li>ListYourShow</li>
          <li>Corporates</li>
          <li>Offers</li>
          <li>Gift Cards</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
