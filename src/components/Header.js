import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import { FaSearch } from 'react-icons/fa';  

function Header() {
  return (
    <header className="header container-fluid d-flex align-items-center justify-content-between p-3 bg-light">
      <Link to="/"  className="logo-link no-underline">
        <div className="logo">
          <span className="text-black p-1" >book</span>
          <span className=" text-red-700 p-1">my</span>
          <span className="text-black">show</span>
        </div>
      </Link>
      
      <div className="search-bar input-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search for Movies, Events, Plays, Sports and Activities" 
        />
        <span className="input-group-text search-icon">
          <FaSearch />
        </span>
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
