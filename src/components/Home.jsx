/** @format */

import React from "react";
import ImageSlider from "./ImageSlider";
import MovieList from "./MovieList";
import Offers from "./Offers";
import Footer from "./Footer";
import Header from "./Header";
import "../App.css";
import Heading from "./heading";

const Home = () => {
	return (
		<div>
			<div className="App">
				<Header />
				<Heading/>
				<ImageSlider />
				<MovieList />
				<Offers />
				<Footer />
			</div>
		</div>
	);

};

export default Home;
