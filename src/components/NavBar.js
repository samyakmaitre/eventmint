import React from 'react';
import '../assets/styles/NavBar.css'; // Import a CSS file for styling

function NavBar() {
  return (
    <nav className="navbar">
      {/* Entertainment Dropdown */}
      <div className="dropdown">
        <button className="dropbtn">Entertainment</button>
        <div className="dropdown-content">
          <a href="#">Movies</a>
          <a href="#">Stream</a>
          <a href="#">Plays</a>
        </div>
      </div>

      {/* Events & Activities Dropdown */}
      <div className="dropdown">
        <button className="dropbtn">Events & Activities</button>
        <div className="dropdown-content">
          <a href="#">Events</a>
          <a href="#">Sports</a>
          <a href="#">Activities</a>
        </div>
      </div>

      {/* Corporate & Offers Dropdown */}
      <div className="dropdown">
        <button className="dropbtn">Corporate & Offers</button>
        <div className="dropdown-content">
          <a href="#">Corporates</a>
          <a href="#">Offers</a>
          <a href="#">Gift Cards</a>
        </div>
      </div>

      {/* Single link */}
      <div className="single-link">
        <a href="#">List Your Show</a>
      </div>
    </nav>
  );
}

export default NavBar;
