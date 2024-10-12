import React, { useState } from 'react';
import '../assets/styles/NavBar.css';

const Navbar = ({ scrolled }) => {
  const [activeLink, setActiveLink] = useState('Movies');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <style>
        {`
        .navbar {
          position: sticky;
          top: 10vh; /* Adjust this value based on the height of the header */
          z-index: 999; /* Ensure it stays above other content but below the header */
          transition: background-color 0.3s ease;
        }
        .navbar.scrolled {
          background-color: rgba(0, 0, 0, 0.8);
        }
        `}
      </style>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex space-x-8">
          <a
            href="#"
            className={`nav-link ${activeLink === 'Movies' ? 'active' : ''}`}
            onClick={() => handleLinkClick('Movies')}
          >
            Movies
          </a>
          <a
            href="#"
            className={`nav-link ${activeLink === 'Stream Events' ? 'active' : ''}`}
            onClick={() => handleLinkClick('Stream Events')}
          >
            Stream Events
          </a>
          <a
            href="#"
            className={`nav-link ${activeLink === 'Plays' ? 'active' : ''}`}
            onClick={() => handleLinkClick('Plays')}
          >
            Plays
          </a>
          <a
            href="#"
            className={`nav-link ${activeLink === 'Sports Activities' ? 'active' : ''}`}
            onClick={() => handleLinkClick('Sports Activities')}
          >
            Sports Activities
          </a>
        </div>

        {/* Right Section */}
        <div className="flex space-x-8">
          <a
            href="#"
            className={`nav-link ${activeLink === 'List Your Show' ? 'active' : ''}`}
            onClick={() => handleLinkClick('List Your Show')}
          >
            List Your Show
          </a>
          <a
            href="#"
            className={`nav-link ${activeLink === 'Corporates' ? 'active' : ''}`}
            onClick={() => handleLinkClick('Corporates')}
          >
            Corporates
          </a>
          <a
            href="#"
            className={`nav-link ${activeLink === 'Offers' ? 'active' : ''}`}
            onClick={() => handleLinkClick('Offers')}
          >
            Offers
          </a>
          <a
            href="#"
            className={`nav-link ${activeLink === 'Gift Cards' ? 'active' : ''}`}
            onClick={() => handleLinkClick('Gift Cards')}
          >
            Gift Cards
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;