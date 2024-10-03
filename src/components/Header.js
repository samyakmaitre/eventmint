/** @format */

// Header.js
import React from "react"; // Add this line
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/Header.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../services/operations/authAPI";
import { useDispatch } from "react-redux";

function Header() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.profile);

	return (
		<header className="header fixed z-10 container-fluid d-flex align-items-center justify-content-between p-3 bg-white">
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
							className="px-3 rounded-lg w-[120px] py-2 border-[2px] border-blue-600 hover:bg-blue-400"
							onClick={() => navigate("/login")}>
							Sign in
						</button>
						<button
							className="px-3 rounded-lg w-[120px] py-2 border-[2px] border-blue-600 hover:bg-blue-400"
							onClick={() => navigate("/signup")}>
							New Account
						</button>
					</div>
				)}
			</div>
		</header>
	);
}

export default Header;
