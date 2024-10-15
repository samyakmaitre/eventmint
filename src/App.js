/** @format */

import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import Router from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Home from "./components/Home";
import Template from "./components/Auth/Template";
import Forget from "./components/Forget";
import MovieDetails from './components/MovieDetails';
import AboutUs from "./components/AboutUs";
import Offers from "./components/Offers";


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
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/offers" element={<Offers/>}/>
				</Routes>
			</Router>
		</div>
	);

}

export default App;
