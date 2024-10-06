/** @format */

import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import Router from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Home from "./components/Home";
import Template from "./components/Auth/Template";
import { fairyDustCursor } from "./components/FairyDust"; // Import the fairy-dust effect

function App() {
	// Initialize the fairy-dust cursor effect globally
	useEffect(() => {
		fairyDustCursor();
	}, []);

	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Template formType={"login"} />} />
					<Route path="/signup" element={<Template formType={"signup"} />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
