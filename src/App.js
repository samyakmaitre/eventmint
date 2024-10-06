/** @format */

import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import Router from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Home from "./components/Home";
import Template from "./components/Auth/Template";

import Header from './components/Header';
import NavBar from './components/NavBar'; 
import MovieList from './components/MovieList';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';
import Offers from './components/Offers';
import './App.css'; // Your custom CSS

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route
						path="/"
						element={<Home />}></Route>
					<Route
						path="/login"
						element={<Template formType={"login"} />}
					/>
					<Route
						path="/signup"
						element={<Template formType={"signup"} />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
