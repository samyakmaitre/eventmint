// Header.js
import React from 'react'; // Add this line
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import projectLogo from '../assets/images/logo8.png';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  


function Header() {
  return (
    <header className="header container-fluid d-flex align-items-center justify-content-between p-3 bg-light">
      <div className="logo">
        <img src={projectLogo} alt="logo"/>
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
        </select>
        <button className="btn btn-outline-primary">
          <Link to="/login">Sign in</Link>
        </button>
      </div>
    </header>
  );
}

export default Header;
