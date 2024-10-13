/** @format */

import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import Router from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Home from "./components/Home";
import Template from "./components/Auth/Template";
import Forget from "./components/Forget";
import MovieDetails from './components/MovieDetails';
<<<<<<< HEAD
import ContactUs from "./components/ContactUs";
=======
import AboutUs from "./components/AboutUs";
>>>>>>> main


function App() {

	return (
		<div>
			<Router>
				<Routes>
					<Route
						path="/"
						element={<Home />}></Route>
					{<Route
						path="/login"
						element={<Template formType={"login"} />}
					/>}

					<Route
						path="/signup"
						element={<Template formType={"signup"} />}
					/>
					<Route path="/forget" element={<Forget />} />
					<Route path="/movies/:id" element={<MovieDetails />} />
					<Route path="/contact-us" element={<ContactUs />} />
					<Route path="/about-us" element={<AboutUs />} />
				</Routes>
			</Router>
		</div>
	);

}

export default App;
