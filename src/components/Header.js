import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Header.css";
import { StoreContext } from "../ContextAPI/ContextAPI";

const Header = () => {
  const { token, userEmail } = useContext(StoreContext);
  return (
    <header className="header sticky-top container-fluid d-flex align-items-center justify-content-between">
      <Link className="navbar-brand" to={"/"}>
        <img src="/logo.png" alt="EventMint" />
      </Link>

      <div className="search-bar input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for Movies, Events, Plays, Sports and Activities"
        />
        <button className="btn btn-outline-secondary">🔍</button>
      </div>
      <div className="location-signin d-flex align-items-center">
        <select className="location me-3 form-select">
          <option value="Nagpur">Nagpur</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Pune">Pune</option>
        </select>
        {token && userEmail ? (
          <Link className="btn btn-outline-info" to={"/user/dashboard"}>
            {userEmail || ""}
          </Link>
        ) : (
          <Link className="btn btn-dark" to={"/user/signup"}>
            Sign up
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
