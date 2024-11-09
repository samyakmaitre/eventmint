import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/NavBar.css";

const Navbar = () => {
  const handleComingSoon = (event) => {
    event.preventDefault(); // Prevents navigation
    alert("This part of the website is not yet prepared.");
  };

  return (
    <nav className="navbar secondsnav">
      <div className="container mx-auto px-4 py-3 flex justify-center items-center gap-x-10" style={{ justifyContent: "center" }}>
        <div className="flex space-x-8">
          <NavLink
            to="/movies"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Movies
          </NavLink>
          <span
            onClick={handleComingSoon} // Show alert on click
            className="nav-link"
            style={{ cursor: "pointer" }}
          >
            Stream Events
          </span>
          <NavLink
            to="/plays"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Plays
          </NavLink>
          <NavLink
            to="/sports-activities"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Sports Activities
          </NavLink>
        </div>

        {/* Right Section */}
        <div className="flex space-x-8">
          <NavLink
            to="/list-shows"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            List Your Show
          </NavLink>
          <span
            onClick={handleComingSoon} // Show alert on click
            className="nav-link"
            style={{ cursor: "pointer" }}
          >
            Corporates
          </span>
          <NavLink
            to="/offers"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Offers
          </NavLink>
          <NavLink
            to="/gift-cards"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Gift Cards
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
