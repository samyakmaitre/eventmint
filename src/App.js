// Example of importing components in App.js
import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';
import Offers from './components/Offers';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <ImageSlider />
      <MovieList />
      <Offers />
      <Footer />
    </div>
  );
}

export default App;
