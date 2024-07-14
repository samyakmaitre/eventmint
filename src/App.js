// Example of importing components in App.js
import React from 'react';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import NavBar from './components/NavBar'; 
import MovieList from './components/MovieList';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';
import Offers from './components/Offers';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <ImageSlider />
      <MovieList />
      <Offers />
      <Footer />
    </div>
  );
}

export default App;
