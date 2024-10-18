import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import Link from react-router-dom
import '../assets/styles/NavBar.css';

const Navbar = ({ isSticky }) => {
  const [activeLink, setActiveLink] = useState('Movies');

  return (
    <>
      <style>
        {`
        .sticky-navbar {
          position: fixed;
          top: 81px; /* Adjust this value to match the height of the header */
          width: 100%;
          z-index: 1010;
        }
        `}
      </style>
      <nav className={`navbar ${isSticky ? 'sticky-navbar' : ''}`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex space-x-8">
            <NavLink
              to="/movies"
              className={`nav-link ${activeLink === 'Movies' ? 'active' : ''}`}
            >
              Movies
            </NavLink>
            <NavLink
              to="/stream-events"
              className={`nav-link ${activeLink === 'Stream Events' ? 'active' : ''}`}
            >
              Stream Events
            </NavLink>
            <NavLink
              to="/plays"
              className={`nav-link ${activeLink === 'Plays' ? 'active' : ''}`}
            >
              Plays
            </NavLink>
            <NavLink
              to="/sports-activities"
              className={`nav-link ${activeLink === 'Sports Activities' ? 'active' : ''}`}
            >
              Sports Activities
            </NavLink>
          </div>

          {/* Right Section */}
          <div className="flex space-x-8">
            <NavLink
              to="/list-shows"
              className={`nav-link ${activeLink === 'List Your Show' ? 'active' : ''}`}
            >
              List Your Show
            </NavLink>
            <NavLink
              to="/corporates"
              className={`nav-link ${activeLink === 'Corporates' ? 'active' : ''}`}
            >
              Corporates
            </NavLink>
            <NavLink
              to="/offers"
              className={`nav-link ${activeLink === 'Offers' ? 'active' : ''}`}
            >
              Offers
            </NavLink>
            <NavLink
              to="/gift-cards"
              className={`nav-link ${activeLink === 'Gift Cards' ? 'active' : ''}`}
            >
              Gift Cards
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;