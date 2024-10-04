import React from "react";
import "../assets/styles/NavBar.css"; // Import a CSS file for styling

function NavBar() {
  return (
    <nav className="navbar">
      <div className="main-nav">
        <ul>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Stream</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Plays</a>
          </li>
          <li>
            <a href="#">Sports</a>
          </li>
          <li>
            <a href="#">Activities</a>
          </li>
        </ul>
      </div>
      <div className="additional-links">
        <ul>
          <li>
            <a href="#">List Your Show</a>
          </li>
          <li>
            <a href="#">Corporates</a>
          </li>
          <li>
            <a href="#">Offers</a>
          </li>
          <li>
            <a href="#">Gift Cards</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
