/** @format */

import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Home from "./components/Home";
import Template from "./components/Auth/Template";
import Forget from "./components/Forget";
import MovieDetails from "./components/MovieDetails";
import AboutUs from "./components/AboutUs";
import Offers from "./components/Offers";
import StreamEvents from "./components/StreamEvents";
import Plays from "./components/Plays";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {<Route path="/login" element={<Template formType={"login"} />} />}

          <Route path="/signup" element={<Template formType={"signup"} />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/stream-events" element={<StreamEvents />} />
          <Route path="/plays" element={<Plays />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
