import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../assets/styles/NavBar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Movies');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex space-x-8">
          <Link
            to="/movies"
            className={`nav-link ${activeLink === 'Movies' ? 'active' : ''}`}
            onClick={() => handleLinkClick('Movies')}
          >
            Movies
          </Link>
          <Link
            to="/stream-events"
            className={`nav-link ${activeLink === 'Stream Events' ? 'active' : ''}`}
            onClick={() => handleLinkClick('Stream Events')}
          >
            Stream Events
          </Link>
          <Link
            to="/plays"
            className={`nav-link ${activeLink === 'Plays' ? 'active' : ''}`}
            onClick={() => handleLinkClick('Plays')}
          >
            Plays
          </Link>
          <Link
            to="/sports-activities"
            className={`nav-link ${activeLink === 'Sports Activities' ? 'active' : ''}`}
            onClick={() => handleLinkClick('Sports Activities')}
          >
            Sports Activities
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex space-x-8">
          <Link
            to="/list-your-show"
            className={`nav-link ${activeLink === 'List Your Show' ? 'active' : ''}`}
            onClick={() => handleLinkClick('List Your Show')}
          >
            List Your Show
          </Link>
          <Link
            to="/corporates"
            className={`nav-link ${activeLink === 'Corporates' ? 'active' : ''}`}
            onClick={() => handleLinkClick('Corporates')}
          >
            Corporates
          </Link>
          <Link
            to="/offers"
            className={`nav-link ${activeLink === 'Offers' ? 'active' : ''}`}
            onClick={() => handleLinkClick('Offers')}
          >
            Offers
          </Link>
          <Link
            to="/gift-cards"
            className={`nav-link ${activeLink === 'Gift Cards' ? 'active' : ''}`}
            onClick={() => handleLinkClick('Gift Cards')}
          >
            Gift Cards
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
