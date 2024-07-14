// Header.js
import React from 'react';
import '../assets/styles/Header.css'; // Import a CSS file for additional styling if needed

function Header() {
  return (
    <header className="header container-fluid d-flex align-items-center justify-content-between p-3 bg-light">
      <div className="logo">
        <span>book</span><span className="highlight">my</span><span>show</span>
      </div>
      <div className="search-bar input-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search for Movies, Events, Plays, Sports and Activities" 
        />
      </div>
      <div className="location-signin d-flex align-items-center">
        <select className="location me-3 form-select">
          <option value="Nagpur">Nagpur</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Pune">Pune</option>
          {/* Add more locations as needed */}
        </select>
        <button className="btn btn-outline-primary">Sign in</button>
      </div>
    </header>
  );
}

export default Header;
