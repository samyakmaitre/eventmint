import React, { useState, useEffect } from "react";
import ImageSlider from "./ImageSlider";
import MovieList from "./MovieList";
import Footer from "./Footer";
import Header from "./Header";
import Heading from "./heading";
import Chatbot from "../chatbot";
import Loader from "./Loader";
import FAQ from "./FAQ";
import "../App.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader loading={loading} />;
  }

  return (
    <div className="App">
      <Header onSearch={setSearchTerm} />
      <Chatbot />
      <Heading />
      <ImageSlider />
      <MovieList searchTerm={searchTerm} />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
