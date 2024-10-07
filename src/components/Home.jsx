/** @format */

import React from "react";
import NavBar from "./NavBar";
import ImageSlider from "./ImageSlider";
import MovieList from "./MovieList";
import Offers from "./Offers";
import Footer from "./Footer";
import Header from "./Header";
import "../App.css";

const Home = () => {

  return (
    <div>
      <div className="App">
        <Header />
        <NavBar/>
        <ImageSlider />
        <MovieList />
        <Offers />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
