import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import Header from './components/Header';
import NavBar from './components/NavBar'; 
import MovieList from './components/MovieList';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';
import Offers from './components/Offers';
import './App.css'; // Your custom CSS

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <ImageSlider />
        <MovieList />
        <Offers />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
