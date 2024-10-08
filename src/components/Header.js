/** @format */

import React from "react"; // Add this line
import NavBar from "./NavBar";
import { Link, useNavigate,useLocation } from "react-router-dom";


import "../assets/styles/Header.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../services/operations/authAPI";
// import { useLocation } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.profile);
    
    const location = useLocation(); // Get the current path

    // If the current path is "/signup" or "/login", don't render the Header
    if (location.pathname === "/signup" || location.pathname === "/login") {
        return null;
    } 

    return (
        <header className="header container-fluid d-flex align-items-center justify-content-between p-3 bg-white">
            <div className="logo">
                <span>book</span>
                <span className="highlight">my</span>
                <span>show</span>
            </div>
            <div className="search-bar input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for Movies, Events, Plays, Sports and Activities"
                />
                <span className="input-group-text">
                    <i className="bi bi-search"></i> {/* Bootstrap Icon */}
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
                {user ? (
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => dispatch(logout(navigate))}>
                        Log out
                    </button>
                ) : (
                    <div className=" flex flex-row gap-2 justify-center items-center">
                        <button
                            className="px-3 rounded-lg w-[120px] py-2 border-[2px] text-black font-semibold hover:font-semibold border-red-600 hover:bg-red-300"
                            onClick={() => navigate("/login")}>
                            Sign in
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
