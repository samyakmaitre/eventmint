// Header.js
import React from 'react'; // Add this line
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  


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
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="bi bi-search"></i> {/* Bootstrap Icon */}
          </span>
        </div>
      </div>
      <div className="location-signin d-flex align-items-center">
        <select className="location me-3 form-select">
          <option value="Nagpur">Nagpur</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Pune">Pune</option>
        </select>
        <button className="btn btn-outline-primary">
          <Link to="/login">Sign in</Link>
        </button>
      </div>
    </header>
  );
}

export default Header;
