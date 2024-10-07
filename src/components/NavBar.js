// NavBar.js
import React from 'react';
import '../assets/styles/NavBar.css'; // Import a CSS file for styling

function NavBar() {
  return (
    <nav className="navbar">
      <div className="main-nav">
        <ul>
          <li><a href='#movies'>Movies</a></li>
          <li><a href='#events'>Events</a></li>
          <li>Stream</li>
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
