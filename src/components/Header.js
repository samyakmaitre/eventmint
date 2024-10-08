import React from "react";
import NavBar from "./NavBar";
import { Link, useNavigate, useLocation } from "react-router-dom";

import "../assets/styles/Header.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../services/operations/authAPI";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.profile);
    
    const location = useLocation();

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

            <div className="search-location-container d-flex align-items-center justify-content-between w-100">
                <div className="search-bar input-group w-75" style={{ marginLeft: "20px" }}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for Movies, Events, Plays, Sports and Activities"
                    />
                    <span className="input-group-text">
                        <i className="bi bi-search"></i>
                    </span>
                </div>

                <select className="location form-select w-auto" style={{ marginLeft: "10px" }}>
                    <option value="Nagpur">Nagpur</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Pune">Pune</option>
                </select>
            </div>

            <div className="location-signin d-flex align-items-center">
                {user ? (
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => dispatch(logout(navigate))}>
                        Log out
                    </button>
                ) : (
                    <div className="flex flex-row gap-2 justify-center items-center">
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
