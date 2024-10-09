import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import MovieList from "./MovieList";
import Offers from "./Offers";
import Footer from "./Footer";
import Header from "./Header";
import "../App.css";
import Heading from "./heading";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState(""); 

    return (
        <div>
            <div className="App">
                <Header onSearch={setSearchTerm} /> 
                <Heading />
                <ImageSlider />
                <MovieList searchTerm={searchTerm} /> 
                <Offers />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
