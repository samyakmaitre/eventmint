/** @format */

import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import Router from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Home from "./components/Home";
import Template from "./components/Auth/Template";

import MovieDetails from './components/MovieDetails';
import AboutUs from "./components/AboutUs";
import PasswordRecovery from "./components/Auth/PasswordRecovery";


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
					 <Route path="/password-recovery" element={<PasswordRecovery />} />
					
					<Route path="/movies/:id" element={<MovieDetails />} />
					<Route path="/about-us" element={<AboutUs />} />
				</Routes>
			</Router>
		</div>
	);

}

export default App;
